import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import uuid from "react-uuid";
const ENDPOINT = "http://127.0.0.1:4441";
export const socketConnection = () => {
  return socketIOClient(ENDPOINT);
};

export const MyForm = ({ data, type }) => {
  const [id, setId] = useState("");
  const [isReadyToPlay, setIsReadyToPlay] = useState(true);
  // const ENDPOINT = "http://127.0.0.1:4441";
  // const socket = socketIOClient(ENDPOINT) ;
  let navigate = useNavigate();
  let socket = {};
  useEffect(() => {
    socket = socketConnection();
    console.log("bro");
    socket.on("connection", ({ id }) => {
      console.log("New user", id);
      setId(id);
    });
  }, []);

  // useEffect(() => {
  //   console.log('fff');
  //   // localStorage.setItem("playingState", isReadyToPlay);
  // }, [isReadyToPlay]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let gameBoeard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    if (type == "create") {
      let uniqueId = uuid();
      localStorage.setItem("roomId", uniqueId);
      localStorage.setItem("Player1-id", id);

      let obj = {};
      localStorage.setItem("sign", "X");

      Array.from(e.target)
        .map(
          ({ name, value }) =>
            value != "" &&
            (obj = {
              ...obj,
              ...{ [name]: value },
              roomId: uniqueId,
              player1: id,
              player2: "",
              gameBoeard,
              sign: "X",
              playingState: isReadyToPlay,
            })
        )
        .filter((e) => e);

      localStorage.setItem("Player1-Name", obj["Player1-Name"]);
      // setIsReadyToPlay(false);
      console.log(socket);
      socket = socketConnection();
      socket.emit("dataUser", obj);
      navigate("/test");
    } else {
      let obj = {};
      localStorage.setItem("sign", "O");
      Array.from(e.target)
        .map(
          ({ name, value }) =>
            value != "" &&
            (obj = {
              ...obj,
              ...{ [name]: value },
              player2: id,
              gameBoeard,
              sign: "O",
            })
        )
        .filter((e) => e);

      localStorage.setItem("roomId", obj.roomId);
      localStorage.setItem("Player2-id", id);
      localStorage.setItem("Player2-Name", obj["Player2-Name"]);
      socket = socketConnection();

      socket.emit("dataUser", obj);
      navigate("/test");
      console.log(obj);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex p-2 flex-col w-[90%] m-auto justify-center gap-4 items-center ">
        {data &&
          data.map((e, i) => {
            return (
              <div key={i} className="w-full">
                <label
                  htmlFor={e}
                  className="flex w-full flex-start mb-3  text-2xl font-medium text-gray-900 dark:text-gray-300"
                >
                  {e} :
                </label>
                <input
                  type="text"
                  id={e}
                  //   value={value}
                  //   onChange={(e) => setValue(e.target.value)}
                  name={e}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={"Enter Your " + e}
                  required
                />
              </div>
            );
          })}

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            //   onClick={() => sendDataUser()}
          >
            Send!
          </button>
        </div>
      </div>
    </form>
  );
};

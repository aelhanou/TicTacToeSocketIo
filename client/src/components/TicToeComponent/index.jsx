import React, { useEffect, useState } from "react";
// import socketIOClient from "socket.io-client";
import { socketConnection } from "../../components/MyForm";

export const TicToeComponent = ({ setINdex, index, sign }) => {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [value, setValue] = useState({});

  // const ENDPOINT = "http://127.0.0.1:4441";
  let socket = {};
  useEffect(() => {
    // console.log(index);

    socket = socketConnection();
    socket.on("dataUser", (data) => {
      setValue(data);
      // let yo = data.gameBoeard.get(localStorage.get("sign"))
      console.log(data.gameBoeard);
      setINdex(data.gameBoeard);
    });
  }, []);

  // }, []);
  const boardTable = (j, i) => {
    console.log(index);
    // setINdex([f, ...index]);
    // console.log(index);
    socket = socketConnection();
    // socket.emit("dataUser", value);

    if (Object.keys(value).length > 0) {
      localStorage.setItem("data", JSON.stringify(value));
      let sign = localStorage.getItem("sign");
      // if (f <= 3) {
      //   value.gameBoeard[0][f - 1] = sign;
      // } else if (f > 3 && f <= 6) {
      //   j = f - 3;
      //   value.gameBoeard[1][j - 1] = sign;
      // } else {
      //   j = f - 3 * 2;
      //   value.gameBoeard[2][j - 1] = sign;
      // }
      value.gameBoeard[j][i] = sign;
      console.log(value.gameBoeard);
      socket.emit("dataUser", value);
    } else {
      socket.emit("dataUser", JSON.parse(localStorage.getItem("data")));
    }
  };

  return (
    <div className="w-[70%]  flex flex-col justify-evenly h-[80vh] ">
      <div className="w-full text-xl flex items-center  justify-between px-20 mb-4 bg-black text-black">
        <div className="p-4 bg-black text-white">Player1: {JSON.parse(localStorage.getItem("data")) && JSON.parse(localStorage.getItem("data"))["Player1-Name"]}</div>
        <div className="p-4 bg-black text-white">Player2: {JSON.parse(localStorage.getItem("data")) && JSON.parse(localStorage.getItem("data"))["Player2-Name"]}</div>
      </div>
      {index.map((e, j) => {
        return (
          <div
            key={j}
            className="flex justify-evenly  border-b-black border-4 w-full h-full "
          >
            {e.map((f, i) => {
              return (
                <div
                  key={i}
                  onClick={() => boardTable(j, i)}
                  className="flex justify-center text-4xl border-r-black border-4 items-center   w-full "
                >
                  {index[j][i]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// import { useEffect, useState } from 'react';
// import { socketConnect } from 'socket.io-react';
// import { socket } from '.';
import React, { useState, useEffect } from "react";
import { MyForm, MyModel } from "../../components";
import { socketConnection } from "../../components/MyForm";

export const TicTacToe = () => {
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  const [createRoom, setCreateRoom] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);

  // const [user, setUser] = useState({});
  // const [response, setResponse] = useState([]);

  //   useEffect(()=>{
  //     socket.on("data", (msg) => {
  //       console.log(msg); // x8WIv7-mJelg7on_ALbx
  //     });
  //   })
  let socket = {};
  useEffect(() => {
    socket = socketConnection();
  }, []);

  // let sign = "X";

  // useEffect(() => {
  //   if (name && sign) {
  //     setUser({ name: name, sign, room: room });
  //   }
  // }, [name]);

  // const sendDataUser = () => {
  //   let { name, sign, room } = user;
  //   if (name && sign && room) {
  //     socket.emit("FromAPI", user);
  //   }
  // };
  // function sendMessage() {
  //   socket.emit("FromAPI", msg);
  // }

  // useEffect(() => {
  //   socket.on("FromAPI", (data) => {
  //     setResponse([...response, data]);
  //   });
  // }, [response]);

  return (
    <>
      <div className="w-full h-[100vh] bg-black text-white flex gap-4 justify-center items-center text-2xl">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCreateRoom(!createRoom)}
        >
          Create Room
        </button>
        {createRoom && (
          <MyModel click={createRoom} setClick={setCreateRoom}>
            <MyForm data={["Player1-Name", "Room-Name"]} type="create" />
          </MyModel>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setJoinRoom(!joinRoom)}
        >
          Join Room
        </button>
        {joinRoom && (
          <MyModel click={joinRoom} setClick={setJoinRoom}>
            <MyForm data={["Player2-Name", "roomId"]} type="join" />
          </MyModel>
        )}
      </div>

      {/* <div className="mb-6">
        <label
          htmlFor="Room"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name Of Room
        </label>
        <input
          type="Room"
          id="email"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Name"
          required
        />
      </div>
       */}
    </>
  );

  // return (
  //   <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignContent: "center", background: "black", color: "white" }}>
  //     <input style={{ width: "400px", height: "40px" }} type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
  //     <button style={{ width: "200px", height: "40px", background: "white" }} onClick={sendMessage}>
  //       Send!
  //     </button>

  //   </div>
  // );
};

export default TicTacToe;

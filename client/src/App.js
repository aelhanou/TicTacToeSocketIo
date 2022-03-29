import React from "react";
import {  Routes ,Route } from "react-router-dom";
import { Test, TicTacToe } from "./pages";


function App() {

  return (
    <>
        <Routes>
          <Route path="/tictactoe" element={<TicTacToe/>} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </>
  )

  // return (
  //   <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignContent: "center", background: "black", color: "white" }}>
  //     <input style={{ width: "400px", height: "40px" }} type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
  //     <button style={{ width: "200px", height: "40px", background: "white" }} onClick={sendMessage}>
  //       Send!
  //     </button>

  //   </div>
  // );
}

export default App;

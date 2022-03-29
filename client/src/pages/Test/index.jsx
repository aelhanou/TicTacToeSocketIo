import React, { useState } from "react";
import { TicToeComponent } from "../../components";

export const Test = () => {
  const [Index, setINdex] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  let sign = "X";


  




  return (
    <div className="flex bg-black text-white justify-center items-center  w-full h-[100vh]">
      <TicToeComponent setINdex={setINdex} index={Index} sign={sign} />
    </div>
  );
};

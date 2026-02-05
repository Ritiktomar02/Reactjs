import React, { useState } from 'react'
import {Hand ,  Scissors,HandGrab} from "lucide-react"

const App = () => {

  const [user,setuser]=useState(0);
  const [computer,setcomputer]=useState(0);
  const [userchoice,setuserchoice]=useState("");
  const [computerchoice,setcomputerchoice]=useState("");
  const game=["rock","paper","scissor"];
  
  const onClickHandler = (userinput) => {

  setuserchoice(userinput);

  const randomnumber = Math.floor(Math.random() * 3);
  const computerinput = game[randomnumber];

  setcomputerchoice(computerinput);

  // ✅ DRAW CONDITION
  if (userinput === computerinput) {
    return;
  }

  // ✅ WIN / LOSE CONDITIONS
  if (
    (userinput === "rock" && computerinput === "scissor") ||
    (userinput === "paper" && computerinput === "rock") ||
    (userinput === "scissor" && computerinput === "paper")
  ) {
    setuser((prev) => prev + 1);
  } else {
    setcomputer((prev) => prev + 1);
  }
};

  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white flex justify-center items-center'>

     <div className='w-11/12 h-full flex flex-col items-center bg-[#444] gap-5 '>

     <div className='text-[2rem] text-[#4caf50] uppercase font-bold tracking-widest mt-6'>
      Welcome to rock, paper, scissors game
     </div>

     <div className='flex gap-10 '>
      <div className='px-3 rounded-xl border-transparent py-2 bg-[#4caf50] hover:bg-[#45a049] flex gap-2' onClick={()=>onClickHandler("rock")}> <HandGrab />Rock</div>
      <div className='px-3 rounded-xl border-transparent py-2 bg-[#4caf50] hover:bg-[#45a049] flex gap-2' onClick={()=>onClickHandler("paper")}><Hand />Paper</div>
      <div className='px-3 rounded-xl border-transparent py-2 bg-[#4caf50] hover:bg-[#45a049] flex gap-2' onClick={()=>onClickHandler("scissor")}>   <Scissors />Scissors</div>
     </div>

     <div className='font-bold text-shadow-lg'>
      Your choice is: <span className='uppercase'>{userchoice}</span>
     </div>

     <div className='font-bold text-shadow-lg'>
      Computer's choice is: <span className='uppercase'>{computerchoice}</span>
     </div>

     <div className='text-2xl font-bold'>
      Your Score: {user}
     </div>

     <div className='text-2xl font-bold mb-6'>
      Computer Score: {computer}
     </div>

     </div>

    </div>
  )
}


export default App
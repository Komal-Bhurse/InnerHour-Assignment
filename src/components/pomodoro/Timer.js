import React, { useContext, useEffect, useState } from "react";

// this library is usefull for to show a Beatifull circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PlayButton from "./PlayButton";
import PuaseButton from "./PuaseButton";
import SettingsButton from "./SettingsButton";
import CycleButton from "./CycleButton";
import RestartButton from "./RestartButton";
import { Pomodoro } from '../../context-api/PomodoroContext'

// initialize the color red for work and green for break
const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
// destructure the context
const {Cycle,playPause,setPlayPause, workMinite, breakMinite,restart,setRestart } = useContext(Pomodoro);

  const [mode,setMode] = useState('Work')
  const [completedCycle, setCompletedCycle] = useState(0)
  const [seconds, setSeconds] = useState(workMinite*60);

  // this function is usefull for changing the mode and set time according to the mode
  function switchMode(){
    const nextMode = mode === 'Work'?'Break':'Work';
    const secondsleft = nextMode === 'work'?workMinite*60:breakMinite*60;
    setMode(nextMode);
    setSeconds(secondsleft);
  }

  // this function is usefull for reset the timer
  function reset(){
    setCompletedCycle(0)
    setPlayPause(false)
    setMode('Work')
    setSeconds(workMinite*60)
  }

function changeCycle(){
   return setCompletedCycle(completedCycle+1)
}

  useEffect(() => {
    
    const interval = setInterval(() => {
      if (!playPause) {
        return;
      }
      if (seconds === 0) {
        if(mode === 'Break' && Cycle !== completedCycle){
            changeCycle()  
        }
        return switchMode();
      }
      if(Cycle <= completedCycle){
        reset();
        return;
      }
      setSeconds(seconds-1)
    }, 100);
    
    return () => clearInterval(interval);
  
  }, [seconds, playPause,mode,Cycle]);

  // this use effect is specially use for when user click on the reset button.
  useEffect(()=>{
    
    if(restart){
      reset()
      setRestart(false)
      return;
    }
  },[restart])


  const color = mode === 'Work'?red:green;

  const totalSeconds = mode === 'Work'? workMinite * 60 : breakMinite * 60;
  const percentage = Math.round((seconds /totalSeconds) * 100);

  let Minite = Math.floor(seconds / 60);
  if (Minite < 10) {
    Minite = "0" + Minite;
  }
  let Seconds = seconds % 60;
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }

  return (
    <div className=" w-80 m-auto p-5">
      <div className="mb-2">
        <h1 className="text-3xl mb-3">Pomodoro</h1>
        <span className="text-2xl block mb-3">Completed Cycle : {completedCycle} / {Cycle}</span>
        <span className={`text-2xl font-medium ${mode==='Work'?'text-red-400':'text-green-400'}`}>{mode}</span>
      </div>
      <CircularProgressbar
        value={percentage}
        text={`${Minite}:${Seconds}`}
        styles={buildStyles({
          pathColor:color,
          textColor: "#fff",
          tailColor: "rgba(255,255,255,0.2)",
        })}
      />
      <div className=" mt-5 flex items-center justify-between">
        <SettingsButton />
        {playPause ? <PuaseButton /> : <PlayButton />}
        <RestartButton />
      </div>
      <div className={`mt-5 ${playPause?'hidden':''}`}>
        <CycleButton />
      </div>
    </div>
  );
}

export default Timer;

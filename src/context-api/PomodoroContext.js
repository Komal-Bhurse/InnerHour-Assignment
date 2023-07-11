import React,{createContext,useState} from 'react'

export const Pomodoro = createContext()

function PomodoroContext({Children}) {
    const [Cycle, setCycle] = useState(1)
    let [playPause, setPlayPause] = useState(false)
    const [workMinite, setWorkMinite] = useState(1)
    const [breakMinite, setBreakMinite] = useState(1)
    const [restart, setRestart] = useState(false)
  return (
    <Pomodoro.Provider
    value={{Cycle,setCycle,playPause,setPlayPause,workMinite,breakMinite,restart,setRestart,setBreakMinite,setWorkMinite}}
    >
        {Children}
    </Pomodoro.Provider>
  )
}

export default PomodoroContext
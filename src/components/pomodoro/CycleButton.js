import React, { useContext } from 'react'
import MinusButton from './MinusButton'
import PlusButton from './PlusButton'
import { Pomodoro } from '../../context-api/PomodoroContext'

function CycleButton() {
  const {Cycle} = useContext(Pomodoro)

  return (
    <span className=' text-2xl flex items-center justify-center'>
        <label className="mr-2">Cycles :</label>
        <MinusButton/>
        <span>{Cycle}</span>
        <PlusButton/>
    </span>
  )
}

export default CycleButton
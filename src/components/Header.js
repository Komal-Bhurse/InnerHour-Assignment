import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='border-b pb-3 sm:flex items-center justify-center gap-2'>
        <div className='text-center max-sm:mb-5'>Task 1: <Link to={'/'}><span className='special-button shadow-lg'>Computation</span></Link></div>
        <div className='text-center'>Task 2: <Link to={'/pomodoro'}><span className='special-button shadow-lg'>Pomodoro Clock</span></Link></div>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import './App.css'

export default function AppXY() {
  const [position, setPosition] = useState({x:0, y:0})
  return (
    <div className='container' onPointerMove={(e) => {
      // setPosition({ x: e.clientX, y:e.clientY});
      // 수평이동
      setPosition(prev => ({ ...prev, x: e.clientX }))
    }}>
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
    </div>
  )
}

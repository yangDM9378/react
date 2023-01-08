import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='id 입력' value={text} onChange={handleChange}/>
    </form>
  )
}
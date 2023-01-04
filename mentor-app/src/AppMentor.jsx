import React, { useState } from 'react'

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '동민',
    title: '개발자',
    mentor: {
      name: '민수',
      title: '시니어 개발자'
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘터는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button 
      onClick={() => {
        const name = prompt(`맨토이름`);
        setPerson((prev) => ({...prev, mentor: {...prev.mentor, name: name}}))
      }}
      >
        멘토 이름 바꾸기
      </button>
      <button 
      onClick={() => {
        const title = prompt(`맨토직급`);
        setPerson((prev) => ({...prev, mentor: {...prev.mentor, title: title}}))
      }}
      >
        멘토 타이틀 바꾸기
     </button>
    </div>
  )
}

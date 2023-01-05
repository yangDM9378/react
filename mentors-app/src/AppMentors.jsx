import React, {useState} from 'react'

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: '동민',
    title: '개발자',
    mentors: [
      {
        name: '민수',
        title: '백엔드개발'
      },
      {
        name: '문삼',
        title: '프론트개발'
      }
    ]
  });
  return (
   <div>
    <h1>
      {person.name}은 {person.title}
    </h1>
    <p>{person.name}의 멘토는:</p>
    <ul>
      {person.mentors.map((mentor,index) => (
        <li key={index}>
          {mentor.name} ({mentor.title})
        </li>
      ))}
    </ul>
    <button
      onClick={() => {
        const prev = prompt(`누구의 이름을 바꿀껀가?`);
        const current = prompt('바꿀 이름?');
        setPerson((person) => ({
          ...person, 
          mentors: person.mentors.map((mentor) => {
            if (mentor.name === prev) {
              return {...mentor, name:current};
            }
            return mentor;
          }),
        }));
      }}
    >
      멘토이름 바꾸기
    </button>
   </div> 
  )
}
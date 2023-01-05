import React, {useState} from 'react'

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
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
  }
  const handleAdd = () => {
    const name = prompt('추가할 이름');
    const title = prompt('직책은')
    setPerson((person) => ({
      ...person, 
      mentors:[...person.mentors, { name, title }], 
    }))
  }
  const handleDelete = () => {
    const name = prompt(`누구 삭제`);
    setPerson((Person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name),
      }));
    }

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
    <button onClick={handleUpdate}>멘토이름 바꾸기</button>
    <button onClick={handleAdd}>멘토 추가하기</button>
    <button onClick={handleDelete}>멘토 삭제하기</button>
   </div> 
  )
}

const initialPerson = {
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
}
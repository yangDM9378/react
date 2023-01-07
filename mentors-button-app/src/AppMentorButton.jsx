import React, {useMemo, useReducer, memo} from 'react'
import { useCallback } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson)

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꿀껀가?`);
    const current = prompt('바꿀 이름?');
    dispatch({ type: 'updated', prev, current })
  }, [])

  const handleAdd = useCallback(() => {
    const name = prompt('추가할 이름');
    const title = prompt('직책은');
    dispatch({ type: 'added', name, title })
  },[])
  
  const handleDelete = useCallback(() => {
    const name = prompt(`누구 삭제`);
    dispatch({ type: 'deleted', name })
    },[])

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
    <Button text='멘토 이름 바꾸기' onClick={handleUpdate}>멘토이름 바꾸기</Button>
    <Button text='멘토 추가하기' onClick={handleAdd}>멘토 추가하기</Button>
    <Button text='삭제하기'  onClick={handleDelete}>멘토 삭제하기</Button>
   </div> 
  )
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering');
  const result = useMemo(() => calculateSomething(), []);
  return  (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  )
})

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

function calculateSomething() {
  for (let i=0; i<100; i++) {
    console.log('11');
  }
  return 10;
}
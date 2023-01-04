import './App.css';

function AppJSX() {
  const name = '동민';
  const list = ['우유','딸기','바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (<li>{item}</li>))}
      </ul>
      <img 
        style={{ width: '200px', height: '200px' }}
        src='https://unsplash.com/photos/ciNW5Gwwbcs'
        alt='nature'
      />
    </>
  );
}

export default AppJSX;

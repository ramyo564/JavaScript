import { useState, useRef, useEffect } from 'react'
import './App.css'

interface Todo {
  id : number;
  content : string;
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClicked = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
    setText("");
  };

    useEffect(() => {
      console.log(todos);
    },[todos]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return <div className='App'>
    <h1>Todo</h1>
    <input
      value={text}
      onChange={onChangeInput}
    ></input>
    <button onClick={onClicked}>추가</button>
  </div>

}

export default App

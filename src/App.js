import './App.css';
import {useState} from "react";
import {nanoid} from 'nanoid';
import Todo from './todo/todo';
import Todoinput from "./todoinput/todoinput";

const App = () => {
  const [todoList, setTodoList] = useState([
      {todo: 'Сделать домашку1', done: false, id: nanoid()},
      {todo: 'Сделать домашку2', done: false,  id: nanoid()},
      {todo: 'Сделать домашку3', done: false,  id: nanoid()},
      {todo: 'Сделать домашку4', done: false,  id: nanoid()},
      {todo: 'Сделать домашку5', done: false,  id: nanoid()},
  ]);

  const [inputData, setInputData] = useState('');

  const addTask = () => {
      setTodoList([...todoList, {
        todo: inputData,
        done: false,
        id: nanoid(),
    }]);
  };

  const removeTask = id =>{
      setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const getValue = (task) => {
      setInputData(task);
  };

  //const onDone = id => {
  //    setTodoList(todoList.filter(todo => {todo.id === id ? done: !done}));
  //}

  const todolistComp = todoList.map(element => (
          <Todo
              key={element.id}
              onRemove={()=> removeTask(element.id)}
              // onCheck={() => onDone(element.id)}
          >
              {element.todo}
          </Todo>
      )
  );

  return (
    <div className="cont">
        <Todoinput
            readValue={e => getValue(e.target.value)}
        >

        </Todoinput>
        <button onClick={addTask}>
            Add
        </button>
        <div>
            <ul className="todo">
                {todolistComp}
            </ul>
        </div>
    </div>


)
};

export default App;

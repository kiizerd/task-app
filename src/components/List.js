import { useEffect, useState } from 'react';
import Form from './Form';
import Task from './Task';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editStatus, setEditStatus] = useState(false);

  // Load tasks from storage is they exist
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(savedTasks.split(','));
    }
  }, []);
  // Update stored tasks everytime `tasks` is updated
  useEffect(() => {
    localStorage.setItem('tasks', tasks);
  }, [tasks]);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleEditChange = (e, index) => {
    const newTask = e.target.value
    const newTasks = tasks.slice()
    newTasks[index] = newTask;
    setTasks(newTasks);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') return;
    
    setTasks(tasks.concat(text));
    setText('');
  }

  const onResubmit = (e) => {
    e.preventDefault();
    setEditStatus(false);
  }

  const editTask = (index) => {
    setEditStatus(index);
  }

  const removeTask = (index) => {
    const newTasks = tasks.slice().filter((_, taskIndex) => index !== taskIndex)
    setTasks(newTasks);
  }
  
  return (
    <>
      <Form
        text={ text }
        onSubmit={ onSubmit }
        handleChange={ handleChange }
      />
      <ul>
        { tasks.map((task, index) => {
          return (
            <li key={ index }>
            <Task
              task={ task }
              index={ index }
              editTask={ editTask }
              removeTask={ removeTask }
              editStatus={ editStatus }
              handleChange={ handleEditChange }
              onResubmit={ onResubmit }
              />
          </li>
          )
        }) }
      </ul>
    </>
  );
};

export default List;

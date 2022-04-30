import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const Overview = (props) => {
  const {
    tasks,
    handleEditChange,
    onResubmitTask,
    removeTask,
    editTask
  } = props;
  
  const listItem = (task, index) => {
    return (
      <li key={task.id}>
        <span>              
          <strong>{task.num+1} </strong>
          <span>{task.text}</span>
        </span>
        <span>              
          <FontAwesomeIcon onClick={(e) => editTask(index)} icon={faPencil} />
          <FontAwesomeIcon onClick={(e) => removeTask(index)} icon={faTrashCan} />
        </span>
      </li>
    );
  }

  const inputItem = (task, index) => {
    return (
      <form key={task.id} onSubmit={(e) => { onResubmitTask(e, index) }}>
        <input 
          onChange={(e) => { handleEditChange(e, index) }}
          type='text'
          value={task.text}
        />
        <button type='submit'>Resubmit</button>
      </form>
    );
  };

  return(
    <ul>
      {tasks.map((task, index) => {
        if (task.isBeingEdited) return inputItem(task, index);
        return listItem(task, index);
      })}
    </ul>
  );
}

export default Overview;
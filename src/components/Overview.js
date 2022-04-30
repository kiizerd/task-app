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
  
  const taskItem = (task, index) => {
    return (
      <div>
        <span>
          <strong>{task.num+1}. - </strong>
          <span>{task.text}</span>
        </span>
        <span className="icon-span">
          <i>
            <FontAwesomeIcon onClick={(e) => editTask(index)} icon={faPencil} />
          </i> 
          <i>
            <FontAwesomeIcon onClick={(e) => removeTask(index)} icon={faTrashCan} />
          </i> 
        </span>
      </div>
    );
  };

  const inputItem = (task, index) => {
    return (
      <form onSubmit={(e) => { onResubmitTask(e, index) }}>
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
        return (
          <li key={task.id}>
            {task.isBeingEdited ? inputItem(task, index) : taskItem(task, index)}
          </li>);
      })}
    </ul>
  );
}

export default Overview;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const TaskText = ({ text, index, edit, remove }) => {
  return (
    <div>
      <span>
        <strong>- </strong>
        <span>{text}</span>
      </span>
      <span className="icon-span">
        <i><FontAwesomeIcon onClick={(e) => edit(index)} icon={faPencil} /></i> 
        <i><FontAwesomeIcon onClick={(e) => remove(index)} icon={faTrashCan} /></i>
      </span>
    </div>
  );
};

export default TaskText

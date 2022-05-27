import TaskText from './TaskText';
import TaskInput from './TaskInput';

const Task = ({
  task,
  index,
  editTask,
  removeTask,
  editStatus,
  handleChange,
  onResubmit
}) => {
  const textItem = () => <TaskText
                            text={task}
                            index={index}
                            edit={editTask}
                            remove={removeTask} />

  const inputItem = () => <TaskInput
                            text={task}
                            index={index}
                            change={handleChange}
                            submit={onResubmit} />

  const isBeingEdited = editStatus === index;
  return (
    <div className="Task">
      { isBeingEdited ? inputItem() : textItem() }
    </div>
  );
};

export default Task;

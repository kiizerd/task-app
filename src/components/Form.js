const Form = ({ text, handleChange, onSubmit }) => {
  return (
    <form className="main-form" onSubmit={ onSubmit }>
    <label htmlFor="taskInput">Create new task</label>
    <input
      onChange={ handleChange }
      value={ text }
      type="text"
      id="taskInput"
      placeholder="New task.."
      />
    <button type="submit">Submit</button>
  </form>
  );
};

export default Form;
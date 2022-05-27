import { useEffect, useRef } from "react";

const TaskInput = ({ text, index, change, submit}) => {
  const inputRef = useRef()
  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <form onSubmit={ (e) => { submit(e) } }>
      <input
        onChange={ (e) => { change(e, index) } }
        type='text'
        value={text}
        focused='true'
        ref={ inputRef }
      />
      <button type='submit'>Resubmit</button>
    </form>
  );
};

export default TaskInput;

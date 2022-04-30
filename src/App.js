import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      task: {
        text: '',
        id: uniqid(),
        num: 0,
        isBeingEdited: false,
      },
    };

    this.handleEditChange = this.handleEditChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        num: this.state.tasks.length,
        isBeingEdited: false,
      }
    });
  };

  handleEditChange = (e, index) => {
    const task = this.state.tasks[index];
    console.log(task)
    const newTask = Object.assign(task, { text: e.target.value });
    const tasks = this.state.tasks.map((task, taskIndex) => {
      if (index !== taskIndex) return task;
      return newTask;
    });
    this.setState({ tasks });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        num: this.state.tasks.length,
        isBeingEdited: false,
      },
    });
  };

  onResubmitTask = (e, index) => {
    e.preventDefault();
    const tasks = this.state.tasks.map((task) => Object.assign(task, { isBeingEdited: false }));
    this.setState({ tasks });
  };

  removeTask = (index) => {
    const tasks = this.state.tasks.filter((task, taskIndex) => index !== taskIndex)
                                  .map((task, index) => Object.assign(task, { num: index }));
    this.setState({ tasks });
  };

  editTask = (index) => {
    const tasks = this.state.tasks.map((task, taskIndex) => {
      if (index !== taskIndex) return task;

      return Object.assign(task, { isBeingEdited: true });
    });

    this.setState({ tasks });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <main className="App">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
            placeholder="New task.."
            />
          <button type="submit">Submit</button>
        </form>
        <Overview
          tasks={tasks}
          handleEditChange={this.handleEditChange}
          onResubmitTask={this.onResubmitTask}
          removeTask={this.removeTask}
          editTask={this.editTask}
        />
      </main>
    );
  };
};

export default App;

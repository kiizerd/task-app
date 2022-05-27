# React Task App
 Simple CRUD app made with ReactJS.  
 Tasks are inline editable and deletable.  
 Uses LocalStorage WebAPI to store data, which needs to be accessed inside of a `useEffect` hook to function properly.

 I used functional components and hooks all the way down and tried to split the app into many simple and clearly defined components.  
 All of the actual logic is inside the `List` component.  
 The `List`'s children include a `Form` and every task in the tasks array as a `Task` component.  
 The `Task` component is comprised of either a `TaskText` component, or a `TaskInput` component if the task is being edited.
 
 ## Planned
  - Completeable tasks, saved to a history
  - Ability to rearrange the tasks in the list; An up and down arrow button to move the position by 1 index and a drag and drop feature for larger adjustments.
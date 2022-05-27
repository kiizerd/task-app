# React Task App
 Simple CRUD app made with ReactJS.

 Uses localStorage WebAPI to store data.  
 I learned that localStorage needs to be accessed inside of a `useEffect` hook to function properly.

 I used functional components and hooks all the way down and tried to split the app into many simple and clearly defined components.
 The `Task` component is comprised of either a `TaskText` component, or a `TaskInput` component if the task is being edited.

 All of the actual logic is inside the `List` component.
 The `List`'s children include a simple form and every task in the tasks array as a `Task` component.
 
 In the future I'd like to implement the ability to rearrange the tasks in the list.  
 An up and down arrow button to move the position by 1 index and a drag and drop feature for larger adjustments.
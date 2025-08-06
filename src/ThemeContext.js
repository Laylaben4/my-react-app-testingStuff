// const Todos = ({ todos }) => {
//     console.log("child render");
//     return(
//         <>
//         <h2>My Todos</h2>
//         {todos.map((todo,index) => {
//             return <p key={index}>{todo}</p>
//         })}
//         </>
//     );
// }; 
// export default Todos;

// import {memo} from 'react';
// //this component receives tasks and a function to remove them.
// const TaskList = ({tasks , removeTask}) => {
//     // this log is the key ! it tells us when this component re-renders.
//     console.log('Rendering task list ...');

//     return(
//         <ul>
//             {tasks.map((task,index) => (
//                 <li key={index}>
//                     {task} <button onClick={() => removeTask(index)}>Remove</button>
//                 </li>
//             ))}
//         </ul>
//     );
// };
// // we wrap it in memo(). this tells react : "don't re-render this component if its props (tasks, removeTask) haven't changed"

// export default memo(TaskList);

import { createContext } from "react";
//create a context with default value
export const ThemeContext = createContext(null);
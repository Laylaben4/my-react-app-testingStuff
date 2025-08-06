
// function App() {
//   return (
//     <div className="App">
//       <h1>hello mommy</h1>
//     </div>
//   );
// }

// export default App;


// import { useState, useReducer } from "react";
// import TaskList from "./ThemeContext";
// //1. reducer logic for our complex state (the task list)
// const taskReducer = (state, action) => {
//     switch (action.type){
//         case 'ADD_TASK':
//             return [...state,action.payload];//add new task to the array
//         case 'REMOVE_TASK':
//             return state.filter((_,index) => index !== action.payload);// remove task by index
//         default:
//             return state;
//     }
// };
// const App = () => {
//     //2. `useState` : perfect for simple , independent like a counter
//     const [counter , setCounter] = useState(0);
//     //3. `useReducer`: better for complex state like our tasks ,which has multiple 'actions' (add,remove).
//     // 'dispatch' is the function we call to send actions for to our reducer.
//     const [tasks, dispatch] = useReducer(taskReducer,['learn le droit des femmes!']);

//     const handleAddTask =() => {
//         const newTask = `Task #${tasks.length +1}`;
//         dispatch({type : 'ADD_TASK', payload : newTask});
//     };
//     const handleRemoveTask =(index) => {
//         dispatch({type : 'REMOVE_TASK', payload : index});
//     };
//     return(
//         <div>
//             <h1>App is rendering ✅</h1> 
//             {/*this button only affects the 'useState'counter */}
//             <h2>Unrelated Counter</h2>
//             <p>Count : {counter}</p>
//             <button onClick={() => setCounter(c => c + 1)}>increment counter</button>
//             <hr />
//             {/*this section is managed by 'useReducer' and displayed by 'React.memo' */}
//             <h2>My Tasks</h2>
//             <button onClick={handleAddTask}>Add Task</button>
//             <TaskList tasks ={tasks} removeTask = {handleRemoveTask} />

//         </div>
//     );
// };
// export default App;

// import React from "react";
// import { ThemeProvider } from "./ThemeProvider";
// import Toolbar from './Toolbar';

// function App(){
//     return (
//         <ThemeProvider>
//             <Toolbar />
//         </ThemeProvider>
//     );
// };
// export default App;


// import React,{ useRef } from "react";

// const FocusInput = () =>{
//     //1.create a ref.we initialize it with null because the dom element doesn't exist yet
//     const inputRef = useRef(null);

//     const handlefocusClick = () => {
//         //3. accesss the dom node through the .current property and call its focus method 
//         //the ? is optional chaining a good practice in case the ref isn't attached yet 
//         inputRef.current?.focus();

//     };
//     return(
//         <div style = {{padding: '20px', textAlign: 'center'}}>
//             {/* 2. attach the ref to the input element*/}
//             <input 
//             ref={inputRef}
//             type="text"
//             placeholder="click the button to focus on me"
//             style={{padding: '10px', marginRight: '10px'}}
//             />
//             <button onClick={handlefocusClick}>focus the input !</button>
//         </div>
//     );
// };
// export default FocusInput;


// import { useState, useRef , useEffect } from "react";


// function App(){
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");

//     useEffect(() =>{
//         previousInputValue.current = inputValue;
//     }, [inputValue]);
//     return(
//         <>
//         <input 
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)} />
//         <h2> current value {inputValue}</h2>
//         <h2> previous value {previousInputValue.current}</h2>
//         </>
//     );
// };
// export default App;

// import { useReducer } from "react";
// //1.define the initial state 
// const initialState = {count : 0};
// //2. create the reducer function 
// //it takes the current state and an action then decides what to do
// function reducer(state,action){
//     switch(action.type){
//         case 'increment':
//             return {count : state.count +1};
//         case 'decrement':
//             return {count : state.count -1};
//         case 'reset':
//             return {count : 0};
//         case 'set_value':
//             return {count : action.playload};
//         default:
//             throw new Error('Unexpected action type!');
//     }
// }
// const Counter = () =>{
//     //3. use the useReducer hook in the component
//     const [state, dispatch] = useReducer(reducer , initialState);
//     return (
//         <div style={{padding : '20px', textAlign: 'center'}}>
//             <h1>Count : {state.count}</h1>
//             {/*4. dispatch actions from the ui events */}
//             <button onClick={() => dispatch({type : 'increment'})}>+</button>
//             <button onClick={() => dispatch({type : 'decrement'})}>-</button>
//             <button onClick={() => dispatch({type : 'set_value', playload : 100})}>set to 100</button>
//             <button onClick={() => dispatch({type : 'reset'})}>reset</button>
//         </div>
//     );
// };
// export default Counter;

import { useReducer } from "react";


const intialTodos = [
    {id : 1 , title : "todo 1", complete : false,},
     {id : 2 , title : "todo 2", complete : false,},
];

const reducer = (state, action) => {
    switch (action.type){
        case "COMPLETE":
            return state.map((todo) => {
                if(todo.id === action.id){
                    return {...todo , complete : !todo.complete};
                }else{
                    return todo;
                }
            });
        default:
            return state;
            
    }
};

function Todos(){
    const [todos, dispatch] = useReducer(reducer , intialTodos);

    const handleComplete =(todo)=> {
        dispatch({type : "COMPLETE", id : todo.id});
    };
    return (
        <>
        {todos.map((todo) => (
            <div key = {todo.id}>
                <label>
                    <input
                    type="checkbox"
                    checked = {todo.complete} 
                    onChange={() => handleComplete(todo)}/>
                    {todo.title}
                </label>
            </div>
        ))}
        </>
    );
}
export default Todos;
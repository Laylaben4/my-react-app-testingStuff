// import React from 'react';
// ReactDOM.render(<App />,document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// class Car{
//   constructor(name){
//     this.brand = name;
//   }
//   present(){
//     return 'I have a ' + this.brand;
//   }
  
// }
// class Model  extends Car{
//   constructor(name,mod){
//     super(name);
//     this.model = mod;
//   }
//   show(){
//     return this.present() + ',it is a ' + this.model
//   }
// }
// const mycar = new Model("Ford","MUSTANG");
// console.log(mycar);
// console.log(mycar.show());


// hello = function(){
//   return "hello mommy!";
// }
// hello = () => {
//   return "hello daddy!";
// }
// hello = () =>  "hello daddy!";
// hello = (val) => "hello" + val;


// const student = ['layla', '13.28', '49'];
// const [studentName , mark, classement]= student;
// console.log(studentName);
// console.log(mark);
// console.log(classement);


// function calculate(a,b){
//     const add = a+b;
//     const subtract = a-b;
//     const multilpy = a*b;
//     const divide = a/b;

//     return [add,subtract,multilpy,divide];
// }
// const [add,subtract,multilpy,divide] = calculate(4,7);

// const vehicleOne = {
//     brand : 'Ford',
//     model : 'Mustang',
//     type : 'car',
//     year : 2021,
//     color : 'red',
// }
// myVehicle(vehicleOne);
// function myVehicle(vehicle){
//     //old way
//     // const message = 'my ' + vehicle.type + ' is a '+ vehicle.color + ' ' + vehicle.brand + ' '+ vehicle.model +'.';

//     const message = 'my ' + type + ' is a '+ color + ' ' + brand + ' '+ model +'.';
//     return message;
// }
// console.log(myVehicle(vehicleOne));



// const vehicleOne = {
//     brand : 'Ford',
//     model : 'Mustang',
//     type : 'car',
//     year : 2021,
//     color : 'red',
//     registration:{
//         city: 'Housten',
//         state : 'Texas',
//         country : 'USA'
//     }
// }
// myVehicle(vehicleOne);
// function myVehicle({model, registration :{ state}}){
//     const message = 'my ' + model + ' is registrated in '+ state +'.';
//     return message;
// }
// console.log(myVehicle(vehicleOne));

// const numbers = [1,2,3,4,5,6,7];
// const [one,two, ...rest]= numbers;
// console.log(rest);
// const part1 = [1,2,3];
// const part2 = [4,5,6,7];
// const numbers = [...part1,...part2];
// console.log(numbers);

// const myVehicle = {
//     brand : 'Ford',
//     model : 'Mustang',
//     color : 'red',

// }
// const updateMyVehicle = {
//     type : 'car',
//     year : 2021,
//     color : 'yellow',

// }
// const myUpdatedVehicle = {...myVehicle,...updateMyVehicle};
// console.log(myUpdatedVehicle);


// import message , {name,age} from "./person.js";

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client'; // ✅ createRoot comes from here

// const container = document.getElementById('root'); // 🔍 find the box
// const root = ReactDOM.createRoot(container);       // 🧱 prepare the box
// root.render(<p>Hello</p>);                         // 🎨 draw on screen


// const myelement = (
//     // <table>
//     //     <tr>
//     //         <th>username</th>
//     //         <th>email</th>
//     //         <th>password</th>
//     //     </tr>
//     //     <tr>
//     //         <td>layla</td>
//     //         <td>layla.ibenkhaldoune@gmail.com</td>
//     //         <td>layla@2004</td>

//     //     </tr>
//     // </table>
    
// );
// const myElement1 = <h1>I Love JSX!</h1>;
// const myelement2= React.createElement('h1',{},'I DO NOT USE JSX');
// const container = document.getElementById('root'); 
// const root = ReactDOM.createRoot(container);      
// root.render(myelement);    


//The HTML code must be wrapped in ONE top level element.
// const myelement =(
//     <div>
//         <p>paragraph 1</p>
//         <p>paragraph 2</p>
//     </div>
// ); // or use intead of a div a fragment <></>
//Use attribute className instead of class in JSX

//ONE WAY 
// const x = 5;
// let text = "goodbye";
// if(x<10){
//     text = "hello";
// }
// const myelement = <h1>{text}</h1>;

//SECOND WAY
// const x = 5;
// const myelement = <h1>{(x)<10? "hello": "goodbye"}</h1>;
//Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.





//components are class or functions that return html 
//class example
// class Car extends React.Component{
//     render(){
//         return <h2>hi i am a beautiful car!</h2>;
//     }
// }
//function example
// function Car(){
//     return <h2>hi i am a beautiful car!</h2>;
// }
// //rendering the component


// class Car extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             color : "red",
//             model : "Mustang",
//             year : 2023,
//             type : "car"
//         };
//     }
//     changeColor = () =>{
//         this.setState({color : "blue"});
//     }
//     render(){
//         return(<div>
//             <h2>i am a {this.state.color} {this.state.model}!</h2>
//             <p>year : {this.state.year}</p>
//             <p>type : {this.state.type}</p>
//             <button onClick={this.changeColor}>PAINT ME BLUE!</button>
            
//         </div>);
        
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

//props in components
// class Car extends React.Component{
//     render(){
//         return <h2>hi i am a {this.props.color} car!</h2>;
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car  color ="red"/>);

//with constructor and super
// class Car extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <h2>hi i am a {this.props.model} car!</h2>;
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car  model ="MUSTANG"/>);

// function Car(props){
//     return <h2>I am a {props.brand.model} from {props.brand.name_}!</h2>;
// }
// function Garage(){
//     const carInfo ={name_ :"ford",model :"mustang"};
//     return (
//         <>
//         <h1>who lives in my garage ?</h1>
//         <Car brand = {carInfo}/>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// function Football(){
//     // const shoot = (a) =>{
//     //     alert(a);
//     // }
//     // return(
//     //     <button onClick={() =>shoot("goaaaaaaal!")}>TAKE THE SHOT!</button>
//     // );
//     const shoot = (message, event) => {
//      alert(`Message: ${message}, Event Type: ${event.type}`);
     

//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//     }
//     return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

// function MissedGoal(){
//     return <h1>Missed!</h1>;
// }
// function MadedGoal(){
//     return <h1>Goal!</h1>;
// }
// function Goal(props){
//     const isGoal = props.isGoal;
//     // if(isGoal){
//     //     return <MadedGoal />;
//     // }
//     // return <MissedGoal />;
//     return isGoal? <MadedGoal /> : <MissedGoal />;
//     return(
//         <>
//         {isGoal? <MadedGoal /> : <MissedGoal />}
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal ={true} />);

 /*If cars.length > 0 is equates to true, the expression after && will render.*/
// function Garage(props){
//     const cars = props.cars;
//     return (
//         <>
//         <h1>Garage</h1>
       
//         {cars.length>0 &&
//         <h2>
//             YOU  have {cars.length} cars in your garage.
//             </h2>
//         }
//         </>
//     );
// }
// const cars =[];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars = {cars} />);

// function Car(props){
//     return <li>I am a {props.brand}</li>
// }
// function Garage(){
    // const cars = ['ford','bmw','audi'];
    // return (
    //     <>
    //     <h1>who live in my garage ?</h1>
    //     <ul>
    //         {cars.map((car) => <Car brand={car} />)}
    //     </ul>
    //     </>
    // );
//     const cars =[
//         {id :1,brand:'ford'},
//         {id :2,brand:'audi'},
//         {id :1,brand:'bmw'}
//     ];
//     return(
//         <>
//         <h1>who live in my garage ?</h1>
//         <ul>
//             {cars.map((car) => <Car key = {car.id}brand={car.brand} />)}
//         </ul>
//         </>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage  />);


//forms
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm(){
//     const [name, setName] = useState("");

//     return(
//         <form>
//             <label>
//                 enter your name:
//                 <input type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}/>
//             </label>
//         </form>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);




// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm(){
//     const [name, setName] = useState("");
//     const handleSubmit = (evenement) => {
//         evenement.preventDefault();
//         alert(`the name you entered was : ${name}`);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 enter your name:
//                 <input type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}/>
//             </label>
//             <input type = "submit" />
//         </form>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);





// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm(){
//     // const [textarea , setTextarea] = useState("the content of a textarea goes in the value attribute");
//     // const handleChange = (event) => {
//     //     setTextarea(event.target.value);
//     // }
//     const [myCar , setMyCar] = useState("Fiat");
//     const handleChange = (event) => {
//         setMyCar(event.target.value)
//     }
    
//     return (
//         // <form>
//         //    <textarea value = {textarea} onChange={handleChange}/>
//         // </form>
//         <form>
//             <select value = {myCar} onChange={handleChange}>
//             <option value = "Ford">Ford</option>
//             <option value = "Volvo">Volvo</option>
//             <option value = "Fiat">Fiat</option>
//             </select>
//         </form>
//     )
    
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


// import ReactDOM from "react-dom/client";
// import { BrowserRouter , Routes , Route} from "react-router-dom";
// import Layout from "./pages/layout";
// import Home from "./pages/home";
// import Blogs from "./pages/blogs";
// import Contact from "./pages/contact";
// import NoPage from "./pages/nopage";

// export default function App(){
//     return(
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element = {<Layout />}>
//             <Route index element = {<Home />} />
//             <Route path="blogs" element = {<Blogs />} />
//             <Route path="contact" element = {<Contact />} />
//             <Route path="*" element = {<NoPage />} />
//             </Route>
//         </Routes>
//         </BrowserRouter>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//     const [count , setCount] = useState(0);
//     const [todos , setTodos] = useState(["todo 1", "todo 2"]);

//     const increment = () =>{
//         setCount((c) => c + 1);
//     };
//     return(
//         <>
//         < Todos todos = {todos} />
//         <hr />
//         <div>
//             Count : {count}
//             <button onClick={increment}>+</button>
//         </div>
//         </>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



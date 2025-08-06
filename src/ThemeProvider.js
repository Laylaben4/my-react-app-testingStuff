//line by line
// export const name = 'layla';
// export const age = 21;

//at the bottom
// const name = 'layla';
// const age = 21;
// export {name,age}


// //one default export in a file
// const message = () =>{
//     const name = "layla";
//     const age = 21;
//     return name +' is '+ age +' yaers old. ';
// };
// export default message;


import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider =({children}) => {
    const [theme , setTheme] = useState('light');
    //the value object includes the theme and a function to change it 
    const value = {theme , setTheme};
    
    return (
        <ThemeContext.Provider value = {value}>{children}</ThemeContext.Provider>
    );
};

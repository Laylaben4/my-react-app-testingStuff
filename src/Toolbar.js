import React, { useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const Toolbar = () =>{
    //use the usecontext hook to get the current value from the provider
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () =>{
        setTheme(theme === 'light'? 'dark' : 'light');
    };
    const style = {
        background : theme === 'dark'? '#333': '#FFF',
        color : theme === 'dark'? '#FFF' : '#333',
        padding : '20px',
        textAlign : 'center',
        transition : 'all 0.3s',
    };
    return(
        <div style={style}>
            <h1>the current theme is : {theme}</h1>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};
export default Toolbar;
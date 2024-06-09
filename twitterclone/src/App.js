import React,{useState} from React;

import "./App.css";

//Import Components


function App(){

    // Write JavaScript Here
    const [counter, setCounter] = useState(0)

    return(
        <div className="App">
            <h1>Hello React</h1>            
        </div>
    )
}
export default App;
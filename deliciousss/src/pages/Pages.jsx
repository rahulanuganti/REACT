import Home from "./Home";
import { Route, Routes} from "react-router-dom";
import Cuisine from "./Cuisine";
function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" elment={<Cuisine/>}/>
        </Routes>
    )
}

export default Pages;
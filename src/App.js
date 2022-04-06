import './App.css';
import {Comments, Posts, Users} from "./components";


export const App = () => {
    return (
        <div>
            <div>
                <Users/>
                <Posts/>
            </div>
            <div><Comments/></div>
        </div>
    );
}


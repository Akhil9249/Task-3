import { Fragment, useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import UserList from "./componets/UserList";
import Accordion from "./componets/Accordion";

function App() {

    const [userLists, setUserLists] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserLists(response?.data);

        })();
    }, []);

   

    return (
        <div className="maindiv">
            <div className="main-left">
                <UserList userLists={userLists} />
            </div>
            <div>
                <Accordion />
            </div>
        </div>
    );
}

export default App;

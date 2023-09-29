import React, { Fragment } from "react";


import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App () {
    const buttonName = "Button updated";
    return (
        <Fragment>
            <Header buttonName={buttonName}/>
            <Main />
        </Fragment>
    );
}



export default App;
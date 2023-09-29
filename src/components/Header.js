import React, { useState } from "react";
import  "../styles/Header.css";
let buttonName = "Button";

function Header(props) {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <header>This is header
            <button className={"some-button"} onClick={handleClick}>
                {props.buttonName}, clicked: {count} times
            </button>
        </header>
    )
}

export default Header;
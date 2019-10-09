import React from "react";
 
const Header = () => {
  const heading = "Header"
  return (
    <header className="navbar">
        <h1 style={{color:"yellow", backgroundColor:"blue"}}>This is my {`${heading}`}</h1>
        <nav>
        <ul>
           <li>Things 1</li>
           <li>Things 2</li>
           <li>Things 3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
// document.getElementById("something").classList = "new-className"
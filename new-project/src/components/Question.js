import React from 'react'

function Questions(props) {
    console.log(props);
  return (
    <div>
       <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
       <p style={{color: props.answer ? "blue" : "black"}}>Answer: {props.answer}</p>
    </div>
  );
}
 
    export default Questions
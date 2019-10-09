import React, { Component } from 'react';
import Header from './components/Header';
import MyApp from './components/MyApp';
import Footer from './components/Footer';
import Ques from './components/Question';
import ClassBased from './components/ClassBased'
import EventHandlingComp from './components/EventHandlingComp'
// import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';

function App() {

  const jokes = [
    {
      id: 1,
      question: "what is your hometown?",
      answer: "Haridwar"

    },
    {
      id: 2,
      question: "what is your hometown?",
      answer: "Haridwar"

    },
    {
      id: 3,
      question: "what is your hometown?",
      answer: "Haridwar"

    }
  ]
   
  const jokeComp = jokes.map((obj,index) => <Ques key={index} question={obj.question} answer={obj.answer} />
  );

  return (
    <div>
      {jokeComp}
      <Contacts 
      contact={
        {
          name: "Mr. Fusskin",
          email:" mrFusskin@gmail.com"
        }
      } 
       />
        <Contacts 
        contact={
          {
            name: "Mr. Musskin",
            email:" mrMusskin@gmail.com"
          }
        } 
       />
        <Contacts 
        contact={
          {
            name: "Mr. Kusskin",
            email:" mrKusskin@gmail.com"
          }
        } 
       />
      <Header />
      <MyApp />
      <Footer />
      <ClassBased weekend="WEEKEND"/>
      <EventHandlingComp />
    </div>
  );
}

export default App;








{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           {/* <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p> */}
//            <h1>Hello World!!!</h1>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;

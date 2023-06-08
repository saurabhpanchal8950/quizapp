import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";
import bgImage from '/Users/saurabh/Desktop/code/PROJECTS/quiz_app/client/src/components/video/quiz.mp4';

export default function Main() {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  function startQuiz() {
    const userId = userIdRef.current?.value;
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;

    if (userId && password && email) {
      dispatch(setUserId(userId));
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  }

  return (








<div className="container">

<video autoPlay loop muted>
  <source src={bgImage} type="video/mp4" />
</video>


<div className="container_top">
<h1 className="title text-light">Quiz Application</h1>

</div>

<div className="container_both">

        <div className="container_left">

          <div className="left_a">
          <h1 className="generalins">General instructions</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>  Each question has three options. You can choose only one option. </li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
         </div>
</div>


  <div className="container_right">
  <div className="form_box">

      <form id="form">

        <h1 className="log">Login to start</h1>

        <div className="input-group">
      <input ref={userIdRef} className="userid" type="text" id="username" placeholder="Username"/>
        </div>

        <div className="input-group">
          <input ref={passwordRef}className="password"type="password"id="password"placeholder="Password"/>
        </div>

        <div className="input-group1">
          <input ref={emailRef}className="email"type="email"id="email"placeholder="Email"/>
        </div>


      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
      <p className="error">{errorMessage}</p>

      </form>

      </div>
      </div>
      </div>

    </div>
  
  );
}



// import React, { useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { setUserId } from '../redux/result_reducer'
// import '../styles/Main.css'

// export default function Main() {

//     const inputRef = useRef(null)
//     const dispatch = useDispatch()

//     function startQuiz(){
//         if(inputRef.current?.value){
//             dispatch(setUserId(inputRef.current?.value))
//         }
//     }

//   return (
//     <div className='container'>
//         <h1 className='title text-light'>Quiz Application</h1>

//         <ol>
//             <li>You will be asked 10 questions one after another.</li>
//             <li>10 points is awarded for the correct answer.</li>
//             <li>Each question has three options. You can choose only one options.</li>
//             <li>You can review and change answers before the quiz finish.</li>
//             <li>The result will be declared at the end of the quiz.</li>
//         </ol>

//         <form id="form">
//             <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
//         </form>

//         <div className='start'>
//             <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
//         </div>

//     </div>
//   )
// }

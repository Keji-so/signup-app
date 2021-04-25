import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [ fullName, setFullName] = useState("")
const [ userName, setUserName] = useState("")
const [ email, setEmail] = useState("")
const [ password, setPassword] = useState("")

const handleFullName = (e) => {
    setFullName(e.target.value)
}  
  
  const handleUserName = (e) => {
    setUserName(e.target.value)
}  

const handleEmail = (e) => {
  setEmail(e.target.value)
}  

const handlePassword = (e) => {
  setPassword(e.target.value)
}  

const handleSubmit = (e) => {
  e.preventDefault()

  const registered = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: password
  }

//axios will be used to send the info stored in "registered" to the backend

  axios.post('http://localhost:4000/app/signup', registered) //this means post 'registered' to 'http://localhost:4000/app/signup'
    // .then(response => console.log(response.data))

  //after submitting we can set the page we want to be opened e.g if we want homepage to open after use "windows.location = '/home' "  

  setFullName('')
  setUserName('')
  setEmail('')
  setPassword('')

  //reset all the fields
}



  return (
    <div className="App">
     
    <div className="form-div left">
      <div className="sign-in">Already a member? <span>Sign in</span></div>

      <form className="form" onSubmit={handleSubmit} action="">
        
        <h1>Sign Up</h1>

      <div className="names">
        <div className="name-field">
          <div className="label">Name</div>
          <input onChange={handleFullName} value={fullName} type="text" placeholder="enter name"/>
        </div>

        <div className="name-field">
          <div className="label">Username</div>
          <input onChange={handleUserName} value={userName} type="text" placeholder="@username" />
        </div>
      </div>
        

        <div className="e-mail">
          <div className="label">E-mail</div>
          <input onChange={handleEmail} value={email} type="text" placeholder="name@example.com" />
        </div>

        <div className="password">
          <div className="label">Password</div>
          <input onChange={handlePassword} value={password} type="password" placeholder="*****" />
        </div>

        <div className="button">
          <button className="btn" type="submit">Sign up</button>
        </div>

      </form>
    </div>

    <div className="right">
        <div className="text">OPEN.CLOSED</div>
        <div className="text-two">Get access to the best <span>news letters</span> online</div>
        <img className="pic" src="./images/background.jpg" alt=""/>
      </div>
    


    </div>
  );
}

export default App;

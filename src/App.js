
import './App.css';

function App() {
  return (
    <div className="App">
     
    <div className="form-div left">
      <div className="sign-in">Already a member? <span>Sign in</span></div>
      <form className="form" action="">
        
        <h1>Sign Up</h1>

      <div className="names">
        <div className="name-field">
          <div className="label">Name</div>
          <input type="text" placeholder="enter name"/>
        </div>

        <div className="name-field">
          <div className="label">Username</div>
          <input type="text" placeholder="@username" />
        </div>
      </div>
        

        <div className="e-mail">
          <div className="label">E-mail</div>
          <input type="text" placeholder="name@example.com" />
        </div>

        <div className="password">
          <div className="label">Password</div>
          <input type="password" placeholder="*****" />
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

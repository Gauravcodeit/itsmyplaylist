import React, { useState } from "react";
import './App.css';

export default function LoginScreen(){
    const usermob="Gaurav";
    const userpass="password";
    const [usernameState, setusernameState]=useState('');
    const [userpassState, setuserpassState]=useState('');
    const [loggedInState, setloggedInState]=useState(false);
    const [listener, setListner] = useState("Listener");
    function login()
    {
    if ( usernameState === usermob && userpassState === userpass)
      {
        setloggedInState(true);
      }
    }
    function alertMyName()
    {
      alert("Hi "+ listener)
    }
    return(
        <>
            <div className="d-flex">
                <input type="text"  placeholder="User Name"
                onChange={
                    (event)=> {
                    setusernameState(event.target.value);
                    }
                }
                required />
                <input type="password" placeholder="Password"
                    onChange=
                    {
                        (event)=> {
                        setuserpassState(event.target.value);
                        }
                    } />
                <button onClick={()=>{  login();  alertMyName();  setListner("Kaku");  }}>Submit</button>
            </div>
            {loggedInState && <div className="column-flex"><h4 >Logged In</h4> <h2 className="d-flex">Hello {listener}</h2></div>}

        </>
    )
}

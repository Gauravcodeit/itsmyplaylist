import React, { useState } from 'react';
import SongCard from './Components/SongCard';
import './App.css';
function App() {
  const [listener, setListner] = useState("Listener");
  const [viewsCount, setviewsCount] = useState(0);
  const usermob="Gaurav";
  const userpass="password";
  const [usermobState, setusermobState]=useState('');
  const [userpassState, setuserpassState]=useState('');
  const [loggedInState, setloggedInState]=useState(false);
  function alertMyName(){

    alert("Hi "+ listener)
  }
  const increment = () => {
    setviewsCount(viewsCount + 1)
  }
  function login() {

    if( usermobState === usermob && userpassState === userpass){
      setloggedInState(true);

    }
  }
  return (
    <div className="App">
          <h1 className="d-flex">ItsMyPlaylist</h1>
          <div className="d-flex">

              <input type="text"  placeholder="User Name"
              onChange={
                (event)=> {

                  setusermobState(event.target.value);

                }
              } required/>
              <input type="password" placeholder="Password"
              onChange={
                (event)=> {

                  setuserpassState(event.target.value);

                }
              }
              />
              <button onClick={()=>{  login();  alertMyName();  setListner("Kaku");  }}>Submit</button>


          </div>
          {loggedInState && <div className="column-flex"><h4 >Logged In</h4></div>}
          <h2 className="d-flex">Hello {listener}</h2>
          <div className="d-flex2">
            <div className="borderpd" >
                <SongCard
                songName="Starboy"
                singerName="Weekend"
                onclick={increment}
                viewsCount={viewsCount}

            />
            </div>

           <div className="borderpd">
              <SongCard
                songName="Rap God"
                singerName="Eminem"
                onclick={increment}
                viewsCount={viewsCount}
                />
           </div >
            <div className="borderpd">
                <SongCard
                songName="wislist"
                singerName="Dino James"
                  onclick={increment}
                viewsCount={viewsCount}
                />
            </div>


          </div>
    </div>

  );

}

export default App;

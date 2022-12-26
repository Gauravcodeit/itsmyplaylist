import React, { useState } from 'react';
import SongCard from './Components/SongCard';
import './App.css';

function App() {

  const [listener, setListner] = useState("Listener");
  const [viewsCount, setviewsCount] = useState(0);
  const [viewsCount1, setviewsCount1] = useState(0);
  const usermob="Gaurav";
  const userpass="password";
  const [usermobState, setusermobState]=useState('');
  const [userpassState, setuserpassState]=useState('');
  const [loggedInState, setloggedInState]=useState(false);

  function alertMyName(){
    alert("Hi "+ listener)
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
          }
        required />
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
            setcount={setviewsCount}
            count={viewsCount} />
        </div>
        <div className="borderpd">
          <SongCard
            songName="Rap God"
            singerName="Eminem"
            setcount={setviewsCount1}
            count={viewsCount1} />
        </div>
        <div className="borderpd">
            <SongCard
            songName="wislist"
            singerName="Dino James"
            setcount={setviewsCount}
            count={viewsCount} />
        </div>
      </div>

      <div>Gaurav</div>

    </div>
  );
}

export class Apps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

	componentDidMount() {
		fetch("https://hub.dummyapis.com/employee?noofRecords=7&idStarts=1001")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}

	render()
  {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded) return <div><h1> Pleses wait some time.... </h1> </div> ;

    return (
      <div className = "Apps">
        <h1> Order Details of Customers</h1>
        <table>

          <thead>
            <th>emp_ID</th>
            <th>first_Name</th>
            <th>last_Name</th>
            <th>Email</th>
            <th>contact_Number</th>
          </thead>

          <tbody>
            {
              items.map((item) => (
              <tr key = { item.id } >
                <td> { item.id }</td>
                <td> { item.firstName  }</td>
                <td>{ item.lastName }</td>
                <td> { item.email}</td>
                <td> {item.contactNumber}</td>



              </tr>
              ))
            }
          </tbody>

        </table>



      </div>
	  );
  }
}
export default App;

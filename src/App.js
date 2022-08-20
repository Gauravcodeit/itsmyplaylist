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
           </div>
            <div className="borderpd">
                <SongCard
                songName="wislist"
                singerName="Dino James"
                  onclick={increment}
                viewsCount={viewsCount}
                />
            </div>


          </div>
          <div>Gaurav</div>
    </div>


  );

}

export class Apps extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://assessment.api.vweb.app/orders")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "Apps">
			<h1> Order Details of Customers</h1> {
				items.map((item) => (
				<ol key = { item.order_id } >
          Order_ID:{ item.order_id },
					Product_ID: { item.product_id },
					quantity: { item.quantity },
					Order_Date: { item.order_date},
          User_ID:{item.user_id}

					</ol>
				))
			}
		</div>
	);
}
}



export default App;

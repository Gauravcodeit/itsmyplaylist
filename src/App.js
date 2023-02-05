import React, { useState } from 'react';
import SongCard from './Components/SongCard';


export default function App() {

  const [viewsCount, setviewsCount] = useState(0);
  const [viewsCount1, setviewsCount1] = useState(0);
  return (
  <>
      <div className="App container">
        <h1 className="d-flex">Recently Played</h1>
        <div className="d-flex2">
          <div className="song-card" >
              <SongCard
              songName="Starboy"
              singerName="Weekend"
              setcount={setviewsCount}
              count={viewsCount} />
          </div>
          <div className="song-card">
            <SongCard
              songName="Rap God"
              singerName="Eminem"
              setcount={setviewsCount1}
              count={viewsCount1} />
          </div>
        </div>
      </div>
  </>
  );
}

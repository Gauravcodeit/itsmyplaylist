import React from 'react'
import firstAudio from '../Asset/first-audio.mp3';
export default function songCard(props) {
const {count,setcount}=props;
const increment = () => {
  setcount(count + 1)
}
  return (
    <div className='row-gap' >
    <div  className='Card-Title'>
     CARD OF MAGIC
    </div>
    <audio
        controls
        src={firstAudio}>
            <a href={firstAudio}>
                Download audio
            </a>
    </audio>
    <div>Song Name: {props.songName}</div>
    <div>Singer Name: {props.singerName}</div>
    <div>Views:{count}</div>
    <button  onClick={increment}>Play button</button>

    </div>
  )
}

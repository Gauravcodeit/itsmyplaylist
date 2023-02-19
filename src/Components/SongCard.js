import React from 'react'

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
    { props.firstAudio && <audio
        controls
        src={props.firstAudio}>
            <a href={props.firstAudio}>
                Download audio
            </a>
    </audio> }
    <div>Song Name: {props.songName}</div>
    <div>Singer Name: {props.singerName}</div>
    <div>Views:{count}</div>
    <button  onClick={increment}>Play button</button>

    </div>
  )
}

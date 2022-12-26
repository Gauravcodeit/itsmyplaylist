import React from 'react'

export default function songCard(props,{songName, singerName }) {

const {count,setcount}=props;
let increment = () => {
  setcount(count + 1)
}
  return (
    <div className='row-gap' >
    <div  className='d-flex borderpd'>
     CARD OF MAGIC
    </div>

    <div>Song Name: {songName}</div>
    <div>Singer Name: {singerName}</div>
    <div>Views:{count}</div>
    <button  onClick={increment}>Play button</button>

    </div>
  )
}

import React from 'react'

export default function songCard({songName, singerName, onclick, viewsCount }) {


  return (
    <div className='row-gap' >
    <div  className='d-flex borderpd'>
     CARD OF MAGIC
    </div>

    <div>Song Name: {songName}</div>
    <div>Singer Name: {singerName}</div>
    <div>Views:{viewsCount}</div>
    <button  onClick={onclick}>Play button</button>

    </div>
  )
}

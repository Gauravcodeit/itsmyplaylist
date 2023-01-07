import React from "react";
import './App.css';
export default function Header()
{
  return(
    <header>
      <nav className='Nav-Main'>
        <h1>ItsMyPlaylist</h1>
        <ul className="Nav-items">
          <li>HOME</li>
          <li>Newly Added </li>
          <li> Search</li>
          <li>Your Library</li>
        </ul>
      </nav>

    </header>
  )
}
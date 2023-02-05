import React from "react";
export default function Header()
{
  return(
    <header className='Nav-Main'>
      <nav className='container nav-wrap'>
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
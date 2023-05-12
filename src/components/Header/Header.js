import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <Link to='/home'>Home2</Link>
        <Link to='/About'>About2</Link>
    </div>
  )
}

export default Header
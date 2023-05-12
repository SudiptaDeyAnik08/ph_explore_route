import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Heades.css';

function Header() {
  return (
    <div>
        <a className='lia' href="/home">Home</a>
        <a className='lia' href="/about">About</a>
        <Link className='lia' to='/home'>Home2</Link>
        <Link className='lia' to='/About'>About2</Link>
        <Link className='lia' to='/Products'>Products</Link>
    
    </div>
  )
}

export default Header
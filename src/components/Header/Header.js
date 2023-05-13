import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Heades.css';

function Header() {
  return (
    <div>
        <Link className='lia' to='/home'>Home2</Link>
        <Link className='lia' to='/About'>About2</Link>
        <Link className='lia' to='/Products'>Products</Link>
        <Link className='lia' to='/post'>Post</Link>
    
    </div>
  )
}

export default Header
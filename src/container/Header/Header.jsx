import React from 'react'
import "./Header.scss"


const Header = () => {

    
  return (
    <div className='header'>
        <h1>My Todo's </h1>
        <button className='header__button'onClick>Reset</button>
    </div>
  )
}

export default Header
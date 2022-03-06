import React from 'react'

import './navbar.css'
import AppButton from '../../components/button/button'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="navbar-nav">Home</p>
        <AppButton className="navbar-btn">
          <div className="donate-btn-content">
            <img src="/heart-fill.png" alt="heart icon" className="donate-btn-icon"/>
            <p className="donate-btn-text">Donate</p>
          </div>
        </AppButton>
      </div>
    </div>
  )
}

export default Navbar
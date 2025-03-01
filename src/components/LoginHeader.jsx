import React from 'react'
import '../styles/LoginHeader.scss'
import logo from '../assets/SmartBankerLogo.png' // Replace with your logo

const LoginHeader = () => {
  return (
    <nav className="loginNavbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <a href="#" className="active">
          Personal
        </a>
        <a href="#">Business</a>
        <a href="#">Commercial</a>
      </div>
    </nav>
  )
}

export default LoginHeader

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import logo from '../assets/logo.png' // Replace with actual logo
import {
  FaSearch,
  FaUser,
  FaWallet,
  FaBuilding,
  FaUniversity,
  FaCreditCard,
  FaGift,
} from 'react-icons/fa'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Center Section - Navigation Links */}
      <div className="navbar-center">
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('transactions')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="#">Transactions</NavLink>
          {openDropdown === 'transactions' && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="column">
                  <h4>Types of Transactions</h4>
                  <NavLink to="#">
                    <FaWallet /> Cash Transactions
                  </NavLink>
                  <NavLink to="#">
                    <FaBuilding /> Member Transactions
                  </NavLink>
                  <NavLink to="#">
                    <FaUniversity /> Bank Transactions
                  </NavLink>
                </div>
                <div className="column">
                  <h4>Find a Transaction</h4>
                  <NavLink to="#">Pending Transactions</NavLink>
                  <NavLink to="#">Reconciliations</NavLink>
                  <NavLink to="#">Settlement</NavLink>
                </div>
                <div className="column">
                  <h4>Common Tasks</h4>
                  <NavLink to="#">
                    <FaCreditCard /> Pay Credit Card Bill
                  </NavLink>
                  <NavLink to="#">
                    <FaGift /> Activate Credit Card
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('checking')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="#">Checking & Savings</NavLink>
          {openDropdown === 'checking' && (
            <div className="dropdown-menu full-width">
              <div className="column">
                <h4>Savings</h4>
                <NavLink to="#">360 Performance Savings™</NavLink>
                <NavLink to="#">360 CDs®</NavLink>
                <NavLink to="#">Kids Savings Account</NavLink>
              </div>
              <div className="column">
                <h4>Checking</h4>
                <NavLink to="#">360 Checking®</NavLink>
                <NavLink to="#">Teen Checking</NavLink>
              </div>
              <div className="column">
                <h4>Manage Your Account</h4>
                <NavLink to="#">Send & Receive Payments</NavLink>
                <NavLink to="#">Download Mobile App</NavLink>
              </div>
            </div>
          )}
        </div>

        <NavLink to="#">Approvals</NavLink>

        <NavLink to="#">Utilities</NavLink>
        <NavLink to="#">Queries</NavLink>
        <NavLink to="#">Maintenance</NavLink>
        <NavLink to="#">Connect</NavLink>
        <NavLink to="#">Help</NavLink>
      </div>

      {/* Right Section - Icons & Sign In */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <NavLink to="/" className="signin-button">
          Sign Out
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar

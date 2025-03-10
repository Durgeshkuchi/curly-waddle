import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import logo from '../assets/logo.png' // Replace with actual logo
import {
  FaSearch,
  FaUser,
  FaWallet,
  FaBuilding,
  FaUniversity,
} from 'react-icons/fa'
import CustomerForm from './CustomerForm' // Import the modal

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dropdownRefs = useRef({})

  // Function to toggle dropdown on click
  const handleMenuClick = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu))
  }

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      !Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      )
    ) {
      setOpenDropdown(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  console.log('OPen drowdown: ', openDropdown)

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
          ref={(el) => (dropdownRefs.current['transactions'] = el)}
        >
          <NavLink
            to="#"
            onClick={() => handleMenuClick('transactions')}
            className={openDropdown === 'transactions' ? 'active' : ''}
          >
            Transactions
          </NavLink>
          <div
            className={`dropdown-menu ${
              openDropdown === 'transactions' ? 'active' : ''
            }`}
          >
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
                  <FaUniversity /> Member Transactions(Branchwise)
                </NavLink>
                <NavLink to="#">
                  <FaBuilding /> Single/Multiple Transactions
                </NavLink>
                <NavLink to="#">
                  <FaUniversity /> Bank Transactions
                </NavLink>
                <h4>Bank Reconciliation</h4>
              </div>
              <div className="column">
                <h4>Thrift / MBF / Deposits</h4>
                <NavLink to="#">Retirement</NavLink>
                <NavLink to="#">Death</NavLink>
                <h4>Loans and Advances</h4>
                <h4>Interest Accounts</h4>
              </div>
              <div className="column">
                <h4>Settlements</h4>
                <h4>Share Capital/Dividend Payments</h4>
                <h4>Monthly Transfers</h4>
                <h4>Settlement</h4>
                <h4>Demand List</h4>
                <h4>Online Payments</h4>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Approvals
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Utilities
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Queries
        </NavLink>

        <div
          className="dropdown"
          ref={(el) => (dropdownRefs.current['acc-open'] = el)}
        >
          <NavLink
            to="#"
            onClick={() => handleMenuClick('acc-open')}
            className={openDropdown === 'acc-open' ? 'active' : ''}
          >
            A/C Opening
          </NavLink>
          <div
            className={`dropdown-menu ${
              openDropdown === 'acc-open' ? 'active' : ''
            }`}
          >
            <div className="column">
              <h4>Account Opening</h4>
              <NavLink to="#">Deposits Opening</NavLink>
              <NavLink to="#">Loan Openings</NavLink>
              <NavLink to="#" onClick={() => setIsModalOpen(true)}>
                Customer Opening
              </NavLink>
            </div>
            <div className="column">
              <h4>General Ledger Heads</h4>
            </div>
          </div>
        </div>

        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Parameters
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Outputs
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Maintenance
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Connect
        </NavLink>
        <NavLink to="#" onClick={() => setOpenDropdown(null)}>
          Help
        </NavLink>
      </div>

      {/* Right Section - Icons & Sign In */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <NavLink to="/" className="signin-button">
          Sign Out
        </NavLink>
      </div>

      {/* Customer Details Form Modal */}
      <CustomerForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  )
}

export default Navbar

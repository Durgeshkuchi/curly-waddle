import React, { useState } from 'react'
import '../styles/Login.scss'
import { useNavigate } from 'react-router-dom'
import LoginHeader from './LoginHeader'

const dummyUsers = {
  admin: 'admin123',
  user1: 'password123',
  user2: 'welcome123',
}

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (dummyUsers[username] && dummyUsers[username] === password) {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/dashboard')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <>
      <LoginHeader />
      <div className="login-container">
        <div className="content-area">
          <div className="left-box">
            <p>New checking customers</p>
            <p>Open an account with qualifying activities.</p>
            <a href="#" className="cta-button">
              Open an Account
            </a>
          </div>

          <div className="login-box">
            <h2>Welcome</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
            <a href="#" className="forgot-link">
              Forgot Username/Password?
            </a>
            <a href="#" className="forgot-link">
              Not Enrolled? Sign Up Now.
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

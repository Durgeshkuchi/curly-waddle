import React, { useState } from 'react'
import '../styles/Login.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dummyUsers = {
    user1: 'password123',
    admin: 'adminpass',
    guest: 'guest123',
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (dummyUsers[username] && dummyUsers[username] === password) {
      alert('Login Successful!')
    } else {
      alert('Invalid Username or Password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bank Login</h2>
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
            Login
          </button>
        </form>
        <a href="#" className="forgot-link">
          Forgot Password?
        </a>
      </div>
    </div>
  )
}

export default Login

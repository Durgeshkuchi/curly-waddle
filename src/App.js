import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router basename="/curly-waddle">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* Navbar appears on all protected pages */}
              <Navbar />
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

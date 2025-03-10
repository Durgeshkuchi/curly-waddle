import React, { useState, useEffect } from 'react'
import '../styles/Dashboard.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cardServices from '../assets/cardServices.jpg'
import deposits from '../assets/deposits.jpg'
import savingsAccount from '../assets/savingsAccount.jpg'

const images = [
  {
    src: cardServices,
    title: 'Seamless Digital Payments',
  },
  {
    src: deposits,
    title: '24/7 Customer Support',
  },
  {
    src: savingsAccount,
    title: 'Secure & Reliable Banking',
  },
]

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className="dashboard">
      <h2>Welcome to the Smart Society</h2>
      <div className="slider">
        {/* Image and Title */}
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <div className="title">{images[currentIndex].title}</div>

        {/* Navigation Buttons */}
        <button className="prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Dashboard

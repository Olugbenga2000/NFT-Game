import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const About = () => {
  return (
    <div className="rela__home">
      <Navbar />
      <HeroSection />
    </div>
  )
}
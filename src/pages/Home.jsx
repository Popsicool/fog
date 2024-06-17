import React from 'react'
import { Hero } from '../components/Hero'
import { HomeSection1 } from '../components/HomeSection1'
import { Testimonies } from '../components/Testimonies'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeSection1/>
      <Testimonies/>
    </div>
  )
}

import React from 'react'
import { Hero } from '../components/Hero'
import { HomeSection1 } from '../components/HomeSection1'
import { Testimonies } from '../components/Testimonies'
import pageVariant from "../components/PageVariants";
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <motion.div
    variants={pageVariant}
    initial="start"
      animate="end">
      <Hero/>
      <HomeSection1/>
      <Testimonies/>
    </motion.div>
  )
}

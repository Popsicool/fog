import React from 'react'
import "../styles/error404.css"
import { motion } from 'framer-motion'
import error404 from "../assets/images/error404.png"
import { Link } from 'react-router-dom'
import pageVariant from "../components/PageVariants";

export const Error404 = () => {
  return (
    <motion.div
    className='error-404'
    variants={pageVariant}
    initial="start"
      animate="end"
      >
        <div className="left">
          <p>Ops! This page is not found</p>
          <Link to="/">
          <button>Go Home</button>
          </Link>

        </div>
        <div className="right">
          <img src={error404} alt="error page" />
        </div>

    </motion.div>
  )
}

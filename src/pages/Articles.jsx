import React from "react";
import { Subheading } from "../components/Subheading";
import "../styles/articles.css";
import { useSnapshot } from "valtio";
import { state } from "../App";
import sectionAnimate from "../components/SlidingVariants";
import pageVariant from "../components/PageVariants";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

export const Articles = () => {
  const { posts } = useSnapshot(state);
  function convertToDateOnly(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const dateOnlyString = `${year}-${month}-${day}`;
    
    return dateOnlyString;
  }
  
  return (
    <motion.div className="articles"
    variants={pageVariant}
    initial="start"
      animate="end"
      >
      <Subheading subt="Home / articles" tit="Articles" />
      {posts.length < 1 ? <div className="empty-posts">
        <p>No Article at the moment, please check back latter</p>
      </div> : 
        <div className="article-grid">
        {posts.map((post, index) => (
            <Link to={`/articles/${post.id}`} key={index}>
                <motion.div className="post-card"
                variants={sectionAnimate}
                initial="start"
                whileInView="end"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 1 }}
                >
                    <div className="card-top">
                    <img src={post.picture} alt="post picture" />
                    <p className="abs">{convertToDateOnly(post.created_at)}</p>
                    </div>
                    <div
                    className="card-down"
                    //   
                    >
                    <p>{post.title}</p>
                    <button>Read</button>
                    </div>
                </motion.div>
            </Link>
        ))}
      </div>}
      
    </motion.div>
  );
};

import React from "react";
import { Subheading } from "../components/Subheading";
import "../styles/articles.css";
import { useSnapshot } from "valtio";
import { state } from "../App";
import { Link } from "react-router-dom";

export const Articles = () => {
  const { posts } = useSnapshot(state);
  
  return (
    <div className="articles">
      <Subheading subt="Home / articles" tit="Articles" />
      <div className="article-grid">
        {posts.map((post, index) => (
            <Link to={`/articles/${post.id}`} key={index}>
                <div className="post-card">
                    <div className="card-top">
                    <img src={post.picture} alt="post picture" />
                    <p className="abs">{post.date}</p>
                    </div>
                    <div
                    className="card-down"
                    //   
                    >
                    <p>{post.title}</p>
                    <button>Read</button>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

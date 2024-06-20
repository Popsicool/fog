import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import pageVariant from "../components/PageVariants";

export const Article = () => {
  const navigation = useNavigate();
  const { posts } = useSnapshot(state);
  const { id } = useParams();
  const filterPost = posts.filter((post) => post.id == id);
  if (filterPost.length < 1) {
    navigation("/articles");
    return;
  }
  const singleArticle = filterPost[0];
  const formatPosts = (body) => {
    return body
      .split("\n\n")
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  };
  return (
    <motion.div className="single-article"
    variants={pageVariant}
    initial="start"
      animate="end"
      >
        <div className="img-wrap">
            <img src={singleArticle.picture} alt="article picture" />
        </div>
        <div className="post-main">
            <p className="tt">{singleArticle.title}</p>
            <div dangerouslySetInnerHTML={{ __html: formatPosts(singleArticle.post) }}/>
        </div>
    </motion.div>
  );
};

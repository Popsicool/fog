import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Articles } from "./Articles";
import { Article } from "./Article";

export const PageRouters = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/articles/:id" element={<Article/>} />
      </Routes>
    </AnimatePresence>
  );
};

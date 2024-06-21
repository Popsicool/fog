import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { PageRouters } from "./pages/PageRouters";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { proxy } from "valtio";
// import { Loader } from "./components/Loader";

export const state = proxy({
  posts: [],
});

function App() {
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://backend.fog-agric.com/articles";
    fetch(url)
      .then((res) => {
        if (!res.ok){
          return
        }
        return res.json()
      })
      .then((data) => {
        state.posts = data;
      })
  }, []);

  return (
    <HelmetProvider>

        {/* <Loader /> */}
          <Navigation />
          <PageRouters />
          <Footer />
    </HelmetProvider>
  );
}

export default App;

import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { PageRouters } from "./pages/PageRouters";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { proxy } from "valtio";
import posts from "./components/Posts";
import { Loader } from "./components/Loader";

export const state = proxy({
  posts: [],
});

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    // const url = "https://www.api.schf.org.ng/all";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     state.events = data["past_events"];
    //     state.images = data["media"];
    //     state.upcomingEvents = data["upcoming_events"];
    //     state.loading = false;
    //   })
    //   .catch((error) => {
    //     state.loading = false;
    //   });
    state.posts = posts;
  }, []);

  return (
    <HelmetProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <PageRouters />
          <Footer />
        </>
      )}
    </HelmetProvider>
  );
}

export default App;

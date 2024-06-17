import { useState } from 'react'
import { HelmetProvider } from "react-helmet-async";
import { PageRouters } from './pages/PageRouters';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
  

  return (
    <HelmetProvider>
      <Navigation/>
      <PageRouters/>
      <Footer/>
      
    </HelmetProvider>
  )
}

export default App

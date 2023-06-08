import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Card from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Card></Card>
      <Footer></Footer>
    </div>
  )
}

export default App;
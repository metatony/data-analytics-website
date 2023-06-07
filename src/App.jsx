import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Card from './components/Cards';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Card></Card>
    </div>
  )
}

export default App;
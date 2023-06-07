import React from 'react';
import Typed from 'react-typed';

function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl font-bold text-4xl md:py-6'>Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-semibold'>Fast, flexible financing for </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-semibold md:pl-4 pl-2'
                        
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120} backspeed={140}
                        loop />
                </div>
                <p className='md:text-2xl text-xl font-semibold text-gray-500 mt-5'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>

        </div>
    )
    
}

export default Hero;
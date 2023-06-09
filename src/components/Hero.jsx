import React from 'react';
import Typed from 'react-typed';

function Hero() {
    return (
        <div className='bg-[url("/richard-horvath-_nWaeTF6qo0-unsplash.jpg")] bg-cover text-white '>
            <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4'>
                <p className='text-white font-semibold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-6xl sm:text-5xl font-semibold text-3xl md:py-6'>Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-semibold'>Fast, flexible financing for </p>
                    <Typed
                        className='md:text-4xl sm:text-3xl text-xl font-semibold md:pl-4 pl-2'
                        
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120} backspeed={140}
                        loop />
                </div>
                <button className='bg-[#6C63FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
            </div>

        </div>
    )
    
}

export default Hero;
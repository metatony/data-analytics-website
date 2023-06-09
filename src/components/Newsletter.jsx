import React from 'react';

function Newsletter() {
    return (
        <div className='w-full py-16 px-4 text-white bg-[#6C63FF]'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-4xl text-2xl font-medium py-2'>Want tips & tricks to optimize flow?</h1>
                    <p> Sign up to our newsletter and stay up to date</p>
                </div>
                <div className='my-4 md:my-0'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Your Email' />
                        <button className='bg-[#E6E6E6] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 '>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#E6E6E6]' >Privacy Policy</span></p>
                </div>
                

            </div>

        </div>
    )
    
}

export default Newsletter;
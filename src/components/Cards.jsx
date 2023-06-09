import React from 'react';

function Card() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {/* left card */}
                <div className='w-full shadow-md flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-16 mx-auto mt-[-3rem] bg-transparent' src="/undraw_male_avatar_g98d.svg" alt="" />
                    <h2 className='text-2xl font-semibold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-semibold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2  mx-8'>1 Granted User</p>
                        <p className='py-2  mx-8' >Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#6C63FF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>

                {/* middle card */}

                <div className='w-full shadow-md flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-16 mx-auto mt-[-3rem] bg-transparent' src="/undraw_female_avatar_efig.svg" alt="" />
                    <h2 className='text-2xl font-semibold text-center py-8'>Double User</h2>
                    <p className='text-center text-4xl font-semibold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2  mx-8'>1 Granted User</p>
                        <p className='py-2  mx-8' >Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#6C63FF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>

                {/* right card */}
                <div className='w-full shadow-md flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-16 mx-auto mt-[-3rem] bg-transparent ' src="/undraw_people_re_8spw.svg" alt="" />
                    <h2 className='text-2xl font-semibold text-center py-8'>Triple User</h2>
                    <p className='text-center text-4xl font-semibold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2  mx-8'>1 Granted User</p>
                        <p className='py-2  mx-8' >Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#6C63FF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
                </div>

            </div>

        </div>
    )
    
}

export default Card;
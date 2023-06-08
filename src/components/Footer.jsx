import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, } from 'react-icons/fa';

function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-8'>
            <div>
                <h1 className='w-full text-3xl font-semibold text-white'>REACT</h1>
                <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur ullam voluptates laboriosam at reprehenderit iusto perspiciatis fugit officia asperiores sequi amet quo. Neque atque voluptatibus beatae quod magni labore.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>

                <div>
                    <h6 className='font-medium text-white'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-white'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-white'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-white'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>

            </div>
            

        </div>
    )
    
}

export default Footer;
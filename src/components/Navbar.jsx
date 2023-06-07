import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { TbRuler } from './../../node_modules/react-icons/tb/index.esm';

function Navbar() {
    const [closeNav, setNav] = useState(true)

    function handleClick () {
        setNav(!closeNav);
    }

    return (
        
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            {/* menu icon */}
            <div onClick={handleClick} className='block md:hidden '>
                {closeNav ?  <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                
            </div>

            <div className = {closeNav ? 'fixed left-[-100%]'  : 'fixed left-0 top-0 w-60 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>

                <ul className='uppercase'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>    
                </ul>
            </div>
        </div>
    )
    
}

export default Navbar;
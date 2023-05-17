import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
    <div className='w-[100%] sm:h-[60px] bg-black'>
        <div className='flex items-center justify-between text-white text-xl font-bold'>
            <div className='m-2 flex items-center'>
                <Link to="/"><h1 className='text-4xl mr-6 cursor-pointer'>Movie</h1></Link>
                <Link to="/cards/Popular"><h1 className='text-xl mx-4 cursor-pointer'>Popular</h1></Link>
                <Link to="/cards/Trending"><h1 className='text-xl mx-4 cursor-pointer'>Trending</h1></Link>
                <Link to="/cards/Upcoming"><h1 className='text-xl mx-4 cursor-pointer'>Upcoming</h1></Link>
            </div>
            <div className='mr-6 mt-2 w-[200px]' >
            <input type="text" placeholder='Search...' className='text-black w-[100%] px-2 rounded-lg h-[35px]' />
            </div>
        </div>

    </div>

        </>
    )
}

export default Header
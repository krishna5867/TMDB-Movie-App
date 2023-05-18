import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState([])

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (searchValue !== "") {
            setSearch(searchValue);
            navigate(`/search/q=${searchValue}`);
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <div className='w-[100%] sm:h-[60px] bg-black'>
                <div className='flex items-center justify-between text-white text-xl font-bold'>
                    <div className='m-2 flex items-center'>
                        <Link to="/"><h1 className='sm:text-3xl text-2xl mr-6 cursor-pointer'>TMDB</h1></Link>
                        <Link to="/movie/popular"><h1 className='sm:text-xl text-sm font-semibold mx-4 cursor-pointer'>Popular</h1></Link>
                        <Link to="/movie/top_rated"><h1 className='sm:text-xl text-sm font-semibold mx-4 cursor-pointer'>Top Rated</h1></Link>
                        <Link to="/movie/upcoming"><h1 className='sm:text-xl text-sm font-semibold mx-4 cursor-pointer'>Upcoming</h1></Link>
                    </div>
                    <div className='mr-6 mt-2 w-[200px]' >
                        <input type="text" placeholder='Search...' onChange={handleSearch} className='font-light border-none outline-none text-black w-[100%] px-2 rounded-lg h-[30px]' />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header
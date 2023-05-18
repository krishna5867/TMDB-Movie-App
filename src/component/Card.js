import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({e}) => {
  return (
    <>
    <Link to={`/moviedetails/${e.id}`}>
    <div className=" p-2 shadow-xl box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) w-[220px] m-2 hover:scale-110">
      <div className="w-[200px] items-center">
        <img className='rounded-lg w-[100%] h-[330px]' src={`https://image.tmdb.org/t/p/original${e?e.poster_path:""}`} alt="" />
      </div>
      <div className='rounded-lg'>
        <h1 className='text-xl font-bold'>{e?.original_title.slice(0,13)}</h1>
        <p>{e.release_date}</p>
      </div>
    </div>
    </Link>
    </>
  )
}

export default Card
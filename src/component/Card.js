import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({e}) => {
  return (
    <>
    <Link to={`/carddetails/${e.id}`}>
    <div className="container w-[230px] m-3 hover:scale-50">
      <div className="img h-[350px]">
        <img src={`https://image.tmdb.org/t/p/original${e?e.poster_path:""}`} alt="" />
      </div>
      <div className="text h-[100px]">
        <h1 className='text-xl font-bold'>{e?.original_title}</h1>
        <p>{e.release_date}</p>
      </div>
    </div>
    </Link>


    </>
  )
}

export default Card
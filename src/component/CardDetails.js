import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import API_KEY from '../env'

const CardDetails = () => {
  const [data, setData] = useState()
  console.log(data);
  const { id } = useParams()

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {/* Banner */}
      <div className='w-[100vw] sm:h-[130vh] bg-black pb-10'>
        <div className="w-[100%] sm:position:relative z-0">
          <img className="w-[90%] h-[400px] mx-auto" src={`https://image.tmdb.org/t/p/original${data ? data.backdrop_path : ""}`} alt="" />
        </div>
        {/* Details */}
        <div className="sm:mx-[120px] text sm:flex sm:justify-between">
          <div className="w-[250px] h-[300px] shadow-2xl box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) position:absolute mt-[-300px] sm:mx-0 mx-[50px]">
            <img className='z-40 rounded-lg'
              src={`https://image.tmdb.org/t/p/original${data ? data.poster_path : ""}`} alt="img" />
          </div>
          <div className="w-[60%] h-[px] sm:position:absolute sm:mt-[-150px] mt-[100px] sm:mx-0 mx-[100px]">
            <h2 className='text-white font-bold sm:text-5xl text-3xl text-center'>
              {data ? data.original_title : ""} </h2>
            <h1 className="text-white font-semi-bold sm:text-xl">{data ? data.tagline : ""}</h1>
            <div className="text-start">
            <span className="text-white font-semi-bold text-xl"> {data ? data.vote_average : ""}</span>
            <i className="text-white fas fa-star" />
            <span className="text-white font-semi-bold sm:text-xl"> ({data ? data.vote_count : ""}) votes</span> <br />
            <span className="text-white font-semi-bold sm:text-xl"> {data ? data.runtime + " mins" : ""}</span>
            <span className="text-white font-semi-bold sm:text-xl"> {data ? data.release_date : ""}</span>
            </div>
            <div className='text-white flex mt-4'>
              {
                data && data.genres
                  ?
                  data.genres.map(e => (
                      <div className="sm:px-2 p-0 sm:mx-2 border-2 border-white rounded-full px-3" id={e.id}>{e.name}</div>
                  ))
                  :
                  ""
              }
            </div>
          </div>
        </div>

        <div className='text-start sm:w-[800px] mt-[10px] sm:mx-[400px] mx-[20px]'>
          <div className='text-white text-start'>
              <h1 className="text-3xl font-bold">Synopsis</h1>
              {data ? data.overview : ""}
            </div>
        </div>

      </div>
    </>
  )
}

export default CardDetails
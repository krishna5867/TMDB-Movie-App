import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

const CardDetails = () => {
  const [data, setData] = useState()
  const { id } = useParams()

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=751d01037eb6334a14475163ec2cbbf7&language=en-US`)
    .then(res => res.json())
    .then(data => setData(data))
}

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])
  return (
    <>
    <div className='container w-[100vw] h-[100vh]'>
      <div className="w-[100%] h-[400px]">
        <img src={`https://image.tmdb.org/t/p/original${data ? data.backdrop_path : ""}`} alt="" />
      </div>

      <div className="text flex justify-between">
      <div className="poster mt-6 w-[20%] h-[300px]">
        <img src={`https://image.tmdb.org/t/p/original${data ? data.poster_path : ""}`} alt="" />
      </div>
      <div className=" mt-6 banner w-[60%] h-[300px]">
      <h2 className='text-white font-bold text-xl'>
      {data? data.overview : ""}
      </h2>
      </div>
      </div>

    </div>


    </>
  )
}

export default CardDetails
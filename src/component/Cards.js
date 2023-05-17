import React, {useEffect, useState} from 'react'
import Card from './Card';
import { useParams } from "react-router-dom"

const Cards = () => {
  const {type} = useParams()
  const [data, setData] = useState([]);
  console.log(data);

  const fetchDatas = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=751d01037eb6334a14475163ec2cbbf7&language=en-US`)
      .then(res => res.json())
      .then(data => setData(data.results))
  }

useEffect(()=>{
  fetchDatas();
},[]);

useEffect(() => {
  fetchDatas();
}, [type]);


  return (
    <>
    <div className="font-bold text-3xl text-start ms-12">{(type ? type : "POPULAR").toUpperCase()}</div>
    {/* <div className='flex justify-center '>
      <div className="banner mt-2 border-4 border-green-600 w-[90%] h-[400px]">
          <img src={`https://image.tmdb.org/t/p/original${data && data.backdrop_path}`} alt="" />
        </div>
    </div> */}

    <div className='flex flex-wrap justify-center p-2'>
  {
    data && data.map((e)=>
      <Card e={e} key={e.id}/>
    )
  }
    </div>
    </>
  )
}

export default Cards
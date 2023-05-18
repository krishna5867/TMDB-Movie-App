import React, {useEffect, useState} from 'react'
import Card from './Card';
import { useParams } from "react-router-dom"
import API_KEY from '../env';

const Cards = () => {
  const {type} = useParams()
  const [data, setData] = useState([]);
  
  const fetchDatas = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_KEY}&language=en-US`)
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
    <div className='flex flex-wrap justify-center'>
  {
    data && data.map((e)=>
    <>
      <Card e={e} key={e.id}/>
    </>
    )
  }
    </div>
    </>
  )
}

export default Cards
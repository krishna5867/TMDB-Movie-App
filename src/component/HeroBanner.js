import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from './Cards';
import API_KEY from '../env';

const HeroBanner = () => {
    const { type } = useParams()
    const [data, setData] = useState([]);

    const fetchDatas = async () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setData(data.results))
    }

    useEffect(() => {
        fetchDatas();
    }, []);

    return (
    <div className="">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {data &&
                data.map((e) => (
                    <div key={e.backdrop_path}>
                        <img
                            className="w-[100vw] h-[70vh]"
                            src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                            alt=""
                        />
                    </div>
                ))}
        </Carousel>
        <Cards />
    </div>
        
    )
}

export default HeroBanner
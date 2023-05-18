import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import API_KEY from '../env'

const Search = () => {
    const { query } = useParams();
    const [data, setData] = useState([]);
    console.log(data);

    const SearchDatas = async () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => setData(data.results));
    }

    useEffect(() => {
        SearchDatas();
    }, [query]);


    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {data && data.length > 0 ? (
                    data.map(e => <Card key={e.id} e={e} />)
                ) : (
                    <h1 className="text-3xl font-bold">No Search Result found !</h1>
                )}
            </div>
        </>
    );

}

export default Search
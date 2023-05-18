import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import API_KEY from '../env'

const Search = () => {
    const { query } = useParams();
    const [data, setData] = useState([]);


    const SearchMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&${query}`);
            const data = await response.json();
            setData(data.results);
            console.log(data, '15');
            // &page=1&include_adult=false
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        SearchMovie();
    }, [query]);


    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {data && data.length > 0 ? (
                    data && data.map(e => <Card key={e.id} e={e} />)
                ) : (
                    <h1 className="text-3xl font-bold">No Search Result found !</h1>
                )}
            </div>
        </>
    );

}

export default Search
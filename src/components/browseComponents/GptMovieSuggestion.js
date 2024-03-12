import React from 'react';
import { useSelector } from 'react-redux';
import { Img_CDN_URL } from '../../utils/const';
import MovieCard from './MovieCard';

const GptMovieSuggestion = () => {
    const movieResult = useSelector((store) => store.gpt.gptMovies);

    if (!movieResult) {
        return null;
    }

    console.log(movieResult);

    return (
        <div className="flex flex-wrap min-h-52 justify-center items-center box-border ">
            {movieResult.map((movie, index) => (
                
                <div key={index} className="w-1/5 m-5  bg-white rounded-xl shadow-md overflow-hidden">
                  <MovieCard posterPath={Img_CDN_URL+movieResult.posterPath} />
                </div>
            ))}
        </div>
    );
};

export default GptMovieSuggestion;

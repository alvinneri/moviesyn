import React, { useState, useEffect } from 'react';
import Movies from './movies';
const Hero = () => {

    const api_key = '2fbdfd9c25ebd344b1730d4cfa7eef0e';
    const imageurl = 'https://image.tmdb.org/t/p/w500/'
    const [movie, setMovies] = useState([]);
    
    
    
    const getTopMovies = async () =>{


        const response = await fetch(
    
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        )
    
        const data = await response.json();
        setMovies(data.results);
       
    };

    const getMovies = async (e) => {

        const genre = e.target.id;
        let data = '';

        if(genre!='popular'){
            const response = await fetch(
    
                `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${genre}`
            )
            data = await response.json();
        }else {
            
            const response = await fetch(
    
                `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
            )
            data = await response.json();
        }
      
        
        document.querySelector('.options .active').classList.remove('active');
        document.querySelector(`#${genre}`).classList.add('active');
        setMovies(data.results);

    }


    useEffect(() =>{
    getTopMovies();
    
    },[]);


    
    return (
        <div className="margin">
            <div className="hero-container">
                <div className="options">
                    <h2 className="active" id="popular" onClick={getMovies}>Popular</h2>
                    <h2 id="action"  onClick={getMovies}>Action</h2>
                    <h2 id="comedy"  onClick={getMovies}>Comedy</h2>
                    <h2 id="crime"  onClick={getMovies}>Crime</h2>
                    <h2 id="drama"  onClick={getMovies}>Drama</h2>
                    <h2 id="horror"  onClick={getMovies}>Horror</h2>
                    <h2 id="romance"  onClick={getMovies}>Romance</h2>
                    <h2 id="science-fiction"  onClick={getMovies}>Science Fiction</h2>
                </div>
                <div className="movie-container">
                {movie.map(movies =>(
                    <Movies
                        key = {movies.id} 
                        title={movies.title} 
                        overview ={movies.overview}
                        vote_average={movies.vote_average} 
                        release_date={movies.release_date.substring(0,4)}
                        image ={imageurl + movies.poster_path}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero;
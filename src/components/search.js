import React from 'react';
import SearchMovies from './searchmovies';

const Search = (props) => {
    console.log(props.location.state.movie);
    
    const movie = props.location.state.movie;
    const imageurl = 'https://image.tmdb.org/t/p/w500/';

    return(

        <div className="margin">
            <div className="search-container">
                {movie.map(movies =>(
                    <SearchMovies
                        key = {movies.id} 
                        title={movies.title} 
                        overview ={movies.overview}
                        vote_average={movies.vote_average} 
                        release_date={movies.release_date.substring(0,4)}
                        image ={imageurl + movies.poster_path}   
                        movie={movie}               
                    />
                    ))}
                </div>
        </div>
    )
}

export default Search;
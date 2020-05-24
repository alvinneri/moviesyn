import React from 'react';

const Movies = ({title,overview, vote_average, release_date, image}) => {

    return (
        <div className="">
            <div className="movies">
            <img className="movies_img" src={image} alt={title}/>
            <p className="movies_title">{title}</p>
            <p className="movies_year">{release_date}</p>
            </div>
        </div>
    )
}

export default Movies;
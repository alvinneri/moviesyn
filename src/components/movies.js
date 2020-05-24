import React from 'react';
import {Link} from 'react-router-dom';

const Movies = ({title,overview, vote_average, release_date, image}) => {

    return (
        <div className="">
            <div className="movies">
            <Link to={{pathname: '/details' , state: {title,overview, vote_average, release_date, image} }}><img className="movies_img" src={image} alt={title}/></Link>
            <p className="movies_title">{title}</p>
            <p className="movies_year">{release_date}</p>
            </div>
        </div>
    )
}

export default Movies;
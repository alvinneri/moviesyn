import React from 'react';
import {Link} from 'react-router-dom';

const SearchDetails = (props) => {

    const {title,overview, vote_average, release_date, image,movie} = props.location.state;
    return (
        <div className="margin">
            <Link to={{pathname: '/search' ,state: {movie : movie} }} className="btn-back" >Go Back</Link>
            <div className="details-container">
                <div className="details-img-container">
                    <img src={image} alt=""/>
                </div>
                <div className="details-content-container">
                    <p><span>Title:</span> {title}</p>
                    <p><span>Date Released:</span> {release_date}</p>
                    <p><span>Overview:</span> {overview}</p>
                    <p><span>Average Vote:</span> {vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchDetails;
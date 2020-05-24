import React from 'react';
import {Link} from 'react-router-dom';

const Details = (props) => {

    const {title,overview, vote_average, release_date, image} = props.location.state;
    return (
        <div className="margin">
            <Link to='/' className="btn-back">Go Back</Link>
            <div className="details-container">
                <div className="details-img-container">
                    <img src={image} alt=""/>
                </div>
                <div className="details-content-container">
                    <p>Title: {title}</p>
                    <p>Date Released: {release_date}</p>
                    <p>Overview: {overview}</p>
                    <p>Average Vote: {vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;
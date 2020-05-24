import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="margin">
            <div className="notfound-container">
                <h1>Page Not Found</h1>
                <Link to="/" className="btn-back">Go Back</Link>    
            </div>
        </div>
    )
}

export default NotFound;
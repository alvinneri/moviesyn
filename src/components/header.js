import React, { useState } from 'react';

const header = () => {

    // const [search, setSearch] = useState('');

    return (
    <div className="margin">
        <div className="header-container">
            <p className="logo">KnowThe<span>Movie</span></p>
            <div className="header-search-container">
                <form action="">
                <input type="text" name="search" className="search" placeholder="Search a Movie"/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default header;
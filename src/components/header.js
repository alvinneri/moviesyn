import React, { useState } from 'react';
import {useHistory , Link} from 'react-router-dom';


const Header = () => {

    const [search, setSearch] = useState('');
    const [movie, setMovies] = useState([]);

    const history = useHistory();

    const api_key = '2fbdfd9c25ebd344b1730d4cfa7eef0e';
    let data = '';

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const onSubmitSearch = async (e) => {
        e.preventDefault();

        if(search!=''){
            const response = await fetch(
      
              `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
              
            )
            data = await response.json();
            setSearch('');
           
            
          
        }

        history.push({pathname: '/search' , state : {movie: data.results}})

        
    }


    return (
    <div className="margin">
        <div className="header-container">
            <Link to='/' className="logo-link"><p className="logo">KnowThe<span>Movie</span></p></Link>
            <div className="header-search-container">
                <form onSubmit={onSubmitSearch}>
                <input onChange={handleChange} value={search} type="text" name="search" className="search" placeholder="Search a Movie"/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Header;
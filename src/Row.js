import React, { useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Row.css';
import YouTube from 'react-youtube';

const base_URL = "https://image.tmdb.org/t/p/original/"

const Row = ({ title , fetchUrl , isLarge}) => {
    const [movies , setMovies ] = useState([]);
    const [trailerUrl , setTrailerUrl ] = useState("");


    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request

        }
        fetchData();

    },[fetchUrl]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


  return (
    <div className="row">
        <h2>{title}</h2>

      <div className="row__posters">
        {movies.map( movie => (
          <img className={`row__poster ${isLarge && "row__posterLarge"}` } 
          key={movie.id}
          onClick={movie}
              src={`${base_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name}/>

        ))}

      
      </div>
        { trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}/> }
    </div>
  )
}

export default Row

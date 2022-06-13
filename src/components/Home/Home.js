import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies , fetchAsyncShows,} from '../../features/movies/movieSlice';
const Home = () => {
  
  
    const dispatch = useDispatch();
    const term = "Harry";
    const showText = "Friends";
    // const movieYear = "2005";
    // const showYear = "2006";
   

  useEffect(()=> {
    dispatch(fetchAsyncMovies({term} ));
    dispatch(fetchAsyncShows({term:showText} ));
  }, [dispatch]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home
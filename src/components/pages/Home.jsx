import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {MovieListings} from '../MovieListings/MovieListings';
import {Carousel} from '../Carousel/Carousel';

export const Home = () => (
  <>
    <div classname="navbar">
       <NavBar />
    </div>
    <div>
    </div>
    <div classname="movielistings">
      <MovieListings />
    </div>
    
  </>
);


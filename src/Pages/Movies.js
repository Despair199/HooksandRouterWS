import React from 'react';
import AddMovie from '../Components/AddMovie/AddMovie';
import MovieList from '../Components/MovieList/MovieList';
import FilterMovie from '../Components/FilterMovie/FilterMovie';

const Movies = ({movies, add, inputSearch, setInputSearch, newRate, setNewRate}) => {
  return (
    <div>
          <AddMovie add={add} />
          <FilterMovie 
          inputSearch={inputSearch}
           setInputSearch={setInputSearch} 
           newRate={newRate}
            setNewRate={setNewRate}
            />
          <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
    </div>
  );
};

export default Movies;
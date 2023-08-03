
import { useState } from 'react';
import './App.css';
import {moviesData} from './Data';
import Navigation from './Components/Navigation/Navigation';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';

function App() {
  const [movies, setMovies] = useState(moviesData)

  const add =(newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
          <Navigation />
          <AddMovie add={add} />
          <MovieList movies={movies} />

          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/movies' element={ <Movies add={add} />} />
            <Route path='/tvshows' element={ <TvShows />} />
          </Routes>
    </div>
  );
}

export default App;

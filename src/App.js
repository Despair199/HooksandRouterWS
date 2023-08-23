
import { useState } from 'react';
import './App.css';
import {moviesData} from './Data';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';
import ErrorPage from './Pages/ErrorPage';
import Description from './Pages/Description';
import Trailer from './Pages/Trailer'


function App() {
  const [movies, setMovies] = useState(moviesData)

  const [inputSearch, setInputSearch] = useState ('')

  const [newRate, setNewRate] = useState(0)
  const add =(newMovie) => {
    setMovies([...movies, newMovie])
  }



  return (
    <div className="App">
          <Navigation />

          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/movies' element={ <Movies movies={movies} add={add} inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate} />} />
            <Route path='/tvshows' element={ <TvShows />} />
            <Route path='/*' element={ <ErrorPage />} />
            <Route path='/description/:id' element={ <Description />} />
            <Route path='/trailer/:id' element={ <Trailer />} />
          </Routes>
    </div>
  );
}

export default App;

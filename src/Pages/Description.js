import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { moviesData } from '../Data';

const Description = () => {
  const [movie, setMovie] = useState({})

  const navigate = useNavigate()
  const {id} =useParams()

  useEffect(()=> {
    const foundMovie = moviesData.find((el)=> el.id === id)
    setMovie(foundMovie)
  }, {id})

  return (
    <div>
      <Button onClick={()=> navigate(-1)}> Back </Button>
      <h3> {movie.description}</h3>
    </div>
  )
}

export default Description
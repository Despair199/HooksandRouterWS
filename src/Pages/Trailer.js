import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { moviesData } from '../Data'
const Trailer = () => {
    const [movie, setMovie] = useState({})


    const {id} = useParams()

    useEffect(() =>{
      const foundMovie = moviesData.find((el)=> el.id === id)
      setMovie(foundMovie)
    }, [id]) 
  return (
    <div>
        <iframe src={movie.trailer} title='trailer' allowFullScreen width='100%' height=''/>
    </div>
  )
}

export default Trailer
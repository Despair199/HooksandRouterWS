import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data'
const Trailer = () => {
    const [movie, setMovie] = useState({})

    const navigate = useNavigate
    const {id} = useParams()
  return (
    <div>
        <iframe src={movie.trailer} title='trailer' allowFullScreen width='100%' height=''/>
    </div>
  )
}

export default Trailer
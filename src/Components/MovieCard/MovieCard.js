import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate} Stars</Card.Text>
        <ReactStars count={5} size={24}  color2={'#ffd700'} value={movie.rate} edit={false} />
        <Button onClick={()=> Navigate(`/description/${movie.id}`)}>Description</Button>
        <Button onClick={()=> Navigate(`/trailer/${movie.id}`)}>Trailer</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
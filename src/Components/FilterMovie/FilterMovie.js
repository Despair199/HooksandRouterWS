import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from 'react-stars'

const FilterMovie = ({inputSearch, setInputSearch, newRate, setNewRate}) => {
  return (
    <div>
        <Form.Control placeholder="Search for a movie ..." value={inputSearch} onChange={(e)=> setInputSearch(e.target.value)} />
        <ReactStars count={5} size={36} color2={'#ffd700'} half={false} />
    </div>
  )
}

export default FilterMovie
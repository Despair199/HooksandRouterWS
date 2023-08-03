import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState ('')
    const [rate , setRate] = useState (0)
    const [posterUrl, setPosterUrlcv] = useState (' ')
    return (
    <div>
<Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

        <Form.Label>Enter movie title</Form.Label>
        <Form.Control onChange={(e) =>setTitle(e.target.value)} type="text" />

        <Form.Label>Enter movie description</Form.Label>
        <Form.Control onChange={(e) =>setDescription(e.target.value)}type="text" />

        <Form.Label>Enter movie rate</Form.Label>
        <Form.Control type="number" />

        <Form.Label>Enter movie posterUrl</Form.Label>
        <Form.Control onChange={(e) =>setPosterUrlcv(e.target.value)} type="text" />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
import React from 'react'
import Card from 'react-bootstrap/Card';

const Trainer = ({props}) => {
  return (
    <>
    <Card border='danger' className='m-3'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.discription}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Trainer
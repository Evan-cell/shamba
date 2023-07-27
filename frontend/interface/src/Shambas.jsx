import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Shambas({shamba}) {
  return (
    <Card className='my-3 p-3 rounded'>
    <Link to={`/shambas/${shamba._id}`}>
        <Card.Img src={shamba.image} />
    </Link>
    <Card.Body>
    <Link to={`/shambas/${shamba._id}`}>
        <Card.Title as="div">
            <strong>{shamba.name}</strong>
        </Card.Title>
        <Card.Text as="h3">
            ${shamba.price}
        </Card.Text>
    </Link>
    </Card.Body>
</Card>
  )
}

export default Shambas
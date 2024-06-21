import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Services = () => {
    const { elements } = useAuth();
    return (
        <div className='my-5'>
            <h1>Most attractive Place</h1>
            <Row xs={1} md={3} className="g-4">

                {
                    elements.map(event =>




                        <Col key={event._id}>

                            <Card>
                                <Card.Img variant="top" src={event.img} />

                                <Card.Body className='bg-warning'>
                                    <Card.Title>{event.name}</Card.Title>
                                    <Card.Text>
                                        {event.description.slice(0, 200)}
                                    </Card.Text>
                                    <Link to={`/service/${event._id}`}>
                                        <button className='btn btn-primary mt-2 mx-3'>Process to Order</button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>





                    )
                }
            </Row>
        </div>
    );
};

export default Services;
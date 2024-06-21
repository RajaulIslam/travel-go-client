import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import './MyOrder.css'
import noProductImg from "../../../images/noProductFound.png";
const MyOrder = () => {
    const { users, setUsers, allContext } = useAuth();
    const { user } = allContext;
    console.log(user.email);

    useEffect(() => {

    }, [])

    // const {email}=users;
    const findResult = users.filter(singleUser => singleUser.userEmail == user.email)
    console.log(findResult);

    const handelDelete = id => {
        const proceed = window.confirm('are you sure u want ot delete this item')
        if (proceed) {
            const url = `https://thawing-scrubland-41721.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successFully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        console.log(remainingUsers)
                        setUsers(remainingUsers);
                    }
                })
        }
    }



    return (
        <div className='my-5'>
            <h1 className='my-5'>My order list</h1>
            {
                findResult.length ? findResult.map
                    (
                        singleResult =>

                            // <Row >
                            //     <Col className='cart-bg'>
                            //         <h1></h1>
                            //         <p>{singleResult.userEmail}</p>
                            //         <button className='btn btn-primary ' onClick={() => handelDelete(singleResult._id)}>Delete</button>
                            //     </Col>
                            // </Row>
                            <Card className="w-50 mx-auto" style={{ width: '18rem' }} key={singleResult._id}>
                                <Card.Body>
                                    <Card.Title> Package Name: {singleResult.serviceName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Order status:{singleResult.orderStatus}</Card.Subtitle>
                                    <Card.Text>
                                        User Email: {singleResult.userEmail}
                                    </Card.Text>
                                    <button className='btn btn-primary ' onClick={() => handelDelete(singleResult._id)}>Delete</button>

                                </Card.Body>
                            </Card>

                    )
                    : <div><img className='img-fluid' src={noProductImg} alt="" /></div>
            }
        </div>
    );
};

export default MyOrder;
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import noProductImg from "../../images/noProductFound.png";
const AllOrder = () => {
    const { users, setUsers, elements } = useAuth();
    const [singleUser, setSingleUser] = useState({});
    const { email, orderStatus } = users;
    // const findOrder=elements.filter(element=>element.)
    console.log(users);

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
                        console.log(remainingUsers);
                        setUsers(remainingUsers);
                    }
                })
        }
    }
    const handleStatusUpdate=id=>{


        const url=`https://thawing-scrubland-41721.herokuapp.com/users/${id}`;

        fetch(url,{
            method:'PUT'
            
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('updated successfully')
            }
        
            

        })






    }

    return (
        <div className='my-5'>
            <h1>All Oder List</h1>
            {
                users.length ? users.map(user => 
                
                
                
                    <Card className="w-50 mx-auto" style={{ width: '18rem' }} key={user._id}>
                    <Card.Body>
                        <Card.Title> Package Name: {user.serviceName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Order status:{user.orderStatus}</Card.Subtitle>
                        <Card.Text>
                            User Email: {user.userEmail}
                        </Card.Text>
                        <button className='btn btn-primary ' onClick={() => handelDelete(user._id)}>Delete</button>
                        <button  className='btn ms-2 btn-primary ' onClick={() => handleStatusUpdate(user._id)}>Status Update</button>

                    </Card.Body>
                </Card>
                
                
                ) : 
                <img src={noProductImg} alt="" />
            }
        </div>
    );
};

export default AllOrder;
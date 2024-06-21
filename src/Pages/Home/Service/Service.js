import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hook/useAuth';


const Service = () => {
    const { id } = useParams();
    const { elements, allContext } = useAuth();
    const { user } = allContext;
    console.log(user);
    const findService = elements.find(element => element?._id === id);
    // console.log(findService);

    console.log(elements);
    const nameRef = useRef();


    // const serviceNameRef= useRef();


    const handelSubmit = e => {
        const userName = nameRef.current.value;
        // const userEmail = emailRef.current.value;
        // const serviceName= serviceNameRef.current.value; 
        const newUser = { userName: userName, userEmail: user.email, serviceName: findService.name, orderStatus: "pending" }
        console.log(newUser);

        fetch('https://thawing-scrubland-41721.herokuapp.com/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
             console.log(data._id)
                if (data.insertedId) {
                    alert('Order Placed SuccessFully')
                    // const allUsers=
                    e.target.reset();
                }
            })
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });

        e.preventDefault()
    }


    return (
        <div className='body my-5'>
            <div className='style shadow-lg container'>
                <h1>Confirm order</h1>
                <form onSubmit={handelSubmit} action=""> <br />
                    <input placeholder='enter your name' ref={nameRef} type="text" required /> <br />
                    <input placeholder='enter your address' type="text" required /> <br />


                    <input value={findService.name} type="text" required /> <br />

                    <input type="email" name="" id="" value={user.email} required /> <br />
                    <input type="text" name="" id="" value={'pending'} required /> <br />
                    <input className='bg-warning rounded' type="submit" value="Confirm Order" />
                </form>
            </div>
        </div>
    );
};

export default Service;
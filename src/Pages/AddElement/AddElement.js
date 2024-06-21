import React from 'react';
import { useRef } from 'react';
import './AddElement.css'

const AddElement = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();


    const handelSubmit = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const newUser = {name: name, description: description, img:img}

        fetch('https://thawing-scrubland-41721.herokuapp.com/elements',{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(newUser)
            
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data._id)
            if(data.insertedId){
                alert('user added successfully')
                e.target.reset();
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          }); 
        e.preventDefault();
    }
    
    return (
        <div className='style py-5 m-5 shadow-lg rounded-'>
            <h2>Add a new Service</h2>
            <form onSubmit={handelSubmit} action="">
                <input placeholder='enter service name' ref={nameRef} type="text" required/><br />
                <input placeholder='enter description' ref={descriptionRef} type="text" name="" id="" required/><br />
                <input placeholder='Enter image url' ref={imgRef} type="text" name="" id="" required/><br />
                <input className='bg-warning rounded text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddElement;
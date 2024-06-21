import React from 'react';
import './SendMail.css'

const SendMail = () => {
    const handelSubmit=e=>{
        e.preventDefault();
    }
    return (
        <div className='bg-style py-5 text-white'>
            <h1>Save time, save money!
            </h1>
            <p>Send us Your email and we'll send the best deals to you</p>
            <form onClick={handelSubmit} action="">
                <input className='py-3 mb-2 px-2' placeholder='Your Email' type="email" name="" id="" /><br />
                <input className='btn btn-primary ' type="submit" value="Subscribe" />
            </form>
        </div>
    );
};

export default SendMail;
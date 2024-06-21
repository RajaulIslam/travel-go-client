import React from 'react';
import notFound from "../../images/notFound.png";
const NotFound = () => {
    return (
        <div>
            <img className='img-fluid w-75' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
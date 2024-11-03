import React from 'react';
import { useParams } from 'react-router-dom';

const Laptop = () => {
    const {category} = useParams()
   
    return (
        <div>
            laptop{category}
        </div>
    );
};

export default Laptop;
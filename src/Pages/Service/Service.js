import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    const {id, name, img, price} = service;
    const navigate = useNavigate();

    const navigateServiceDetail = (id) =>{
        navigate(`/service/${id}`);
       
    }
    return (
        <div id="service" className='service'>
            <h1>Services</h1>
            <img width={400} src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() =>navigateServiceDetail(id)}>Details</button>
        </div>
    );
};

export default ServiceDetail;
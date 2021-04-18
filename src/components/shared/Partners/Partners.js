import React from 'react';
import './Partners.css';
import apple from '../../../images/apple-1.png';
import coca from '../../../images/coca-cola-logo-1.jpg';
import samsung from '../../../images/samsung-logo.png';
import nike from '../../../images/nike-logo.png';

const Partners = () => {
    return (
        <div className="partners-container bg-warning">
            <div className="row w-100 d-flex align-items-center">
                <div className="col-md-3 p-3 ml-5">
                    <h3 className="text-dark">Our partners <br/> 
                    <span className="text-white">and clients</span> </h3>
                </div>
                <div className="col-md-8 d-flex flex-row-reverse">
                    <img style={{height: '80px'}} src={apple} alt=""/>
                    <img style={{height: '80px'}} src={coca} alt=""/>
                    <img style={{height: '80px'}} src={samsung} alt=""/>
                    <img style={{height: '80px'}} src={nike} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

export default Partners;
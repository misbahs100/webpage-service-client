import React, { useEffect, useState } from 'react';
import responsive from '../../../images/responsive-2.jpg';
import standard from '../../../images/professional.png';
import ecommerce from '../../../images/ecommerce-1.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const serviceData = [
    {
        icon: responsive,
        name: 'Responsive Webpage',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        price: '$10'
    },
    {
        icon: standard,
        name: 'Standard and Professional',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        price: '$34'
    },
    {
        icon: ecommerce,
        name: 'E-commerce websites',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        price: '$52'
    }
]

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container mt-5 p-5">
            <div className="text-center">
            <h4 className="text-warning text-uppercase">our services</h4>
                <h1 className="text-secondary text-uppercase">services we provide</h1>
            </div>
        
            <div className="row w-100 pl-5 pl-md-4">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row mt-5 pt-5">
                            {
                                services.map(service => <ServiceCard service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;
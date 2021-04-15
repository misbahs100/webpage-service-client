import React from 'react';
import responsive from '../../../images/responsive.png';
import standard from '../../../images/standard.png';
import ecommerce from '../../../images/ecommerce.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const serviceData = [
    {
        icon: responsive,
        name: 'Responsive Webpage',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nostrum iure aut quidem voluptatem est.',
        price: '$10'
    },
    {
        icon: standard,
        name: 'Standard and Professional',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nostrum iure aut quidem voluptatem est.',
        price: '$34'
    },
    {
        icon: ecommerce,
        name: 'E-commerce websites',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nostrum iure aut quidem voluptatem est.',
        price: '$52'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 className="text-warning">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            {/* <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div> */}
        


            <div className="row w-100 pl-5 pl-md-4">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row mt-5 pt-5">
                            {
                                serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import wilson from '../../../images/document.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : wilson
    }
]

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <section className="testimonial-container p-5">
            <div className="text-center mb-5">
                <h4 className="text-warning text-uppercase">Happy Client's</h4>
                <h1 className="text-secondary text-uppercase">testimonials</h1>
            </div>

            <div className="">
                <div className="row mb-5">
                    {
                        testimonials.map( testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
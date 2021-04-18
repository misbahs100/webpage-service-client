import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div className="testimonial-individual card p-4 my-2">
                <div>
                    <p className="">{testimonial.quote}</p>
                </div>
                <div className="d-flex align-items-center">
                    <div className="p-2 testimonial-img"><img src={testimonial.img} alt="" /></div>
                    <div className="p-2 ml-3 d-flex align-items-center" >
                        <h6 className="text-warning">{testimonial.name}
                            <br />
                            <span className="text-secondary">{testimonial.from}</span>
                        </h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { imageURL, name, description, _id, price } = service;  // destructering
    return (
        <div class="el-wrapper">
            <div class="box-up">
                <img class="img" src={imageURL} alt="" />
                <div class="img-info">
                    <div class="info-inner">
                        <span class="p-name text-warning">{name}</span>
                        <span class="p-company">{description}</span>
                    </div>
                    <div class="a-size">Available at : <span class="size text-warning">Anytime</span></div>
                </div>
            </div>

            <div class="box-down">
                <div class="h-bg">
                    <div class="h-bg-inner"></div>
                </div>

                <Link to={`order/${_id}`}>
                    <button class="cart btn" >
                        <span class="price text-warning">{price}</span>
                        <span class="add-to-cart">
                            <span class="txt">Add in order</span>
                        </span>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;
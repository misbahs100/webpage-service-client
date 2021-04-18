import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCheckoutForm from '../SimpleCheckoutForm/SimpleCheckoutForm';

const stripePromise = loadStripe('pk_test_51IebtOEfLSXh2ldbzYeSMtviCqBvw8YzxhRbhXc265i3Sm6U2KPd15mkawWspI5SKKHTR098dyG37HCBT5Ks8qsA00DWv77nhV');

const Order = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://agile-earth-23831.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])
    console.log(service);
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#161616", height: '100%' }}>
                <h3 className="p-1 my-5 ml-2 text-warning">Order</h3>
                <div className="container card" >
                   <form>
                        <div className="mb-5 mt-5 ">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Name</label>
                                <input name="text" type="text" defaultValue={loggedInUser.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Email address</label>
                                <input name="email" type="email" defaultValue={loggedInUser.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Service name</label>
                                <input name="orderName" type="text" defaultValue={service.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            

                        </div>
                    </form>
                </div>
                <div className="card mt-5">
                    <Elements stripe={stripePromise}>
                        <SimpleCheckoutForm service={service}></SimpleCheckoutForm>
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Order;
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListDetail from '../OrderListDetail/OrderListDetail';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [orders, setOrders] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));
    // }, [])

    // if(isAdmin){
    //     useEffect(() => {
    //         fetch(`http://localhost:5000/orders`)
    //         .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setAllOrders(data);
    //             })
    //     }, [])
    // }
    // else{
        useEffect(() => {
            fetch(`http://localhost:5000/orders/${loggedInUser.email}`)
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data);
                })
        }, [])
    // }
   
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#d0d4d3", height: '100vh' }}>
            <h3 className="p-1 my-5 ml-2">Your all orders</h3>
            <div className="container" >
                <div className="row">
                {
                   orders.map( order => <OrderListDetail order={order}></OrderListDetail>)
               }
                </div>
            </div>
           
        </div>
    </section>
    );
};

export default OrderList;
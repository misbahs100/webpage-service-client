import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderListAdmin = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#d0d4d3", height: '100vh' }}>
                <h3 className="p-1 my-5 ml-2">All orders</h3>
                <div className="container" >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr>
                                        <th scope="row">{order.userName}</th>
                                        <td>{order.email}</td>
                                        <td>{order.serviceName}</td>
                                        <td>
                                        <select className="text-danger" name="status" id="status">
                                            <option className="text-danger" value="volvo">Pending</option>
                                            <option className="text-warning" value="saab">On going</option>
                                            <option className="text-success" value="opel">Done</option>
                                        </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default OrderListAdmin;
import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderListAdmin = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://agile-earth-23831.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])

   const handleStateChange = (state, id) => {
    //    console.log(state, id)
       const stateInfo = {state};
       console.log(stateInfo);
      
    fetch(`https://agile-earth-23831.herokuapp.com/updateState/${id}`, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stateInfo)
    })
    //     // .then(response => response.json())
        .then(data => {
            console.log(data)
            alert("State changed successfully.")
        })
    }
    return (
        <section className="container-fluid row">
            
                {/* <div className="container" > */}
                    <table className="table text-white">
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
                                        {/* <select className="" name="status" id="status"> */}
                                        <button onClick={()=>handleStateChange("pending", order._id)} className="btn-sm btn-danger mr-1" >pending</button>
                                        <button onClick={()=>handleStateChange("ongoing", order._id)} className="btn-sm btn-warning mr-1" >on going</button>
                                        <button onClick={()=>handleStateChange("done", order._id)} className="btn-sm btn-success mr-1" >done</button>
                                        {/* </select> */}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                {/* </div> */}

            
        </section>
    );
};

export default OrderListAdmin;
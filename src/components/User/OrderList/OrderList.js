import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import OrderListAdmin from '../../Admin/OrderListAdmin/OrderListAdmin';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import OrderListUser from '../OrderListUser/OrderListUser';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://agile-earth-23831.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#161616", height: '100vh' }}>
                {isAdmin ? <h3 className="p-1 my-5 ml-2 text-warning">All orders</h3> : <h3 className="p-1 my-5 ml-2 text-warning">Your orders</h3>}
                <div className="container" >
                    {
                        isAdmin ? <OrderListAdmin></OrderListAdmin>
                            : <OrderListUser></OrderListUser>
                    }
                </div>

            </div>
        </section>
    );
};

export default OrderList;
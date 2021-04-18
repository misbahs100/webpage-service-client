import React from 'react';

const OrderListDetail = ({ order }) => {
    let btnClassName;
    if (order.state === "pending") {
        btnClassName = "danger";
    }
    else if (order.state === "ongoing") {
        btnClassName = "warning";
    }
    else if (order.state === "done") {
        btnClassName = "success";
    }
    return (
        <div className="col-md-6">
            <div className="card p-3">
                <div className="d-flex justify-content-between">
                    <div><img style={{ height: '80px' }} src={order.serviceImage} alt="" /></div>
                    <div><button className={`btn btn-${btnClassName}`}>{order.state}</button></div>
                </div>
                <div className="py-1 mt-1">
                    <h3 className="text-warning">{order.serviceName}</h3>
                    <p className="text-secondary">{order.serviceDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderListDetail;
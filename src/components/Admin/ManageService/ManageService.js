import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import UpdateService from '../UpdateService/UpdateService';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://agile-earth-23831.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#d0d4d3", height: '100vh' }}>
                <h3 className="p-1 my-5 ml-2">Manage Services</h3>
                <div className="container " >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Service Id</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <UpdateService service={service}></UpdateService>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageService;
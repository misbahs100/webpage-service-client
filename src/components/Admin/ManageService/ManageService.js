import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import UpdateService from '../UpdateService/UpdateService';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('One service deleted.')
            })
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal(){
        setIsOpen(false);
      }
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
                                services.map(service => <tr>
                                    <th scope="row">{service._id}</th>
                                    <td>{service.name}</td>
                                    <td>{service.description}</td>
                                    <td>
                                        <button  onClick={openModal} type="button" style={{ color: 'green' }} className="btn" ><FontAwesomeIcon icon={faPen} /></button>
                                        <UpdateService modalIsOpen={modalIsOpen} serviceId={service._id} closeModal={closeModal}></UpdateService>

                                        <button style={{ color: 'red' }} className="btn" onClick={() => handleDelete(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        
                                       



                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* modal for updating */}


        </section>
    );
};

export default ManageService;
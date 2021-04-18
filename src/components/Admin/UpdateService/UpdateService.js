import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdateService = ({ service }) => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '2dad6d7bf6cef1ec0ba10a9e39066744');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log("hdfjlk")
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onSubmit = data => {
        const newServiceData = {
            id: data.id,
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        fetch(`https://agile-earth-23831.herokuapp.com/updateService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newServiceData)
        })
            .then(data => {
                console.log(data)
                alert("Service updated successfully.")
            })

        console.log(data)
    }

    const handleDelete = (id) => {
        fetch(`https://agile-earth-23831.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('One service deleted.')
            })
    }

    return (
        <tr>
            <th scope="row">{service._id}</th>
            <td>{service.name}</td>
            <td>{service.description}</td>
            <td>
                <button type="button" style={{ color: 'green' }} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><FontAwesomeIcon icon={faPen} /></button>
                {/* <UpdateService modalIsOpen={modalIsOpen} serviceId={service._id} closeModal={closeModal}></UpdateService> */}

                <button style={{ color: 'red' }} className="btn" onClick={() => handleDelete(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>

                {/* modal for updating */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-warning" id="exampleModalLabel">Edit or Update</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-5 mt-5">
                                        <div className="form-group">
                                            <label className="text-warning">Service ID (This should be exact)</label>
                                            <input className="form-control" type="text" name="id" {...register("id", { required: true })} placeholder="please type the 'Service ID' for validity." />
                                            {/* {errors.id && <span>This field is required</span>} */}
                                        </div>
                                        <div className="form-group">
                                            <label className="text-warning">New Service Name</label>
                                            <input className="form-control" type="text" name="name" {...register("name", { required: true })} />
                                            {/* {errors.name && <span>This field is required</span>} */}
                                        </div>
                                        <div className="form-group">
                                            <label className="text-warning">New Price</label>
                                            <input className="form-control" type="text" name="price" {...register("price", { required: true })} />
                                            {/* {errors.name && <span>This field is required</span>} */}
                                        </div>
                                        <div className="form-group">
                                            <label className="text-warning">New Description</label>
                                            <input className="form-control" type="text" name="description" {...register("description", { required: true })} />
                                            {/* {errors.description && <span>This field is required</span>} */}
                                        </div>
                                        <div className="form-group">
                                            <label className="text-warning">Upload image ?</label>
                                            <input onChange={handleImageUpload} className="form-control" name="file" type="file" />

                                        </div>
                                        {/* <div className="d-flex justify-content-between">
                        <button className="btn btn-warning" type="submit" >Submit</button>
                        <button onClick={closeModal} className="btn btn-dark"><FontAwesomeIcon className="text-danger" icon={faWindowClose} /> Close</button>
                        </div> */}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-warning">Update Info</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </td>
        </tr>


    );
};

export default UpdateService;
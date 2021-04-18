import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
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
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(serviceData);
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                alert('Service Added Successfully.')
            })


    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="p-1 my-5 ml-2">Add Service</h5>
                <div className="container card" style={{ backgroundColor: 'gray' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5 mt-5">
                            <div className="form-group">
                                <label className="text-warning">Service Name</label>
                                <input className="form-control" type="text" name="name" {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Price</label>
                                <input className="form-control" type="text" name="price" {...register("price", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Description</label>
                                <input  className="form-control"  type="text" name="description" {...register("description", { required: true })} />
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Upload image</label>
                                <input onChange={handleImageUpload} className="form-control" name="file" type="file"  />
                                {/* {errors.files && <span>This field is required</span>} */}
                            </div>
                            <button className="btn btn-warning" type="submit" >Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddService;
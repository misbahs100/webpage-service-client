import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const UpdateService = ({ modalIsOpen, closeModal, serviceId }) => {
    const { register, handleSubmit, errors } = useForm();

    const handleImageUpload = (event) => {
       
    }
    
    const onSubmit = data => {
        
        console.log(data)
    }

    return (
        <div >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <p>Service ID: <strong>{serviceId}</strong></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-5 mt-5">
                        <div className="form-group">
                            <label className="text-warning">Service Name</label>
                            <input className="form-control" type="text" name="name" {...register("name", { required: true })} />
                            {/* {errors.name && <span>This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <label className="text-warning">Price</label>
                            <input className="form-control" type="text" name="price" {...register("price", { required: true })} />
                            {/* {errors.name && <span>This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <label className="text-warning">Description</label>
                            <input className="form-control" type="text" name="description" {...register("description", { required: true })} />
                            {/* {errors.description && <span>This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <label className="text-warning">Upload image</label>
                            <input onChange={handleImageUpload} className="form-control" name="file" type="file" />

                        </div>
                        <div className="d-flex justify-content-between">
                        <button className="btn btn-warning" type="submit" >Submit</button>
                        <button onClick={closeModal} className="btn btn-dark"><FontAwesomeIcon className="text-danger" icon={faWindowClose} /> Close</button>
                        </div>
                    </div>
                    
                </form>
                
            </Modal>
        </div>
    );
};

export default UpdateService;
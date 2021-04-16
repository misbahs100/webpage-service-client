import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddTestimonial = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 console.log(loggedInUser);
    const onSubmit = data => {
        const testimonialData = {
            name: data.name,
            email: data.email,
            quote: data.description,
            from: data.company,
            img: loggedInUser.photoURL
        }
        console.log(testimonialData);
        fetch('http://localhost:5000/addTestimonial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => {
                alert('Thank you for your testimony.')
            })


    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="p-1 my-5 ml-2">Add Testimonial</h5>
                <div className="container card" style={{ backgroundColor: 'gray' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5 mt-5">
                            <div className="form-group">
                                <label className="text-warning">Your Name</label>
                                <input className="form-control" type="text" name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Your Email</label>
                                <input className="form-control" type="text" name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Company's name, Designation</label>
                                <input className="form-control" type="text" name="company" {...register("company", { required: true })} />
                                {errors.company && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Quote</label>
                                <input className="form-control" type="text" name="description" {...register("description", { required: true })} placeholder="what you want to say..."/>
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <button className="btn btn-warning" type="submit" >Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddTestimonial;
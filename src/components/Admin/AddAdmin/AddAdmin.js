import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = e => {
        const newAdmin = { email: e.target.value };

        setAdmin(newAdmin);
    }
    
    const handleAddAdmin = () => {
        fetch('https://agile-earth-23831.herokuapp.com/addAnAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("Admin added successfully.")
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", height: '100%', right: 0, backgroundColor: "#161616" }}>
                <h5 className="p-1 my-5 ml-2 text-warning">Add Admin</h5>
                <div className="container card" style={{ backgroundColor: 'white' }}>

                    <form>
                        <div className="mb-5 mt-5 ">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Email address</label>
                                <input name="email" type="email" onBlur={handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <button onClick={handleAddAdmin} type="submit" className="btn btn-warning">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;
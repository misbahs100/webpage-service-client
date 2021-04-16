import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Order = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="p-1 my-5 ml-2">Order</h5>
                <div className="container card" style={{ backgroundColor: 'gray' }}>

                    <form>
                        <div className="mb-5 mt-5 ">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Email address</label>
                                <input name="email" type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                            <button  type="submit" className="btn btn-warning">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;
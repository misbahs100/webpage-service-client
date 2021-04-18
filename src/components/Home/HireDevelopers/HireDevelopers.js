import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HireDevelopers.css';

const HireDevelopers = () => {
    return (
        <section className="hire-container">
            <div className="p-5 mb-5" style={{ position: 'relative' }}>
                <h4 className="text-warning text-uppercase">For Developers</h4>
                <h1 className="text-white text-uppercase">Do you want to earn with us?</h1>
            </div>
            <div className="row w-100">
                <div className="col-md-5 col-sm-6 col-10 ml-5">
                    <p className="text-white">Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                    <div>
                        <div className="d-flex justify-content-between text-white"><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> Excellent Environment</p></div><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> Fixed price</p></div></div>
                        <div className="d-flex justify-content-between text-white"><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> No Fee</p></div><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> Good Application</p></div></div>
                        <div className="d-flex justify-content-between text-white"><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> Weekly Payment</p></div><div><p><FontAwesomeIcon className="text-warning" icon={faCheck} /> Stable Orders</p></div></div>
                        <button className="btn btn-warning">Become a Developer</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireDevelopers;
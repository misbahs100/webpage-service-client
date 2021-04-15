import React from 'react';
import './ThemeFutureDetail.css';

const ThemeFutureDetail = ({ theme }) => {
    return (
        <div className="col-md-3 col-sm-6 col-12 mt-5">
            <div className="d-flex ">
                <div className="theme mr-1 col-5 bg-warning rounded-circle">
                    <img  src={theme.icon} alt="" />
                </div>
                <div className="theme">
                    <p>{theme.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ThemeFutureDetail;
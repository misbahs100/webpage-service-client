import React from 'react';
import './ThemeFutureDetail.css';

const ThemeFutureDetail = ({ theme }) => {
    return (
        <div className="col-md-3 col-sm-6 col-12 mt-5">
            <div className="d-flex align-items-center">
                <div className="theme mr-1  bg-warning ">
                    <img src={theme.icon} alt="" />
                </div>
                <div className="">
                    <p>{theme.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ThemeFutureDetail;
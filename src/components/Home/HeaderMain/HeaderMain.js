import React from 'react';
import headerBg from '../../../images/header-bg.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}} className="text-warning">Your New Webpage <br/> Starts Here</h1>
                <p className="text-white" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            </div>
        </main>
    );
};

export default HeaderMain;
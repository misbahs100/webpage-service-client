import React from 'react';
import headerBg from '../../../images/header-bg.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-5 col-sm-10 col-10 offset-md-1 offset-1">
                <h1 style={{color: '#3A4256'}} className="text-warning">Your New Webpage <br/> Starts Here</h1>
                <p className="text-white" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            </div>
            
        </main>
    );
};

export default HeaderMain;
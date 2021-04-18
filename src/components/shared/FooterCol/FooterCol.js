import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-warning">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index} className="footer-list"><Link to={item.link} className="footer-link"><FontAwesomeIcon style={{ color: '#cccccc', fontSize: '12px' }} icon={faGreaterThan} /> {item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;
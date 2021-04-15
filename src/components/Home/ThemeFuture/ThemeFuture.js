import React from 'react';
import './ThemeFuture.css';
import settings from '../../../images/settings.png';
import update from '../../../images/update.png';
import font from '../../../images/font.png';
import effects from '../../../images/effects.png';
import layout from '../../../images/layout.png';
import document from '../../../images/document.png';
import fast from '../../../images/fast.png';
import code from '../../../images/coding.png';
import ThemeFutureDetail from '../ThemeFutureDetail/ThemeFutureDetail';

const themeFutureData = [
    { icon: settings, text: 'Powefull Admin Interface' },
    { icon: update, text: 'Regular Updates' },
    { icon: font, text: 'Google Fonts' },
    { icon: effects, text: 'Amazing Parallax Effects' },
    { icon: layout, text: 'Responsive Layouts' },
    { icon: document, text: 'Well Documented' },
    { icon: fast, text: 'Super Fast' },
    { icon: code, text: 'No Coding Required' }
]

const ThemeFuture = () => {
    return (
        <section className="theme-container mt-5 p-5">
            <div className="text-center mb-5">
                <h4 className="text-warning text-uppercase">For easy creation</h4>
                <h1 className="text-secondary text-uppercase">Theme Futures</h1>
            </div>

            <div className="">
                <div className="row mb-5">
                    {
                        themeFutureData.map( theme => <ThemeFutureDetail theme={theme}></ThemeFutureDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default ThemeFuture;
import React from 'react';
import "./style.scss";

const OfferItem = ({ title, desc, direction, icon }) => {
    return (
        <div className={`offer-item ${direction}`}>
            <div className="icon">{icon}</div>
            <div className="content">
                <h3 className={direction}>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default OfferItem;
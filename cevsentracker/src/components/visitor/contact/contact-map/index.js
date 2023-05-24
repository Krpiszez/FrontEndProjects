import React from 'react'
import { config } from '../../../../config';
import "./style.scss";

const ContactMap = () => {
    const { projectDetails: { name, contact: { mapEmbedUrl } } } = config;

    return (
        <div className='contact-map'>
            <iframe
                title={name}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    )
}

export default ContactMap
import React from 'react';
import "./style.scss";
import { config } from '../../../../config';
import { Headphones, PhonelinkRing, LocationOn, Email } from "@mui/icons-material";
const ContactInfo = () => {
    const { projectDetails: { phone, email, mapUrl, phone2, address } } = config;
    return (
        <ul className='contact-info'>
            <li className='icons'>
                <a href={`tel:${phone}`} target="_blank" rel="noreferrer noopener">
                    <Headphones /> {phone}
                </a>
            </li>
            <li className='icons'>
                <a href={`tel:${phone2}`} target="_blank" rel="noreferrer noopener">
                    <PhonelinkRing /> {phone2}
                </a>
            </li>
            <li className='icons'>
                <a href={mapUrl} target="_blank" rel="noreferrer noopener">
                    <LocationOn /> {address}
                </a>
            </li>
            <li className='icons'>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener">
                    <Email /> {email}
                </a>
            </li>
        </ul>
    )
}
export default ContactInfo
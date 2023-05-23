import React from 'react'
import { config } from '../../../config';
import { HeadsetMic, Drafts, Instagram, Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
const Topbar = () => {
    const { projectDetails: { phone, email, socialMedia: { twitter, instagram, facebook, linkedin, youtube } } } = config
    return (
        <div className='topbar'>
            <ul className="contact-bar">
                <li>
                    <a href={`tel:${phone}`}>
                        <HeadsetMic /> <span className='d-none d-md-inline'>{phone}</span>
                    </a>
                </li>
                <li>
                    <a href={`mailto:${email}`}>
                        <Drafts /> <span className='d-none d-md-inline'>{email}</span>
                    </a>
                </li>
            </ul>
            <ul className="social-bar">
                <li className='d-none d-sm-inline'>
                    <a href={instagram} target='_blank' rel='noreferrer noopener'>
                        <Instagram />
                    </a>
                </li>
                <li className='d-none d-sm-inline'>
                    <a href={facebook} target='_blank' rel='noreferrer noopener'>
                        <Facebook />
                    </a>
                </li>
                <li className='d-none d-sm-inline' >
                    <a href={linkedin} target='_blank' rel='noreferrer noopener'>
                        <LinkedIn />
                    </a>
                </li>
                <li className='d-none d-sm-inline'>
                    <a href={twitter} target='_blank' rel='noreferrer noopener'>
                        <Twitter />
                    </a>
                </li>
                <li className='d-none d-sm-inline'>
                    <a href={youtube} target='_blank' rel='noreferrer noopener'>
                        <YouTube />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Topbar;
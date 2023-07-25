import React from 'react';

interface Props {
    logo?: string;
    title?: string;
    description?: string;
    links?: string[];
    background?: string;
}

function ContactBanner({
    logo = "/logo.png",
    title,
    description,
    links = ['Home', 'About', 'Contact'],
    background = "linear-gradient(124deg, rgba(88,140,235,1) 0%, rgba(186,70,204,1) 100%)"
}: Props) {
    return (
        <div className='contact-banner' style={{ background: background }}>
            <div className='contact-banner__logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='contact-banner__title'>
                <h1>{title}</h1>
            </div>
            <div className='contact-banner__description'>
                <h1>{description}</h1>
            </div>

            <div className='contact-banner__links'>
                {links?.map((link) => (
                    <a href="#" key={link} className='contact-banner__links-link'>
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactBanner;

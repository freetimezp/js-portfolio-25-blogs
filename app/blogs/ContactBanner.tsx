"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
    const contactBannerVariants = {
        hidden: {
            opacity: 0,
            scaleY: 0.3,
            filter: "blur(10px)",
            x: -300
        },
        visible: {
            opacity: 1,
            scaleY: 1,
            filter: "blur(0px)",
            x: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.5
            }
        }
    }

    return (
        <motion.div
            className='contact-banner'
            style={{ background: background }}
            variants={contactBannerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
        >
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
        </motion.div>
    );
};

export default ContactBanner;

"use client";
import React from 'react';
import { motion } from 'framer-motion';

import Button from '../Button/Button';
import { bannerVariants } from '@/app/utils/animation';
import { useGlobalContext } from '@/app/utils/globalContext';

interface Props {
    text: string;
    button?: boolean;
    background?: string;
    shadow?: boolean;
    color?: string;
    subtitle?: string;
}

function Banner({
    text,
    button,
    background = "linear-gradient(124deg, rgba(88,140,235,1) 0%, rgba(186,70,204,1) 100%)",
    shadow,
    color,
    subtitle
}: Props) {
    const { handleToggle } = useGlobalContext();

    return (
        <motion.div
            className='banner'
            style={{
                background: background,
                boxShadow: shadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"
            }}
            variants={bannerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
        >
            <p className='banner__text' style={{ color: color }}>
                {text}
            </p>
            <p className='banner__subtitle'>
                {subtitle}
            </p>
            {button && (
                <Button
                    text="Contact Us"
                    bg="white"
                    padding="1.2rem 2rem"
                    hover="true"
                    onClick={handleToggle}
                />
            )}
        </motion.div>
    );
};

export default Banner;

"use client";
import React from 'react';
import { motion } from 'framer-motion';

import Button from '../Button/Button';
import { useGlobalContext } from '@/app/layout';

const Menu = () => {
    const { toggle, handleToggle } = useGlobalContext();

    const menuVariants = {
        visible: {
            x: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            display: "block",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        },
        hidden: {
            x: 500,
            scaleX: 0.5,
            scaleY: 0.2,
            transition: {
                type: "ease",
                stiffness: 200,
                damping: 30
            },
            transitionEnd: {
                display: "none"
            }
        }
    }

    return (
        <motion.div
            className='menu'
            variants={menuVariants}
            initial="hidden"
            animate={toggle ? 'visible' : 'hidden'}
        >
            <div className="buttons">
                <Button
                    text="Close"
                    bg="white"
                    modifier='red'
                    hover="true"
                    onClick={handleToggle}
                />
                <Button
                    text="Send Email"
                    bg="white"
                    modifier='purple'
                    hover="true"
                    padding='0.8rem 2.5rem'
                    onClick={() => {
                        window.location.href = "mailto:email@gmail.com"
                    }}
                />
                <Button
                    text="Photo Gallery"
                    bg="#ff3860"
                    modifier='white'
                    hover="true"
                    padding='0.8rem 2.5rem'
                    onClick={() => {
                        window.location.href = "mailto:email@gmail.com"
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Menu;

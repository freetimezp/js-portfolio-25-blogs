"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import { Portfolio } from '@/app/utils/portfolios';

import { motion } from 'framer-motion';

function PortfolioItem({ name, image, categories }: Portfolio) {
    const [isHover, setIsHover] = useState(false);

    const hoverVariants = {
        hidden: {
            y: -100,
            scaleX: 0.5,
            opacity: 0
        },
        visible: {
            y: 0,
            scaleX: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    };

    const hoverVariants2 = {
        hidden: {
            y: 100,
            scaleX: 0.1,
            opacity: 0
        },
        visible: {
            y: 0,
            scaleX: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 100
            }
        }
    };

    const handleHoverStart = () => {
        setIsHover(true);
    }

    const handleHoverEnd = () => {
        setIsHover(false);
    }

    return (
        <motion.div
            className='portfolio'
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
        >
            <Image
                src={image}
                alt="name"
            />

            <div className='hover'>
                <motion.div
                    className='hover__categories'
                    initial="hidden"
                    variants={hoverVariants}
                    animate={isHover ? "visible" : "hidden"}
                >
                    {categories?.map((category) => (
                        <span key={category}>
                            {category}
                        </span>
                    ))}
                </motion.div>
                <motion.p
                    className='hover__title'
                    initial="hidden"
                    variants={hoverVariants2}
                    animate={isHover ? "visible" : "hidden"}
                >
                    {name}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default PortfolioItem;

"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import { Portfolio } from '@/app/utils/portfolios';
import { gridItemsVariants, hoverVariants, hoverVariants2 } from '@/app/utils/animation';

import { motion } from 'framer-motion';

function PortfolioItem({ name, image, categories, onClick }: Portfolio) {
    const [isHover, setIsHover] = useState(false);

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
            onClick={onClick}
            variants={gridItemsVariants}
        >
            <Image src={image} alt="name" />

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

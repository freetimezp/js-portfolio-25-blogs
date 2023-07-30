"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { portfolios } from '@/app/utils/portfolios';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { gridVariants } from '@/app/utils/animation';

function Portfolios() {
    const router = useRouter();

    return (
        <motion.div
            className="portfolios"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
        >
            {portfolios?.map((portfolio) => (
                <PortfolioItem
                    key={portfolio.id}
                    name={portfolio.name}
                    image={portfolio.image}
                    url={portfolio.url}
                    categories={portfolio.categories}
                    onClick={() => {
                        router.push(`/portfolio/${portfolio.url}`)
                    }}
                />
            ))}
        </motion.div>
    );
};

export default Portfolios;

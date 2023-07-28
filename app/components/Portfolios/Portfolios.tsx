"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

import { portfolios } from '@/app/utils/portfolios';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolios() {
    const router = useRouter();

    return (
        <div className="portfolios">
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
        </div>
    );
};

export default Portfolios;

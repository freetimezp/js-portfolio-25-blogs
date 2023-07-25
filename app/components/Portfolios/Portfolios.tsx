"use client";
import React from 'react';

import { portfolios } from '@/app/utils/portfolios';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolios() {
    return (
        <div className="portfolios">
            {portfolios?.map((portfolio) => (
                <PortfolioItem
                    key={portfolio.id}
                    name={portfolio.name}
                    image={portfolio.image}
                    url={portfolio.url}
                    categories={portfolio.categories}
                />
            ))}
        </div>
    );
};

export default Portfolios;

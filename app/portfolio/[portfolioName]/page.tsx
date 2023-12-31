"use client";
import React from 'react';

import { portfolios } from '@/app/utils/portfolios';
import Link from 'next/link';
import Image from 'next/image';

interface Params {
    params: {
        portfolioName: string;
    };
}

function page({ params }: Params) {
    const portfolio = portfolios.find((portfolio) => {
        return portfolio.url === params.portfolioName;
    });

    const { name, image, categories, content, features, problem, solution, links } = portfolio || {};
    const { description, image1, image2, image3, image4, image5 } = content || {};

    return (
        <section className='project'>
            <div className='project__header'>
                <img src={image?.src} alt="project" className='bg-image' />
                <div className="overlay"></div>
                <div className="banner">
                    <div className="banner__header">
                        <h1 className="banner__title">
                            {name}
                        </h1>
                        <div className="banner__categories">
                            {categories?.map((category: any, i: number) => (
                                <span key={i} className='banner__category'>
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="banner__text">
                        {description}
                    </p>
                </div>
            </div>
            <div className="project__content">
                <div className="project__content__intro">
                    {features && (
                        <ul className="features">
                            <h4>Features</h4>
                            {features?.map((feature: any, i: number) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    )}

                    {solution && (
                        <div className='solution'>
                            {problem && (
                                <div className='problem' style={{ marginBottom: "2rem" }}>
                                    <h4>Popular</h4>
                                    <p>{problem}</p>
                                </div>
                            )}

                            <h4>Solution</h4>
                            <p>{solution}</p>
                        </div>
                    )}

                    {links && (
                        <div className='links'>
                            <h4>Links</h4>
                            {links.github && (
                                <Link href={links.github}>Github</Link>
                            )}
                            {links.website && (
                                <Link href={links.website}>www,google.com</Link>
                            )}
                        </div>
                    )}
                </div>

                <div className="horizontal-images u-pad-2">
                    {image2 && <Image src={image2} alt="portfolio" />}
                    {image3 && <Image src={image3} alt="portfolio" />}
                </div>
                <div className="horizontal-images--fullscreen">
                    {image1 && <Image src={image1} alt="portfolio" />}
                    {image4 && <Image src={image4} alt="portfolio" />}
                </div>
            </div>
        </section>
    );
};

export default page;

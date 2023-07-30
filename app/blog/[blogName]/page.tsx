import React from 'react';

import { blogs } from '@/app/utils/blogs';
import Image from 'next/image';
import { idText } from 'typescript';

interface Params {
    params: {
        blogName: string;
    }
}

function page({ params: { blogName } }: Params) {
    const blog = blogs.find((blog) => blog.title?.replace(/:/g, "").split(" ").join("-").toLocaleLowerCase() === blogName);
    //console.log(blog);
    const { title, introduction, image, outro, list, featuredPortfolio }: any = blog;
    const { image: introImage } = featuredPortfolio;

    if (!blog) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <section className='blog-page'>
            <div className="blog-page__header">
                <h1 className='blog-page__title'>{title}</h1>
                <div className='blog-page__header__profile'>
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        className='logo'
                        width={45}
                        height={45}
                        style={{ objectFit: 'contain' }}
                    />
                    <p className="blog-page__header__date">
                        <span>Web Developer Blog</span>
                        <span>30.07.2023</span>
                    </p>
                </div>
                <div className='blog-page__header__image'>
                    <Image src={image} alt={title} />
                </div>
            </div>

            <div className='blog-page__content'>
                <h3 className='blog-page__content__introduction'>
                    {introduction}
                </h3>

                {introImage && (
                    <Image
                        src={introImage}
                        alt="intro"
                        className='blog-page__content__intro-image'
                    />
                )}
                <ol className='blog-page__content__list'>
                    {list?.map((item: any, i: number) => (
                        <li key={i}>
                            <p>
                                {item.title}
                            </p>
                            <p>
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ol>

                <p className='blog-page__content__outro'>
                    {outro}
                </p>
            </div>
        </section>
    );
};

export default page;

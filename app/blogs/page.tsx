"use client";
import React from 'react';

import Banner from '../components/Banners/Banner';
import ContactBanner from './ContactBanner';

import { blogs } from '../utils/blogs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BlogsPage = () => {
    const router = useRouter();

    return (
        <div className='u-pad-2'>
            <div className="blogs">
                {blogs?.map((blog, i: number) => (
                    <div
                        className='blog'
                        key={i}
                        onClick={() => {
                            router.push(`/blog/${blog.title?.replace(/:/g, "").split(" ").join("-").toLocaleLowerCase()}`);
                        }}
                    >
                        <div className='blog__image'>
                            {blog.image && <Image src={blog.image} alt="blog" />}
                        </div>
                        <h4 className="blog__title">
                            {blog?.title}
                        </h4>
                    </div>
                ))}
            </div>
            <Banner
                color="white"
                button
                text="Interested in working with Us? Send me email.."
            />
            <ContactBanner />
        </div>
    );
};

export default BlogsPage;

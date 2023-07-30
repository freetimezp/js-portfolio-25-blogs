"use client";
import React from 'react';
import { motion } from 'framer-motion';

import Banner from '../components/Banners/Banner';
import ContactBanner from './ContactBanner';

import { blogs } from '../utils/blogs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { gridItemsVariants, gridVariants } from '../utils/animation';

const BlogsPage = () => {
    const router = useRouter();

    return (
        <div className='u-pad-2'>
            <motion.div
                className="blogs"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
            >
                {blogs?.map((blog, i: number) => (
                    <motion.div
                        className='blog'
                        key={i}
                        onClick={() => {
                            router.push(`/blog/${blog.title?.replace(/:/g, "").split(" ").join("-").toLocaleLowerCase()}`);
                        }}
                        variants={gridItemsVariants}
                    >
                        <div className='blog__image'>
                            {blog.image && <Image src={blog.image} alt="blog" />}
                        </div>
                        <h4 className="blog__title">
                            {blog?.title}
                        </h4>
                    </motion.div>
                ))}
            </motion.div>
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

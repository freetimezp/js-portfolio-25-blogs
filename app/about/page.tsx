"use client";
import React, { useRef } from 'react';
import Link from 'next/link';

import { motion, useTransform, useScroll } from 'framer-motion';
import { BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Abril_Fatface } from 'next/font/google';

import Banner from '../components/Banners/Banner';
import ContactBanner from '../blogs/ContactBanner';
import StrategyItem from '../components/StrategyItem/StrategyItem';
import { bannerVariants, titleVariants } from '../utils/animation';

const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: ["400"]
});

const AboutPage = () => {
    const header = useRef(null);

    const gradients = [
        "linear-gradient(140deg, rgba(207, 47, 152), rgba(106, 61, 236))",
        "linear-gradient(140deg, rgba(255, 207, 115), rgba(255, 122, 47))",
        "linear-gradient(140deg, rgba(89, 212, 153), rgba(160, 135, 45))",
        "linear-gradient(140deg, rgba(76, 200, 200), rgba(32, 32, 51))"
    ];

    const randomGradient = () => {
        return gradients[Math.floor(Math.random() * gradients.length)];
    }

    const scrollYProgress = useScroll({
        target: header,
        offset: ["start end", "end start"]
    }).scrollYProgress;

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]);
    const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]);
    const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -1200]);
    const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

    return (
        <div className='u-pad-2'>
            <motion.div
                className="about-header"
                style={{ background: randomGradient() }}
                ref={header}
            >
                <motion.img
                    src="/images/about.jpg"
                    alt="about"
                    className="about-header__image"
                    variants={bannerVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    style={{
                        scale: scale,
                        translateX: "-50%",
                        x: x,
                        y: y,
                        opacity: opacity
                    }}
                />
                <motion.div
                    className="about-header__content"
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h1 className={`about-header__title ${abril.className}`}>Freetime</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, reiciendis officia? Voluptate dolore maiores, ratione
                        saepe ullam illo consequatur perspiciatis!
                    </p>
                    <div className='icons'>
                        <Link href="https://www.linkedin.com/">
                            <BsLinkedin />
                        </Link>
                        <Link href="https://www.github.com/">
                            <BsGithub />
                        </Link>
                        <Link href="https://www.youtube.com/">
                            <BsYoutube />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
            <div className="about-content">
                <Banner
                    text="Interested in working with me on your portfolio? Send me email.."
                    color="white"
                    button
                />

                <section className="strategy-section">
                    <motion.h2
                        className="strategy-section__title"
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Memories
                    </motion.h2>
                    <ol className="strategy-section__list">
                        <StrategyItem
                            number={"01"}
                            title="Photography"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                        <StrategyItem
                            number={"02"}
                            title="Video"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                        <StrategyItem
                            number={"03"}
                            title="Discover"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                    </ol>

                    <motion.h2
                        className="strategy-section__title"
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                    >                        Creative
                    </motion.h2>
                    <ol className="strategy-section__list">
                        <StrategyItem
                            number={"04"}
                            title="Travel"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                        <StrategyItem
                            number={"05"}
                            title="Dreams"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                        <StrategyItem
                            number={"06"}
                            title="Wishes"
                            description='We start searching your wishes.. Then we create a plan! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'
                        />
                    </ol>
                </section>

                <ContactBanner />
            </div>
        </div>
    );
};

export default AboutPage;

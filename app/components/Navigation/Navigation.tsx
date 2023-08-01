"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Logo from '../../../public/logo.png';
import menuItems from '@/app/utils/menuItems';

import Button from '../Button/Button';
import { navVariants } from '@/app/utils/animation';
import { useGlobalContext } from '@/app/utils/globalContext';

const Navigation = () => {
    const [activeNav, setActiveNav] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0);
    const { handleToggle } = useGlobalContext();

    return (
        <motion.div
            className='navigation'
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <ul className='nav-items'>
                <Image
                    src={Logo}
                    alt="logo"
                    width={45}
                    height={45}
                    style={{
                        objectFit: "contain",
                        backgroundColor: "#f2f6ff",
                        borderRadius: "50%",
                        padding: "0.3rem"
                    }}
                />

                {menuItems?.map((item, index: number) => (
                    <li
                        key={item.id}
                        className={`nav-items__item ${activeMenu === index && 'active-menu'}`}
                        onClick={() => {
                            setActiveMenu(index)
                        }}
                    >
                        <Link href={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <Button
                text="Contact"
                bg="#a855f7"
                modifier="white"
                borderRadius='60px'
                padding='1.2rem 2rem'
                hover="true"
                onClick={handleToggle}
            />
        </motion.div>
    );
};

export default Navigation;

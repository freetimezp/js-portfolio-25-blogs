"use client";
import React from 'react';
import Image from 'next/image';

import Logo from '../../../public/logo.png';
import menuItems from '@/app/utils/menuItems';

import Button from '../Button/Button';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className='navigation'>
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

                {menuItems?.map((item) => (
                    <li key={item.id} className="nav-items__item">
                        <Link href={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <Button />
        </div>
    );
};

export default Navigation;

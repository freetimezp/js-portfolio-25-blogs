import { StaticImageData } from "next/image";

import portfolio2 from '../../public/images/photo-2.jpg';
import portfolio3 from '../../public/images/photo-3.jpg';
import portfolio4 from '../../public/images/photo-4.jpg';
import portfolio5 from '../../public/images/photo-5.jpg';
import portfolio6 from '../../public/images/photo-6.jpg';
import portfolio7 from '../../public/images/photo-7.jpg';
import portfolio8 from '../../public/images/photo-8.jpg';

import snippet1 from '../../public/images/snippet-1.jpg';
import snippet2 from '../../public/images/snippet-2.jpg';
import snippet3 from '../../public/images/snippet-3.jpg';
import snippet4 from '../../public/images/snippet-4.jpg';
import snippet5 from '../../public/images/snippet-5.jpg';
import snippet6 from '../../public/images/snippet-6.jpg';
import snippet7 from '../../public/images/snippet-7.jpg';
import snippet8 from '../../public/images/snippet-8.jpg';


export interface Portfolio {
    id?: number;
    name?: string;
    categories: string[];
    image: StaticImageData;
    url?: string;
    features?: string[];
    problem?: string;
    solution?: string;
    links?: {
        website?: string;
        github?: string;
    };
    content?: {
        title?: string;
        description?: string;
        description2?: string;
        description3?: string;
        description4?: string;
        description5?: string;
        image1?: StaticImageData;
        image2?: StaticImageData;
        image3?: StaticImageData;
        image4?: StaticImageData;
        image5?: StaticImageData;
    }
}

export const portfolios: Portfolio[] = [
    {
        id: 1,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet1,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 2,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet2,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 3,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet3,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 4,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet4,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 5,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet5,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 6,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet6,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 7,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet7,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    },
    {
        id: 8,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet8,
        url: "photo-images",
        features: [
            "Nature",
            "Cats",
            "Dogs",
            "Rivers",
            "Beach",
            "Sand",
            "Air",
            "People",
            "Happy Moments",
            "Weddings",
            "Holidays",
            "Party",
            "Foods",
            "And more..."
        ],
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: snippet1,
            image2: snippet1,
            image3: snippet1,
            image4: snippet1,
            image5: snippet1,

        }
    }
];


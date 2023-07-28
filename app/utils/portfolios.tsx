import { StaticImageData } from "next/image";

import photo1 from '../../public/images/photo-1.jpg';
import photo2 from '../../public/images/photo-2.jpg';
import photo3 from '../../public/images/photo-3.jpg';
import photo4 from '../../public/images/photo-4.jpg';
import photo5 from '../../public/images/photo-5.jpg';

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
    };
    onClick?: () => void;
}

export const portfolios: Portfolio[] = [
    {
        id: 1,
        name: "Photography",
        categories: ["Photo", "Video"],
        image: snippet1,
        url: "photography",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,
        }
    },
    {
        id: 2,
        name: "Family",
        categories: ["Photo", "Video"],
        image: snippet2,
        url: "family",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 3,
        name: "Travel",
        categories: ["Photo", "Video"],
        image: snippet3,
        url: "travel",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 4,
        name: "Animals",
        categories: ["Photo", "Video"],
        image: snippet4,
        url: "animals",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 5,
        name: "Holidays",
        categories: ["Photo", "Video"],
        image: snippet5,
        url: "holidays",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 6,
        name: "Nature",
        categories: ["Photo", "Video"],
        image: snippet6,
        url: "nature",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 7,
        name: "Funny Moments",
        categories: ["Photo", "Video"],
        image: snippet7,
        url: "funny_moments",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    },
    {
        id: 8,
        name: "Beautiful Places",
        categories: ["Photo", "Video"],
        image: snippet8,
        url: "beautiful_places",
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
        problem: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        solution: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        links: {
            website: "https://www.google.com",
            github: "https://github.com/freetimezp"
        },
        content: {
            title: "Photo Blogs",
            description: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            image1: photo1,
            image2: photo2,
            image3: photo3,
            image4: photo4,
            image5: photo5,

        }
    }
];


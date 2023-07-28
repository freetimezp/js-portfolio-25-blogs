import React from 'react';
import Banner from '../components/Banners/Banner';
import ContactBanner from '../blogs/ContactBanner';
import StrategyItem from '../components/StrategyItem/StrategyItem';

const AboutPage = () => {
    const gradients = [
        "linear-gradient(140deg, rgba(207, 47, 152), rgba(106, 61, 236))",
        "linear-gradient(140deg, rgba(255, 207, 115), rgba(255, 122, 47))",
        "linear-gradient(140deg, rgba(89, 212, 153), rgba(160, 135, 45))",
        "linear-gradient(140deg, rgba(76, 200, 200), rgba(32, 32, 51))"
    ];

    const randomGradient = () => {
        return gradients[Math.floor(Math.random() * gradients.length)];
    }

    return (
        <div className='u-pad-2'>
            <div className="about-header" style={{ background: randomGradient() }}>
                <img src="/images/about.jpg" alt="about" className="about-header__image" />
            </div>
            <div className="about-content">
                <Banner
                    text="Interested in working with me on your portfolio? Send me email.."
                    color="white"
                    button
                />

                <section className="strategy-section">
                    <h2 className="strategy-section__title">Memories</h2>
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

                    <h2 className="strategy-section__title">Creative</h2>
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

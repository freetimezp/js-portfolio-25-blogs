"use client";
import React from "react";
import { motion } from "framer-motion";

import Portfolios from "./components/Portfolios/Portfolios";
import Banner from "./components/Banners/Banner";
import PortfolioItem from "./components/PortfolioItem/PortfolioItem";

import { portfolios } from "./utils/portfolios";
import ContactBanner from "./blogs/ContactBanner";

export default function Home() {
  const portfolioVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      filter: "blur(10px)",
      x: -300
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5
      }
    }
  }

  return (
    <main className="u-pad-2">
      <Portfolios />
      <Banner
        color="white"
        text="Interested in contact with Me? Send me email.."
        subtitle="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        button
      />

      <motion.div
        className="mini-portfolios"
        variants={portfolioVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolios?.slice(-4).map((portfolio) => (
          <PortfolioItem
            key={portfolio.id}
            name={portfolio.name}
            image={portfolio.image}
            url={portfolio.url}
            categories={portfolio.categories}
          />
        ))}
      </motion.div>

      <div className="mini-banner">
        <Banner
          background="white"
          shadow
          color="#6366f1"
          text="Let's take Your Happiness Moment in life on My Camera.."
        />
      </div>

      <ContactBanner />

    </main>
  );
}

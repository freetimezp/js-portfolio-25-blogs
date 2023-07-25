"use client";
import React from "react";

import Portfolios from "./components/Portfolios/Portfolios";
import Banner from "./components/Banners/Banner";
import PortfolioItem from "./components/PortfolioItem/PortfolioItem";

import { portfolios } from "./utils/portfolios";

export default function Home() {
  return (
    <main className="u-pad-2">
      <Portfolios />
      <Banner
        color="white"
        text="Interested in contact with Me? Send me email.."
        subtitle="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        button
      />

      <div className="mini-portfolios">
        {portfolios?.slice(-4).map((portfolio) => (
          <PortfolioItem
            key={portfolio.id}
            name={portfolio.name}
            image={portfolio.image}
            url={portfolio.url}
            categories={portfolio.categories}
          />
        ))}
      </div>

      <div className="mini-banner">
        <Banner
          background="white"
          shadow
          color="#6366f1"
          text="Let's take Your Happiness Moment in life on My Camera.."
        />
      </div>

    </main>
  );
}

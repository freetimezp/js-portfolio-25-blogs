"use client";
import React from "react";

import Portfolios from "./components/Portfolios/Portfolios";
import Banner from "./components/Banners/Banner";

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
    </main>
  );
}

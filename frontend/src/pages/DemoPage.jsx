import React from "react";
import Header from "../components/Header";
import SocialProofBadges from "../components/SocialProofBadges";
import { useSeo } from "../hooks/useSeo";
import seo from "../seo/pageMeta.json";

const DemoPage = () => {
  useSeo(seo.pages.demo);
  return (
    <div className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)] min-h-screen">
      <Header />
      <div className="h-[70px]" />
      
      <div className="py-20 text-center">
        <h1 className="font-display text-[48px] text-[var(--nb-ivory)] mb-4">
          Demo Social Proof Badges
        </h1>
        <p className="text-[var(--nb-ivory-dim)] mb-2">Due varianti possibili ⬇️</p>
      </div>

      <SocialProofBadges />
    </div>
  );
};

export default DemoPage;

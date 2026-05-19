import React from "react";
import { useSeo } from "../hooks/useSeo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import SocialProof from "../components/SocialProof";
import Method from "../components/Method";
import Qualifier from "../components/Qualifier";
import VideoSection from "../components/VideoSection";
import FreeResource from "../components/FreeResource";
import MediaSection from "../components/MediaSection";
import PodcastSection from "../components/PodcastSection";
import Journal from "../components/Journal";
import Faq from "../components/Faq";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

const HomePage = () => {
  useSeo({
    title: "Nicobenz — Beauty Social Coach per Parrucchieri | Marketing Digitale per Saloni",
    description: "Il primo beauty social coach italiano. Trasforma il tuo salone in un brand che le persone scelgono, seguono e ricordano.",
    canonical: "https://www.nicobenz.it/",
    ogType: "website",
  });

  return (
    <main className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)]">
      <Header />
      <Hero />
      <Problem />
      <SocialProof />
      <Method />
      <Qualifier />
      <VideoSection />
      <FreeResource />
      <MediaSection />
      <PodcastSection />
      <Journal />
      <Faq />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default HomePage;

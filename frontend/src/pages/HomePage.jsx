import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import SocialProof from "../components/SocialProof";
import Method from "../components/Method";
import Qualifier from "../components/Qualifier";
import Testimonials from "../components/Testimonials";
import FreeResource from "../components/FreeResource";
import MediaSection from "../components/MediaSection";
import PodcastSection from "../components/PodcastSection";
import Journal from "../components/Journal";
import Faq from "../components/Faq";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const HomePage = () => {
  return (
    <main className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)]">
      <Header />
      <Hero />
      <Problem />
      <SocialProof />
      <Method />
      <Qualifier />
      <Testimonials />
      <FreeResource />
      <MediaSection />
      <PodcastSection />
      <Journal />
      <Faq />
      <BookingCTA />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default HomePage;

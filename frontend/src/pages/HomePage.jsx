import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import SocialProof from "../components/SocialProof";
import Method from "../components/Method";
import Qualifier from "../components/Qualifier";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import MediaSection from "../components/MediaSection";
import Journal from "../components/Journal";
import Faq from "../components/Faq";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="relative bg-[var(--nb-bg)] text-[var(--nb-ivory)]">
      <Header />
      <Hero />
      <Problem />
      <SocialProof />
      <Method />
      <Qualifier />
      <CaseStudies />
      <Testimonials />
      <MediaSection />
      <Journal />
      <Faq />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default HomePage;

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages/HomePage";
import VideoGiornoPage from "./pages/VideoGiornoPage";
import BlogListPage from "./pages/BlogListPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ThankYouPage from "./pages/ThankYouPage";
import PrenotaPage from "./pages/PrenotaPage";
import DemoPage from "./pages/DemoPage";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import VideoGiornoPopup from "./components/VideoGiornoPopup";
import QualifierMockup from "./components/QualifierMockup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/un-video-al-giorno" element={<VideoGiornoPage />} />
          <Route path="/grazie-iscrizione" element={<ThankYouPage />} />
          <Route path="/prenota" element={<PrenotaPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/mockup-qualifier" element={<div className="bg-[var(--nb-bg)] min-h-screen"><QualifierMockup /></div>} />
        </Routes>
        <ScrollToTop />
        <WhatsAppButton />
        <VideoGiornoPopup />
      </BrowserRouter>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;

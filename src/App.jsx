import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import ReviewsSection from './components/ReviewsSection';
import FAQ from './components/FAQ';
import QuickContactBanner from './components/QuickContactBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white selection:bg-[#E51920] selection:text-white flex flex-col">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section with Tow Truck Showcase & Direct CTAs */}
        <Hero />

        {/* Services Section with 6 Vehicle Category Cards */}
        <Services />

        {/* Regional Coverage Section with Interactive Radar Map */}
        <ServiceArea />

        {/* Operational Differentials & Guarantees */}
        <WhyChooseUs />

        {/* About Company & Mission */}
        <About />

        {/* Reputation, Ratings & Honest Customer Feedback */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Prominent Callout Banner matching Mockup ("PRECISOU? É SÓ CHAMAR! GUINCHO BARBAROTI") */}
        <QuickContactBanner />

        {/* Direct Contact Central */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <MobileQuickBar />
    </div>
  );
}

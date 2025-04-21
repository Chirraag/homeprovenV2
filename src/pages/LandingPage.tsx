import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import UseCasesSection from '../components/UseCasesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Home Proven - AI Voice Agents for Contractors | Never Miss Another Lead";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      "Home Proven's AI agents ensure contractors never miss leads. 24/7 availability, human-like conversations, and lower costs than traditional services. Start today."
    );
    
    // Set Open Graph tags
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="og:${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', `og:${property}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    setOgTag('title', 'Home Proven - AI Voice Agents for Contractors');
    setOgTag('description', "Never miss another lead with 24/7 AI voice agents that sound human and cost less.");
    setOgTag('type', 'website');
    setOgTag('url', window.location.href);
    setOgTag('image', 'https://homeproven.com/wp-content/uploads/2025/04/Home-Proven-logo-1.webp');
    
    // Set viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    // Reset scroll position to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box 
      sx={{ 
        overflow: 'hidden',
        backgroundColor: '#faf9f6'
      }}
    >
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </Box>
  );
};

export default LandingPage;
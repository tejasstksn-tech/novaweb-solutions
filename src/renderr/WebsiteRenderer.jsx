import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import GallerySection from "../sections/GallerySection";
import PricingSection from "../sections/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";

function WebsiteRenderer({ config }) {
  return (
    <div className="bg-white">

      {config.sections.includes("hero") && (
        <HeroSection config={config} />
      )}

      {config.sections.includes("about") && (
        <AboutSection config={config} />
      )}

      {config.sections.includes("services") && (
        <ServicesSection config={config} />
      )}

      {config.sections.includes("gallery") && (
        <GallerySection config={config} />
      )}

      {config.sections.includes("pricing") && (
        <PricingSection config={config} />
      )}

      {config.sections.includes("testimonials") && (
        <TestimonialsSection config={config} />
      )}

      {config.sections.includes("contact") && (
        <ContactSection config={config} />
      )}

      {config.sections.includes("footer") && (
        <FooterSection config={config} />
      )}

    </div>
  );
}

export default WebsiteRenderer;
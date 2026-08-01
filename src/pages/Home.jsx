import { useState } from "react";
import WebsitePreview from "../components/WebsitePreview";
import FeaturedTemplates from "../components/FeaturedTemplates";
import ServiceSelector from "../components/ServiceSelector";
import RecentProjects from "../components/RecentProjects";
import WhatsAppButton from "../components/WhatsAppButton";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/TrustSection";
import Process from "../components/Process";
import WhyChoose from "../components/WhyChoose";
import InquiryForm from "../components/InquiryForm";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Industries from "../components/Industries";
import AIWebsiteGenerator from "../components/AIWebsiteGenerator";
import GeneratedWebsite from "../components/GeneratedWebsite";

function Home() {
 const [websiteData, setWebsiteData] = useState({
  businessName: "",
  businessDescription: "",

  email: "",
  phone: "",
  city: "",

  theme: "Modern",
  primaryColor: "#2563EB",

  heroTitle: "",
  heroSubtitle: "",

  services: [],

  selectedIndustry: {
    name: "🍽 Restaurant",
    features: [
      "Online Menu",
      "Table Booking",
      "WhatsApp Ordering",
      "Google Maps",
      "QR Menu",
      "Nova AI Assistant",
    ],
  },
});
const [generated, setGenerated] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
     <AIWebsiteGenerator
  websiteData={websiteData}
  setWebsiteData={setWebsiteData}
  setGenerated={setGenerated}
/>
{generated && (
  <GeneratedWebsite websiteData={websiteData} />
)}
      <ServiceSelector />
      <FeaturedTemplates />
      <TrustSection />
      <Testimonials />
      <Services />
<Industries
  selectedIndustry={websiteData.selectedIndustry}
  setSelectedIndustry={(industry) =>
    setWebsiteData((prev) => ({
      ...prev,
      selectedIndustry: industry,
    }))
  }
/>

<WebsitePreview
  selectedIndustry={websiteData.selectedIndustry}
  businessName={websiteData.businessName}
/>
      <WhyChoose />
      <Process />
      <Portfolio />
      <RecentProjects />
      <Pricing />
      <Contact />
      <InquiryForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
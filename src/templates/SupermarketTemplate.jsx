import Hero from "../templateSections/Hero";
import Categories from "../templateSections/Categories";
import Offers from "../templateSections/Offers";
import WhyChoose from "../templateSections/WhyChoose";
import About from "../templateSections/About";
import Testimonials from "../templateSections/Testimonials";
import Contact from "../templateSections/Contact";
import Footer from "../templateSections/Footer";
import Navbar from "../templateSections/Navbar";
import BusinessShowcase from "../templateSections/BusinessShowcase";
import Pricing from "../templateSections/Pricing";
import AIWebsiteCustomizer from "../templateSections/AIWebsiteCustomizer";
import BookConsultation from "../templateSections/BookConsultation";

function SupermarketTemplate({ websiteData }) {
  return (
    <div className="bg-white">
      <Navbar websiteData={websiteData} />

      <Hero websiteData={websiteData} />
      <AIWebsiteCustomizer />
      <BusinessShowcase />

      <Categories websiteData={websiteData} />

      <Offers websiteData={websiteData} />

      <About websiteData={websiteData} />

      <WhyChoose websiteData={websiteData} />

      <Pricing />

      <Testimonials websiteData={websiteData} />

      <BookConsultation />

      <Contact websiteData={websiteData} />

      <Footer websiteData={websiteData} />
    </div>
  );
}

export default SupermarketTemplate;
import SupermarketTemplate from "../templates/SupermarketTemplate";

function GeneratedWebsite({ websiteData }) {
  if (!websiteData) return null;

 return <SupermarketTemplate websiteData={websiteData} />;
}

export default GeneratedWebsite;
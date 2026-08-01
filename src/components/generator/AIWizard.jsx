import { useState } from "react";

import BusinessForm from "./BusinessForm";
import LoadingScreen from "./LoadingScreen";
import WebsitePreview from "./WebsitePreview";

function AIWizard() {

  const [loading, setLoading] = useState(false);

  const [generatedWebsite, setGeneratedWebsite] = useState(null);

  const handleGenerate = (data) => {

    setLoading(true);

    setTimeout(() => {

      setGeneratedWebsite(data);

      setLoading(false);

    }, 3000);

  };

  if (loading) {

    return <LoadingScreen />;

  }

  if (generatedWebsite) {

    return (
  <TemplateRenderer
      website={generatedWebsite}
  />
);

  }

  return (

    <BusinessForm
      onGenerate={handleGenerate}
    />

  );

}

export default AIWizard;
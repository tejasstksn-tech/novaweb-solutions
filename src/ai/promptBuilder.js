import templates from "./templates";

function buildWebsiteConfig(formData) {
  const businessType = formData.businessType.toLowerCase();

  const template =
    templates[businessType] || templates.restaurant;

  return {
    businessName: formData.businessName,
    businessType: formData.businessType,
    description: formData.description,

    theme: template.theme,
    color: template.color,
    sections: template.sections,
  };
}

export default buildWebsiteConfig;
export function generateWebsite(formData) {
  const serviceMap = {
    Restaurant: [
      "Online Table Booking",
      "Food Delivery",
      "Digital Menu",
    ],

    Hospital: [
      "Doctor Appointment",
      "Emergency Care",
      "Medical Services",
    ],

    Gym: [
      "Membership Plans",
      "Personal Training",
      "Fitness Programs",
    ],

    Apartment: [
      "Visitor Management",
      "Maintenance Requests",
      "Society Notices",
    ],

    Supermarket: [
      "Online Grocery",
      "Fast Delivery",
      "Best Discounts",
    ],

    Cafe: [
      "Coffee Menu",
      "Online Orders",
      "Free Wi-Fi",
    ],

    School: [
      "Admissions",
      "Student Portal",
      "Academic Programs",
    ],

    Hotel: [
      "Room Booking",
      "Luxury Stay",
      "24/7 Support",
    ],
  };

 return {
  businessName: formData.businessName,
  businessType: formData.businessType,
  businessDescription: formData.businessDescription,

  email: formData.email,
  phone: formData.phone,
  city: formData.city,

  theme: formData.theme,
  primaryColor: formData.primaryColor,

  heroTitle: `Welcome to ${formData.businessName}`,
  heroSubtitle: formData.description,

  services:
    serviceMap[formData.businessType] || [
      "Professional Services",
      "Customer Support",
      "Quality Solutions",
    ],

  sections: [
    "hero",
    "about",
    "services",
    "contact",
    "footer",
  ],
};
}
import { useState } from "react";

function BusinessForm({ onGenerate }) {
  const [formData, setFormData] = useState({
  businessName: "",
  businessType: "",
  description: "",
  email: "",
  phone: "",
  city: "",
  theme: "Modern",
  primaryColor: "#2563EB",
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
  !formData.businessName.trim() ||
  !formData.businessType ||
  !formData.description.trim() ||
  !formData.email.trim() ||
  !formData.phone.trim() ||
  !formData.city.trim()
) {
  alert("Please fill all fields.");
  return;
}

    onGenerate(formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center mb-8">
          AI Website Generator
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="font-semibold">
              Business Name
            </label>

            <input
              type="text"
              name="businessName"
              placeholder="Nova Restaurant"
              className="w-full mt-2 border rounded-xl p-4"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-semibold">
              Business Type
            </label>

            <select
              name="businessType"
              className="w-full mt-2 border rounded-xl p-4"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="">Select Business</option>

              <option>Restaurant</option>

              <option>Hospital</option>

              <option>Apartment</option>

              <option>Gym</option>

              <option>Supermarket</option>

              <option>Cafe</option>

              <option>School</option>

              <option>Hotel</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">
              Business Description
            </label>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe your business..."
              className="w-full mt-2 border rounded-xl p-4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
  <label className="font-semibold">Business Email</label>

  <input
  type="email"
  name="email"
  autoComplete="email"
  placeholder="hello@business.com"
  className="w-full mt-2 border rounded-xl p-4"
  value={formData.email}
  onChange={handleChange}
/>
</div>
<div>
  <label className="font-semibold">Phone Number</label>

  <input
  type="tel"
  name="phone"
  autoComplete="tel"
  placeholder="+91 9876543210"
  className="w-full mt-2 border rounded-xl p-4"
  value={formData.phone}
  onChange={handleChange}
/>
</div>
<div>
  <label className="font-semibold">City</label>

  <input
    type="text"
    name="city"
    placeholder="Enter your city"
    className="w-full mt-2 border rounded-xl p-4"
    value={formData.city}
    onChange={handleChange}
  />
</div>
<div>
  <label className="font-semibold">Theme Style</label>

  <select
    name="theme"
    className="w-full mt-2 border rounded-xl p-4"
    value={formData.theme}
    onChange={handleChange}
  >
    <option>Modern</option>
    <option>Minimal</option>
    <option>Luxury</option>
    <option>Professional</option>
    <option>Dark</option>
  </select>
</div>
<div>
  <label className="font-semibold">Primary Color</label>

  <input
    type="color"
    name="primaryColor"
    className="w-full mt-2 h-14 border rounded-xl"
    value={formData.primaryColor}
    onChange={handleChange}
  />
</div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold transition"
          >
            🚀 Generate Website
          </button>

        </form>

      </div>
    </section>
  );
}

export default BusinessForm;
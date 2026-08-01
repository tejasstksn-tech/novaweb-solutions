import { useLocation } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function Inquiry() {
  const location = useLocation();
  const data = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    email: "",
    businessName: "",
    city: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "inquiries"), {
        customer: formData,

        businessType: data?.businessType,

        package: data?.package,

        basePrice: data?.basePrice,

        totalPrice: data?.finalPrice,

        selectedFeatures: data?.selectedFeatures || [],

        status: "New Inquiry",

        createdAt: serverTimestamp(),
      });

      alert("Inquiry Submitted Successfully!");

      setFormData({
        fullName: "",
        phone: "",
        whatsapp: "",
        email: "",
        businessName: "",
        city: "",
        requirements: "",
      });

    } catch (error) {
      console.error(error);

      alert("Something went wrong while submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center">
          Request Your Project Quote
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Fill in your details and we'll contact you within 24 hours.
        </p>

        {/* Project Summary */}

        <div className="bg-blue-50 rounded-xl p-6 mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Project Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <p>
              <strong>Business:</strong><br />
              {data?.businessType || "Not Selected"}
            </p>

            <p>
              <strong>Package:</strong><br />
              {data?.package || "Professional"}
            </p>

            <p>
              <strong>Base Price:</strong><br />
              ₹{data?.basePrice?.toLocaleString() || "0"}
            </p>

            <p>
              <strong>Total Price:</strong><br />
              ₹{data?.finalPrice?.toLocaleString() || "0"}
            </p>

          </div>

          <div className="mt-6">

            <h3 className="font-bold text-lg">
              Selected Premium Add-ons
            </h3>

            {data?.selectedFeatures?.length ? (
              <ul className="list-disc ml-6 mt-3 space-y-2">
                {data.selectedFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-3">
                No premium add-ons selected.
              </p>
            )}

          </div>

        </div>

        {/* Customer Form */}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 mt-10"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            name="requirements"
            placeholder="Describe your project requirements..."
            value={formData.requirements}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl md:col-span-2 text-lg font-semibold transition"
          >
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>
  );
}

export default Inquiry;
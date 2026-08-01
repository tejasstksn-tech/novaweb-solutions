function InquiryForm() {
  return (
    <section id="inquiry" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h2 className="text-4xl font-bold text-center mb-3">
          Start Your Website Project
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Tell us about your business and we'll build your dream website.
        </p>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Business Name"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Select Business Type</option>
            <option>Restaurant</option>
            <option>Hospital</option>
            <option>Clinic</option>
            <option>Medical Store</option>
            <option>Apartment</option>
            <option>Gym</option>
            <option>Clothing Shop</option>
            <option>Shoe Shop</option>
            <option>Jewellery Shop</option>
            <option>Salon</option>
            <option>Hotel</option>
            <option>School</option>
            <option>College</option>
            <option>E-Commerce</option>
            <option>Real Estate</option>
            <option>Custom Website</option>
          </select>

          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Describe your project..."
            className="border p-3 rounded-lg md:col-span-2"
          ></textarea>

          <button
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 md:col-span-2"
          >
            Submit Inquiry
          </button>

        </form>

      </div>
    </section>
  );
}

export default InquiryForm;
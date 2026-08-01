function Contact({ websiteData }) {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-300 mt-4">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="space-y-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">

                <p>
                  <strong>🏢 Business:</strong><br />
                  {websiteData.businessName}
                </p>

                <p>
                  <strong>📍 City:</strong><br />
                  {websiteData.city || "Not Provided"}
                </p>

                <p>
                  <strong>📞 Phone:</strong><br />
                  {websiteData.phone || "Not Provided"}
                </p>

                <p>
                  <strong>📧 Email:</strong><br />
                  {websiteData.email || "Not Provided"}
                </p>

              </div>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border text-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border text-black"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border text-black"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border text-black"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
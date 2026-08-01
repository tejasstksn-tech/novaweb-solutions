function About({ websiteData }) {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
            alt="About"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Welcome to {websiteData.businessName}
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            {websiteData.businessDescription}
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600 mt-2">Quality Service</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
function WebsitePreview({ website }) {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-blue-600 text-white p-8">

            <h1 className="text-5xl font-bold">
              {website.businessName}
            </h1>

            <p className="mt-3 text-xl">
              {website.businessType} Website
            </p>

          </div>

          {/* Hero */}

          <div className="py-20 text-center">

            <h2 className="text-5xl font-bold">
              Welcome to {website.businessName}
            </h2>

            <p className="mt-6 text-xl text-gray-600">
              {website.description}
            </p>

            <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl">
              Contact Us
            </button>

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-4 gap-8 p-10">

            {[
              "Hero",
              "About",
              "Services",
              "Contact"
            ].map((item) => (

              <div
                key={item}
                className="bg-gray-100 rounded-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>

            ))}

          </div>

          {/* Footer */}

          <div className="bg-gray-900 text-white p-10 text-center">

            © 2026 {website.businessName}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WebsitePreview;
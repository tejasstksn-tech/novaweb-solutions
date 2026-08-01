function RestaurantTemplate({ websiteData }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')] bg-cover bg-center">

        <div className="bg-black/60 py-40 text-center text-white">

          <h1 className="text-6xl font-bold">
            {websiteData.businessName}
          </h1>

          <p className="text-2xl mt-6">
            {websiteData.description}
          </p>

          <button className="mt-10 bg-red-600 px-8 py-4 rounded-xl">
            Book Table
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="py-20">

        <h2 className="text-5xl text-center font-bold mb-16">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "🍕 Delicious Food",
            "🍷 Fine Dining",
            "🚚 Home Delivery"
          ].map((item) => (

            <div
              key={item}
              className="shadow-xl rounded-3xl p-10 text-center"
            >

              <h3 className="text-3xl font-bold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default RestaurantTemplate;
function ServicesSection() {
  return (
    <section className="py-24 bg-gray-100">

      <h2 className="text-5xl text-center font-bold mb-16">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {[
          "Premium Quality",
          "Professional Team",
          "Fast Delivery"
        ].map((item) => (

          <div
            key={item}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold">
              {item}
            </h3>
          </div>

        ))}

      </div>

    </section>
  );
}

export default ServicesSection;
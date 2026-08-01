import testimonialData from "../businessData/testimonialData";

function Testimonials({ websiteData }) {
  const testimonials =
    testimonialData[websiteData?.businessType] ||
    testimonialData.Restaurant;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-xl mb-3">
                {"⭐".repeat(item.rating)}
              </div>

              <p className="text-gray-600 mb-5 italic">
                "{item.review}"
              </p>

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
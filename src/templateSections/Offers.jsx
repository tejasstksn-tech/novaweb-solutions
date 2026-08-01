import businessData from "../businessData";

function Offers({ websiteData }) {
  const data =
    businessData[websiteData?.businessType] ||
    businessData.Restaurant;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Today's Special Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {offer.badge}
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  {offer.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {offer.description}
                </p>

                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  {offer.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
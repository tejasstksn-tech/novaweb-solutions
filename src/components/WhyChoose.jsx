import businessData from "../businessData";

function WhyChoose({ websiteData }) {
  const data =
    businessData[websiteData?.businessType] ||
    businessData.Restaurant;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose {websiteData?.businessName || websiteData?.businessType}
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Discover why customers trust us.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {data.whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
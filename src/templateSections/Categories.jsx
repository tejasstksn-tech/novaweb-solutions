import businessData from "../businessData";

function Categories({ websiteData }) {
  const data =
    businessData[websiteData?.businessType] ||
    businessData.Restaurant;

  return (
    <section
      id="categories"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          {websiteData?.businessType} Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {data.categories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-44 object-cover"
              />

              <h3 className="text-xl font-semibold text-center py-4">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
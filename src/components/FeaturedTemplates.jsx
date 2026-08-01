import { Link } from "react-router-dom";

function FeaturedTemplates() {
  const templates = [
    {
      title: "Restaurant Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
      price: "₹14,999",
      link: "/website/restaurant",
    },
    {
      title: "Hospital Website",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900",
      price: "₹19,999",
      link: "/website/hospital",
    },
    {
      title: "Gym Website",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900",
      price: "₹14,999",
      link: "/website/gym",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Featured Templates
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Choose from our professionally designed website templates.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {templates.map((template, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <img
                src={template.image}
                alt={template.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {template.title}
                </h3>

                <p className="text-blue-600 text-xl font-bold mt-3">
                  Starting at {template.price}
                </p>

                <div className="flex gap-4 mt-6">

                  <Link
                    to={template.link}
                    className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                  >
                    View Details
                  </Link>

                  <button
                    className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50"
                  >
                    Customize
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedTemplates;
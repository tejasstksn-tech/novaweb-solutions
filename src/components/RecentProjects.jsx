function RecentProjects() {
  const projects = [
    {
      name: "Royal Restaurant",
      type: "Restaurant Website",
      price: "₹14,999",
      image: "🍽️",
    },
    {
      name: "Green Residency",
      type: "Apartment Portal",
      price: "₹19,999",
      image: "🏢",
    },
    {
      name: "Power Gym",
      type: "Gym Website",
      price: "₹14,999",
      image: "🏋️",
    },
    {
      name: "City Hospital",
      type: "Hospital Website",
      price: "₹19,999",
      image: "🏥",
    },
    {
      name: "Fashion Hub",
      type: "Clothing Store",
      price: "₹14,999",
      image: "👕",
    },
    {
      name: "ShoeMart",
      type: "Shoe Store",
      price: "₹14,999",
      image: "👟",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Our Recent Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Websites we've designed for growing businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300"
            >

              <div className="text-6xl mb-4">
                {project.image}
              </div>

              <h3 className="text-2xl font-bold">
                {project.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {project.type}
              </p>

              <p className="text-blue-600 font-bold mt-4">
                Starting From {project.price}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                View Project
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default RecentProjects;
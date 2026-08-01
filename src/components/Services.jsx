function Services() {
  const services = [
    {
      title: "Business Website",
      description: "Professional websites for startups, companies and local businesses.",
      icon: "💼",
    },
    {
      title: "E-Commerce Store",
      description: "Online shopping websites with payments, cart and order management.",
      icon: "🛒",
    },
    {
      title: "Hospital & Clinic",
      description: "Doctor appointments, patient management and medical websites.",
      icon: "🏥",
    },
    {
      title: "Restaurant Website",
      description: "Online menu, table booking and food ordering system.",
      icon: "🍽️",
    },
    {
      title: "Apartment Portal",
      description: "Visitor management, maintenance payments and resident portal.",
      icon: "🏢",
    },
    {
      title: "Gym & Fitness",
      description: "Membership plans, trainer booking and online registration.",
      icon: "🏋️",
    },
    {
      title: "School & College",
      description: "Admission forms, student portal and fee management.",
      icon: "🎓",
    },
    {
      title: "Custom Development",
      description: "Custom websites built exactly according to your business needs.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We create powerful digital solutions for every type of business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
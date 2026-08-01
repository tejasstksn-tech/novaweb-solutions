function WhyChoose() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your groceries delivered to your doorstep in under 30 minutes.",
    },
    {
      icon: "🥬",
      title: "Fresh Products",
      description:
        "We source fresh fruits, vegetables and dairy products every day.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Pay safely using UPI, Cards, Net Banking and Cash on Delivery.",
    },
    {
      icon: "📞",
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to help you anytime.",
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We make grocery shopping simple, fast and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-6xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
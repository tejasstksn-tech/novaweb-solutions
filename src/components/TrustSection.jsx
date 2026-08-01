function TrustSection() {
  const stats = [
    {
      number: "150+",
      title: "Websites Delivered",
      desc: "Professional websites for businesses across India."
    },
    {
      number: "98%",
      title: "Client Satisfaction",
      desc: "Most of our clients recommend us to others."
    },
    {
      number: "7 Days",
      title: "Average Delivery",
      desc: "Fast website development without compromising quality."
    },
    {
      number: "24/7",
      title: "Support",
      desc: "We're available whenever you need help."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Trusted By Growing Businesses
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          NovaWeb Solutions builds fast, modern and SEO-friendly websites
          that help businesses attract more customers online.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {stats.map((item,index)=>(
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 duration-300"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-4">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustSection;
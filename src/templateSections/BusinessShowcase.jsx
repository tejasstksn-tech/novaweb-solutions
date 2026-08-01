import { motion } from "framer-motion";

const businesses = [
  {
    title: "Restaurant Website",
    icon: "🍽️",
    description: "Online menu, table booking, food ordering and payment integration.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Hospital Website",
    icon: "🏥",
    description: "Doctor appointments, patient portal, emergency contact and reports.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gym Website",
    icon: "💪",
    description: "Membership plans, trainer booking, workout schedules and payments.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real Estate",
    icon: "🏢",
    description: "Property listings, virtual tours, enquiry forms and lead management.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Salon & Spa",
    icon: "💇",
    description: "Online appointment booking, service catalogue and customer reviews.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "E-Commerce Store",
    icon: "🛒",
    description: "Sell products online with secure checkout and order tracking.",
    color: "from-indigo-500 to-violet-500",
  },
];

function BusinessShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
            🚀 Business Solutions
          </span>

          <h2 className="text-5xl font-extrabold mt-6">
            Websites We Build
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            We create modern AI-powered websites for every business with
            premium UI, responsive design and powerful features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <div className={`h-2 bg-gradient-to-r ${item.color}`} />

              <div className="p-8">

                <div className="text-6xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-8">
                  {item.description}
                </p>

                <div className="flex gap-3">

                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                    View Demo
                  </button>

                  <button className="flex-1 border border-indigo-300 hover:bg-indigo-50 text-indigo-700 py-3 rounded-xl font-semibold transition">
                    Get Started
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BusinessShowcase;
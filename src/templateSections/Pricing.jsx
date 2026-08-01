import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for small businesses and startups.",
    features: [
      "1 Business Website",
      "Responsive Design",
      "SEO Ready",
      "Contact Form",
      "Free Hosting Guide",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹14,999",
    description: "Best for growing businesses.",
    features: [
      "Everything in Starter",
      "Admin Dashboard",
      "Payment Gateway",
      "WhatsApp Integration",
      "Priority Support",
    ],
    button: "Choose Plan",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹24,999",
    description: "For businesses that need everything.",
    features: [
      "Everything in Professional",
      "AI Features",
      "Analytics Dashboard",
      "Unlimited Pages",
      "1 Year Support",
    ],
    button: "Go Premium",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
            💰 Pricing
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Choose Your Perfect Plan
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Affordable pricing with premium quality. Pick the plan that
            suits your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl shadow-2xl overflow-hidden bg-white border ${
                plan.popular
                  ? "border-indigo-600 scale-105"
                  : "border-gray-200"
              }`}
            >

              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
                  ⭐ Most Popular
                </div>
              )}

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {plan.name}
                </h3>

                <p className="text-5xl font-extrabold text-indigo-600 mt-6">
                  {plan.price}
                </p>

                <p className="text-gray-500 mt-3">
                  {plan.description}
                </p>

                <ul className="space-y-4 mt-8">

                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">
                        ✔
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <button className={`w-full mt-10 py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-gray-100 hover:bg-indigo-600 hover:text-white"
                }`}>
                  {plan.button}
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
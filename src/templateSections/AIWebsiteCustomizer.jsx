import { useState } from "react";
import { motion } from "framer-motion";

export default function AIWebsiteCustomizer() {
  const [business, setBusiness] = useState("Restaurant");
  const [theme, setTheme] = useState("Blue");
  const [style, setStyle] = useState("Modern");

  const pages = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Contact",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold">
            🤖 AI Website Customizer
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Design your website before placing an order.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Panel */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <label className="font-semibold">
              Business Type
            </label>

            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            >
              <option>Restaurant</option>
              <option>Hospital</option>
              <option>Gym</option>
              <option>Salon</option>
              <option>Real Estate</option>
              <option>E-Commerce</option>
            </select>

            <label className="font-semibold mt-6 block">
              Website Theme
            </label>

            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Blue</option>
              <option>Purple</option>
              <option>Green</option>
              <option>Orange</option>
              <option>Black</option>
            </select>

            <label className="font-semibold mt-6 block">
              Style
            </label>

            <select
              className="w-full mt-2 p-3 border rounded-xl"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Modern</option>
              <option>Minimal</option>
              <option>Luxury</option>
              <option>Corporate</option>
            </select>

            <label className="font-semibold mt-6 block">
              Pages Included
            </label>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {pages.map((page) => (
                <div
                  key={page}
                  className="bg-gray-100 rounded-xl p-3 text-center"
                >
                  ✅ {page}
                </div>
              ))}
            </div>

            <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold">
              Generate Preview
            </button>

          </div>

          {/* Right Panel */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Live Preview
            </h3>

            <div className="rounded-2xl border p-6 bg-gray-50">

              <div className="h-10 rounded-lg bg-indigo-500 mb-6"></div>

              <div className="h-40 rounded-xl bg-white border flex items-center justify-center text-2xl font-bold">
                {business}
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
              </div>

              <p className="mt-8 text-lg">
                <strong>Theme:</strong> {theme}
              </p>

              <p className="mt-2 text-lg">
                <strong>Style:</strong> {style}
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
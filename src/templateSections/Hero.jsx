import heroImage from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero({ websiteData }) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-50 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold">
            🚀 AI Website Builder
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
            Build Stunning
            <br />
            <span className="text-indigo-600">
              Websites with AI
            </span>
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 mt-5">
            {websiteData.businessName}
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
            {websiteData.businessDescription}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transition-all duration-300">
              🚀 Start Building
            </button>

            <button className="border border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              ▶ Live Demo
            </button>

          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mt-8">

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
              🤖 AI Powered
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
              📱 Mobile Ready
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
              ⚡ Fast Performance
            </span>

            <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium">
              🔍 SEO Optimized
            </span>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">
                10K+
              </h3>
              <p className="text-gray-500">
                Happy Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">
                500+
              </h3>
              <p className="text-gray-500">
                Websites
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">
                99.9%
              </h3>
              <p className="text-gray-500">
                Uptime
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">
                24/7
              </h3>
              <p className="text-gray-500">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

         <img
  src={heroImage}
  alt="NovaWeb Hero"
  className="w-full max-w-2xl border-4 border-red-500"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";

export default function BookConsultation() {
  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Book a Free Consultation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
        >
          Tell us about your business and we'll recommend the best website,
          features, and pricing—completely free.
        </motion.p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Book Consultation
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
            View Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}
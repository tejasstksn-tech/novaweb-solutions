function HeroSection({ config }) {
  return (
    <section className="bg-blue-600 text-white py-28 text-center">
      <h1 className="text-6xl font-bold">
        {config.businessName}
      </h1>

      <p className="mt-6 text-2xl">
        {config.description}
      </p>

      <button className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;
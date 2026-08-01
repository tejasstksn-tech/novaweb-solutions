function AboutSection({ config }) {
  return (
    <section className="py-24 text-center">
      <h2 className="text-5xl font-bold">
        About {config.businessName}
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600">
        {config.description}
      </p>
    </section>
  );
}

export default AboutSection;
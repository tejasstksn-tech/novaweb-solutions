function Process() {

  const steps = [
    {
      number: "01",
      title: "Requirement Discussion",
      desc: "We understand your business goals and website requirements."
    },
    {
      number: "02",
      title: "UI / UX Design",
      desc: "We create a modern and attractive website design."
    },
    {
      number: "03",
      title: "Development",
      desc: "We build a fast, responsive and secure website."
    },
    {
      number: "04",
      title: "Testing",
      desc: "Every page is tested on desktop, tablet and mobile."
    },
    {
      number: "05",
      title: "Launch",
      desc: "Your website goes live with domain and hosting support."
    },
    {
      number: "06",
      title: "Support",
      desc: "Free support after launch and future updates whenever needed."
    }
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Our Process
        </h2>

        <p className="text-center text-gray-500 mt-4">
          A simple and transparent process from idea to launch.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step,index)=>(
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;
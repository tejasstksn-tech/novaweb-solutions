import { useState } from "react";
import {
  FaGlobe,
  FaAndroid,
  FaApple,
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaChartBar,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa";

function ServiceSelector() {
  const [selectedService, setSelectedService] = useState("Website Development");

  const services = [
    {
      icon: <FaGlobe size={50} />,
      title: "Website Development",
      description: "Responsive business websites",
    },
    {
      icon: <FaAndroid size={50} />,
      title: "Android App",
      description: "Play Store ready applications",
    },
    {
      icon: <FaApple size={50} />,
      title: "iOS App",
      description: "Premium iPhone applications",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "Desktop Software",
      description: "Windows & Mac applications",
    },
    {
      icon: <FaRobot size={50} />,
      title: "AI Chatbot",
      description: "ChatGPT powered assistants",
    },
    {
      icon: <FaCloud size={50} />,
      title: "Cloud Software",
      description: "Online SaaS platforms",
    },
    {
      icon: <FaChartBar size={50} />,
      title: "Dashboard",
      description: "Admin & Analytics dashboards",
    },
    {
      icon: <FaShoppingCart size={50} />,
      title: "E-Commerce Store",
      description: "Online shopping websites",
    },
    {
      icon: <FaCogs size={50} />,
      title: "Custom Software",
      description: "Tailor-made business solutions",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-800">
          What Do You Need?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 text-lg">
          Select the service you want NovaWeb Solutions to build for you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              onClick={() => setSelectedService(service.title)}
              className={`cursor-pointer rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                selectedService === service.title
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:border-blue-500"
              }`}
            >

              <div className="mb-5 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-center">
                {service.title}
              </h3>

              <p className="text-center mt-4">
                {service.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">

          <h3 className="text-3xl font-bold text-gray-800">
            Selected Service
          </h3>

          <p className="text-3xl font-bold text-blue-600 mt-4">
            {selectedService}
          </p>

        </div>

      </div>
    </section>
  );
}

export default ServiceSelector;
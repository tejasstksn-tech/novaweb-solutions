import { useParams } from "react-router-dom";
import websiteData from "../data/websiteData";
import WebsiteCustomizer from "../components/WebsiteCustomizer";

function WebsiteDetails() {
  const { type } = useParams();

  const website = websiteData[type];

  if (!website) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Website Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto py-16 px-6">

        <h1 className="text-5xl font-bold text-center text-blue-600">
          {website.title}
        </h1>

        <p className="text-center text-gray-600 mt-4 text-lg">
          {website.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Website Image */}

          <div>
            <img
              src={website.image}
              alt={website.title}
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Website Details */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Included Features
            </h2>

            <ul className="space-y-3 text-lg">

              {website.includedFeatures.map((feature, index) => (
                <li key={index}>
                  ✅ {feature}
                </li>
              ))}

            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-6">
              Premium Add-ons
            </h2>

            <ul className="space-y-3 text-lg">

              {website.premiumFeatures.map((feature, index) => (
                <li key={index}>
                  ⭐ {feature.name} (+₹{feature.price.toLocaleString()})
                </li>
              ))}

            </ul>

            <div className="mt-10">

              <h3 className="text-4xl font-bold text-blue-600">
                Starting at ₹{website.basePrice.toLocaleString()}
              </h3>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition">
                Start This Project
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Pass website data to WebsiteCustomizer */}
      <WebsiteCustomizer website={website} />

    </div>
  );
}

export default WebsiteDetails;
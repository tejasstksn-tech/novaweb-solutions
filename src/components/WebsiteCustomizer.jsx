import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WebsiteCustomizer({ website }) {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Starter",
      price: 4999,
      delivery: "5 Days",
      support: "15 Days",
    },
    {
      name: "Business",
      price: 9999,
      delivery: "7 Days",
      support: "1 Month",
    },
    {
      name: "Professional",
      price: website.basePrice,
      delivery: "10 Days",
      support: "3 Months",
    },
    {
      name: "Premium",
      price: 19999,
      delivery: "15 Days",
      support: "6 Months",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(packages[2]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [price, setPrice] = useState(packages[2].price);

  useEffect(() => {
    setSelectedPackage(packages[2]);
    setPrice(packages[2].price);
    setSelectedFeatures([]);
  }, [website]);

  const handlePackageChange = (pkg) => {
    const extras = price - selectedPackage.price;
    setSelectedPackage(pkg);
    setPrice(pkg.price + extras);
  };

  const handleFeatureChange = (checked, feature) => {
    if (checked) {
      setSelectedFeatures((prev) => [...prev, feature.name]);
      setPrice((prev) => prev + feature.price);
    } else {
      setSelectedFeatures((prev) =>
        prev.filter((item) => item !== feature.name)
      );
      setPrice((prev) => prev - feature.price);
    }
  };

  const handleRequestQuote = () => {
    navigate("/inquiry", {
      state: {
        businessType: website.title,
        package: selectedPackage.name,
        basePrice: selectedPackage.price,
        finalPrice: price,
        selectedFeatures,
      },
    });
  };

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Customize Your {website.title}
        </h2>

        {/* Package Selection */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              onClick={() => handlePackageChange(pkg)}
              className={`cursor-pointer rounded-2xl border-2 p-6 transition duration-300 ${
                selectedPackage.name === pkg.name
                  ? "border-blue-600 bg-blue-50 shadow-xl"
                  : "border-gray-200 bg-white hover:shadow-lg"
              }`}
            >

              <h3 className="text-2xl font-bold text-center">
                {pkg.name}
              </h3>

              <p className="text-4xl font-bold text-blue-600 text-center mt-4">
                ₹{pkg.price.toLocaleString()}
              </p>

              <div className="mt-6 space-y-2 text-sm">

                <p>✅ Responsive Design</p>
                <p>✅ Mobile Friendly</p>
                <p>✅ Contact Form</p>

                {pkg.price >= 9999 && (
                  <>
                    <p>✅ WhatsApp Integration</p>
                    <p>✅ Google Maps</p>
                  </>
                )}

                {pkg.price >= website.basePrice && (
                  <>
                    <p>✅ Premium Design</p>
                    <p>✅ SEO Optimization</p>
                  </>
                )}

                {pkg.price >= 19999 && (
                  <>
                    <p>✅ Admin Dashboard</p>
                    <p>✅ Priority Support</p>
                  </>
                )}

              </div>

              <div className="mt-6 border-t pt-4 text-sm">
                <p><strong>Delivery:</strong> {pkg.delivery}</p>
                <p><strong>Support:</strong> {pkg.support}</p>
              </div>

            </div>

          ))}

        </div>

        {/* Premium Features */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-3xl font-bold mb-8">
            Premium Add-ons
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            {website.premiumFeatures.map((feature, index) => (

              <label
                key={index}
                className="flex justify-between items-center border rounded-xl p-4 hover:bg-gray-50 cursor-pointer"
              >

                <div>

                  <h4 className="font-semibold">
                    {feature.name}
                  </h4>

                  <p className="text-blue-600">
                    + ₹{feature.price.toLocaleString()}
                  </p>

                </div>

                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFeatureChange(e.target.checked, feature)
                  }
                />

              </label>

            ))}

          </div>

          <div className="mt-12 border-t pt-8">

            <h3 className="text-3xl font-bold">
              Project Summary
            </h3>

            <p className="mt-4">
              <strong>Business:</strong> {website.title}
            </p>

            <p className="mt-2">
              <strong>Package:</strong> {selectedPackage.name}
            </p>

            <p className="mt-2">
              <strong>Base Price:</strong> ₹{selectedPackage.price.toLocaleString()}
            </p>

            <p className="mt-2">
              <strong>Delivery:</strong> {selectedPackage.delivery}
            </p>

            <p className="mt-2">
              <strong>Support:</strong> {selectedPackage.support}
            </p>

            <h4 className="mt-6 text-xl font-semibold">
              Selected Add-ons
            </h4>

            {selectedFeatures.length === 0 ? (
              <p className="text-gray-500 mt-2">
                No premium add-ons selected.
              </p>
            ) : (
              <ul className="list-disc ml-6 mt-3 space-y-2">
                {selectedFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            <h2 className="text-5xl font-bold text-green-600 mt-8">
              Total Price ₹{price.toLocaleString()}
            </h2>

            <button
              onClick={handleRequestQuote}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl transition"
            >
              Request Quote
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WebsiteCustomizer;
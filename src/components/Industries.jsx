import industries from "../data/industriesData";
import { ArrowRight } from "lucide-react";

function Industries({
  selectedIndustry,
  setSelectedIndustry,
}) { 
  const industries = [
    {
      name: "🍽 Restaurant",
      features: [
        "Online Menu",
        "Table Booking",
        "WhatsApp Ordering",
        "Google Maps",
        "QR Menu",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🏥 Hospital",
      features: [
        "Doctor Appointment",
        "Patient Portal",
        "Emergency Contact",
        "Medical Reports",
        "Online Consultation",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🏢 Apartment",
      features: [
        "Visitor Management",
        "Delivery Vault",
        "Maintenance Payment",
        "Complaint Portal",
        "Resident Dashboard",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🛒 Supermarket",
      features: [
        "Online Orders",
        "Inventory",
        "Barcode Billing",
        "Offers",
        "Payments",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🏋 Gym",
      features: [
        "Membership",
        "Trainer Booking",
        "Workout Plans",
        "Payments",
        "Progress Tracking",
        "Nova AI Assistant",
      ],
    },
    {
      name: "☕ Cafe",
      features: [
        "Menu",
        "Reservations",
        "Online Orders",
        "Reviews",
        "Offers",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🏨 Hotel",
      features: [
        "Room Booking",
        "Online Payments",
        "Gallery",
        "Customer Reviews",
        "Google Maps",
        "Nova AI Assistant",
      ],
    },
    {
      name: "🎓 School",
      features: [
        "Admissions",
        "Student Portal",
        "Fee Payments",
        "Attendance",
        "Announcements",
        "Nova AI Assistant",
      ],
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Choose Your Business
        </h2>

        <p className="text-center text-slate-300 mt-4 mb-14 text-lg">
          Click your business and see what NovaWeb can build for you.
        </p>

        {/* Business Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {industries.map((industry) => (

            <button
              key={industry.name}
              onClick={() => setSelectedIndustry(industry)}
              className={`rounded-2xl p-6 text-left transition duration-300 border
              ${
                selectedIndustry.name === industry.name
                  ? "bg-blue-600 border-blue-400 scale-105 shadow-2xl"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <h3 className="text-xl font-bold">

                {industry.name}

              </h3>

              <p className="text-slate-300 mt-2">

                AI Powered Website

              </p>

            </button>

          ))}

        </div>

        {/* Selected Preview */}

        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg">

          <h3 className="text-3xl font-bold mb-6">

            {selectedIndustry.name} Website Includes

          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            {selectedIndustry.features.map((feature) => (

              <div
                key={feature}
                className="bg-slate-800 rounded-xl px-5 py-4 flex items-center gap-3"
              >

                ✅ {feature}

              </div>

            ))}

          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-2xl flex items-center gap-3 font-semibold transition">

            Build My Website

            <ArrowRight size={20} />

          </button>

        </div>

      </div>
    </section>
  );
}

export default Industries;
import {
  Monitor,
  Smartphone,
  Bot,
  Calendar,
  MapPin,
  CreditCard,
} from "lucide-react";

function WebsitePreview({ selectedIndustry,businessName }) {
  const previews = {
    "🍽 Restaurant": {
      title: businessName || "preview.title",
      color: "from-orange-500 to-red-500",
      features: [
        "🍕 Online Menu",
        "📅 Table Booking",
        "📍 Google Maps",
        "💳 Online Payment",
      ],
    },

    "🏥 Hospital": {
      title: "CityCare Hospital",
      color: "from-blue-500 to-cyan-500",
      features: [
        "👨‍⚕️ Doctor Appointment",
        "🩺 Patient Portal",
        "🚑 Emergency Contact",
        "📄 Medical Reports",
      ],
    },

    "🏢 Apartment": {
      title: "Green Residency",
      color: "from-green-500 to-emerald-500",
      features: [
        "🚪 Visitor Management",
        "📦 Delivery Vault",
        "💰 Maintenance Payment",
        "📢 Notice Board",
      ],
    },

    "🛒 Supermarket": {
      title: "Fresh Mart",
      color: "from-purple-500 to-pink-500",
      features: [
        "🛍 Online Shopping",
        "📦 Inventory",
        "🏷 Offers",
        "💳 Payments",
      ],
    },

    "🏋 Gym": {
      title: "Power Fitness",
      color: "from-indigo-500 to-violet-500",
      features: [
        "💪 Membership",
        "🏃 Workout Plans",
        "📅 Trainer Booking",
        "📊 Progress",
      ],
    },

    "☕ Cafe": {
      title: "Coffee House",
      color: "from-yellow-500 to-orange-500",
      features: [
        "☕ Menu",
        "🪑 Reservations",
        "⭐ Reviews",
        "📍 Maps",
      ],
    },

    "🏨 Hotel": {
      title: "Royal Stay",
      color: "from-sky-500 to-blue-500",
      features: [
        "🛏 Room Booking",
        "💳 Payment",
        "📍 Maps",
        "⭐ Reviews",
      ],
    },

    "🎓 School": {
      title: "Future Academy",
      color: "from-green-500 to-lime-500",
      features: [
        "🎓 Admissions",
        "👨‍🎓 Student Portal",
        "💰 Fees",
        "📢 Announcements",
      ],
    },
  };

  const preview = previews[selectedIndustry?.name] || previews["🍽 Restaurant"];

  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Live Website Preview
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          See how your future website could look.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Desktop */}

          <div className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

            <div className={`bg-gradient-to-r ${preview.color} p-5`}>

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold">

                  {preview.title}

                </h3>

                <Monitor />

              </div>

            </div>

            <div className="p-8 space-y-4">

              {preview.features.map((feature) => (

                <div
                  key={feature}
                  className="bg-slate-800 rounded-xl p-4"
                >
                  {feature}
                </div>

              ))}

              <div className="grid grid-cols-3 gap-3 mt-6">

                <div className="bg-blue-600 rounded-xl p-4 flex justify-center">
                  <Calendar />
                </div>

                <div className="bg-green-600 rounded-xl p-4 flex justify-center">
                  <MapPin />
                </div>

                <div className="bg-purple-600 rounded-xl p-4 flex justify-center">
                  <CreditCard />
                </div>

              </div>

            </div>

          </div>

          {/* Mobile */}

          <div className="flex justify-center">

            <div className="w-72 rounded-[40px] border-8 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl">

              <div className={`bg-gradient-to-r ${preview.color} p-5`}>

                <Smartphone className="mx-auto mb-3" />

                <h3 className="text-center font-bold">

                  {businessName || preview.title}

                </h3>

              </div>

              <div className="p-5 space-y-3">

                {preview.features.slice(0, 3).map((feature) => (

                  <div
                    key={feature}
                    className="bg-slate-800 rounded-lg p-3 text-sm"
                  >
                    {feature}
                  </div>

                ))}

                <div className="bg-blue-600 rounded-xl p-4 mt-6">

                  <div className="flex items-center gap-2">

                    <Bot size={18} />

                    Nova AI Assistant

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WebsitePreview;
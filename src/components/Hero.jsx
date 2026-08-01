import {
  ArrowRight,
  Sparkles,
  Bot,
  Globe,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

function Hero() {
  return (
    <section
  id="hero"
  className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-36 pb-24"
>
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 mb-6">
            <Sparkles size={18} />
            AI Powered Business Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">

            Build Your

            <span className="text-blue-400">
              {" "}Business Website{" "}
            </span>

            with AI

          </h1>

          <p className="text-slate-300 text-xl mt-8 leading-8">

            NovaWeb Solutions helps businesses launch beautiful
            websites with AI assistance, online booking,
            payments, analytics and business automation.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-2xl flex items-center gap-3 font-semibold transition">

              Start Building

              <ArrowRight size={20} />

            </button>

            <button className="border border-white/20 backdrop-blur-md px-7 py-4 rounded-2xl hover:bg-white hover:text-black transition">

              Watch Demo

            </button>

          </div>

          {/* Feature Chips */}

          <div className="flex flex-wrap gap-4 mt-12">

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-2">

              <Bot size={18} />

              Nova AI

            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-2">

              <Globe size={18} />

              Live Preview

            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-2">

              <ShieldCheck size={18} />

              Secure Hosting

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

            <div className="flex justify-between items-center">

              <h3 className="font-bold text-xl">

                Nova AI Dashboard

              </h3>

              <MonitorSmartphone />

            </div>

            <div className="mt-8 space-y-5">

              <div className="bg-slate-800 rounded-xl p-4 flex justify-between">

                <span>Website Health</span>

                <span className="text-green-400">

                  Excellent

                </span>

              </div>

              <div className="bg-slate-800 rounded-xl p-4 flex justify-between">

                <span>Bookings Today</span>

                <span className="text-blue-400">

                  18

                </span>

              </div>

              <div className="bg-slate-800 rounded-xl p-4 flex justify-between">

                <span>Revenue</span>

                <span className="text-yellow-400">

                  ₹28,500

                </span>

              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-5 mt-6">

                <p className="text-sm">

                  🤖 Nova AI Suggestion

                </p>

                <h2 className="font-bold mt-2">

                  Add WhatsApp Booking to increase customer conversions.

                </h2>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="absolute -top-6 -left-6 bg-blue-600 px-5 py-3 rounded-xl shadow-xl">

            🚀 AI Enabled

          </div>

          <div className="absolute -bottom-6 right-0 bg-green-500 px-5 py-3 rounded-xl shadow-xl">

            ✔ Business Ready

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
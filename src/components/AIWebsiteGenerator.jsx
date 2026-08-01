import { generateWebsite } from "../engine/websiteGenerator";
import { useState } from "react";
import industries from "../data/industriesData";
import { Sparkles, Wand2 } from "lucide-react";

function AIWebsiteGenerator({
  websiteData,
  setWebsiteData,
  setGenerated,
}) {
  const [loading, setLoading] = useState(false);
  const handleGenerate = () => {
    console.log("Generate button clicked");
  if (
    !websiteData.businessName.trim() ||
    !websiteData.businessDescription.trim()
  ) {
    alert("Please enter your business details.");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    const generatedWebsite = generateWebsite({
      businessName: websiteData.businessName,
      businessType: websiteData.selectedIndustry.name.replace(/^[^\w]+\s*/, ""),
      description: websiteData.businessDescription,

      email: "",
      phone: "",
      city: "",
      theme: "Modern",
      primaryColor: "#2563EB",
    });

    setWebsiteData((prev) => ({
      ...prev,
      ...generatedWebsite,
    }));

    setGenerated(true);
    setLoading(false);
  }, 1000);
};
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-5 py-2 rounded-full">
            <Sparkles size={18} />
            AI Powered
          </div>

          <h2 className="text-5xl font-bold mt-6">
            Generate Your Website with AI
          </h2>

          <p className="text-slate-300 mt-5 text-lg">
            Tell Nova AI about your business and watch your website come to life.
          </p>
        </div>

        <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 font-semibold">
                Business Type
              </label>

              <select
                className="w-full bg-slate-800 rounded-xl p-4"
                value={websiteData.selectedIndustry.name.replace(/^[^\w]+\s*/, "")}
                onChange={(e) => {
                  const selected = industries.find(
                    (industry) =>
                      industry.name.replace(/^[^\w]+\s*/, "") === e.target.value
                  );

                  if (selected) {
                    setWebsiteData((prev) => ({
                      ...prev,
                      selectedIndustry: selected,
                    }));
                  }
                }}
              >
                {industries.map((industry) => (
                  <option
                    key={industry.name}
                    value={industry.name.replace(/^[^\w]+\s*/, "")}
                  >
                    {industry.name.replace(/^[^\w]+\s*/, "")}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Business Name
              </label>

              <input
                className="w-full bg-slate-800 rounded-xl p-4"
                placeholder="Bella Restaurant"
                value={websiteData.businessName}
                onChange={(e) =>
                  setWebsiteData((prev) => ({
                    ...prev,
                    businessName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="block mb-2 font-semibold">
              Business Description
            </label>

            <textarea
              rows={5}
              className="w-full bg-slate-800 rounded-xl p-4"
              placeholder="Describe your business..."
              value={websiteData.businessDescription}
              onChange={(e) =>
                setWebsiteData((prev) => ({
                  ...prev,
                  businessDescription: e.target.value,
                }))
              }
            />
          </div>

          <button
  onClick={handleGenerate}
  disabled={loading}
  className={`mt-10 px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition ${
    loading
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  <Wand2 size={20} />
  {loading ? "Generating..." : "Generate Website"}
</button>
        </div>
      </div>
    </section>
  );
}

export default AIWebsiteGenerator;
function Footer({ websiteData }) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Business Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {websiteData.businessName}
          </h2>
          <p className="text-gray-400">
            {websiteData.businessDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 {websiteData.city}
          </p>

          <p className="text-gray-400 mt-2">
            📞 {websiteData.phone}
          </p>

          <p className="text-gray-400 mt-2">
            📧 {websiteData.email}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} {websiteData.businessName}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
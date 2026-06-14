import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">About Us</h2>
          <p className="text-gray-400 leading-relaxed">
            We build modern, clean and user-friendly digital experiences. Our
            mission is to deliver high-quality web solutions for everyone.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Contact Info
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Rangpur, Bangladesh</li>
            <li>📞 +880 1234-567890</li>
            <li>📧 support@example.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 font-bold mt-10 h-[300px]">
      <div className="max-w-screen-xl md:h-[270px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Fake Restaurant</h2>
          <p className="mt-2 text-sm">© 2025 All rights reserved</p>
        </div>

        {/* About / Text Section */}
        <div>
          <h3 className="text-xl text-gray-900 font-bold mb-3">About Us</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Links / Contact */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        Designed with ❤️ by Fake Restaurant
      </div>
    </footer>
  );
}

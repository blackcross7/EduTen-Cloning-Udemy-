import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm pb-10 border-b border-gray-700">
        <div>
          <h3 className="text-white font-semibold mb-3">EDUTEN Business</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Teach on Eduten</li>
            <li className="hover:text-white cursor-pointer">Get the app</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Affiliates</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Sitemap</li>
            <li className="hover:text-white cursor-pointer">Accessibility</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">More</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Partnerships</li>
            <li className="hover:text-white cursor-pointer">Investor Relations</li>
            <li className="hover:text-white cursor-pointer">Site Map</li>
            <li className="hover:text-white cursor-pointer">Newsroom</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">YouTube</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <img src="/assets/landingPage/logo.svg" alt="EDUTEN Logo" className="h-8 w-8" />
          <span className="text-white text-lg font-bold">EDUTEN</span>
        </div>
        <span className="mt-2 sm:mt-0">© 2025 EDUTEN, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const exploreItems = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
];

const plansItems = [
  "Individual",
  "Team",
  "Enterprise",
  "Student Discount",
];

const businessItems = [
  "Overview",
  "Features",
  "Pricing",
  "Customer Stories",
];

const teachItems = [
  "Become an Instructor",
  "Instructor Resources",
  "Teaching Center",
];

const secondaryLinks = [
  "Web Development",
  "Python",
  "Excel",
  "JavaScript",
  "Data Science",
  "AWS Certification",
  "Drawing",
  "React",
  "Graphic Design",
  "Business Analytics",
];

const NavbarPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  // Add these lines for login state and user info
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = {
    name: "John Doe",
    initials: "JD",
    avatar: "/assets/landingPage/user-avatar.svg",
  };

  // Dropdown helpers for delay
  const handleDropdownEnter = (name) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 250);
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* Primary Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto flex items-center px-2 sm:px-4 lg:px-8 py-2 lg:py-3">
          {/* Hamburger (mobile/tablet only) */}
          <div className="flex items-center lg:hidden">
            <button
              className="mr-2"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/assets/landingPage/logo.svg"
              alt="Logo"
              className="h-7 sm:h-8"
            />
            {/* Explore (lg+ only) */}
            <div
              className="relative hidden lg:block ml-4"
              onMouseEnter={() => handleDropdownEnter("explore")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="font-semibold text-sm hover:text-purple-700 flex items-center">
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "explore" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
                  <ul>
                    {exploreItems.map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Search Bar (always visible, responsive width) */}
          <div className="flex-1 min-w-0 mx-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-gray-50"
              />
            </div>
          </div>
          {/* Links & Icons (lg+ only) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Plans & Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("plans")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-sm font-semibold hover:text-purple-700 flex items-center">
                Plans &amp; Pricing
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "plans" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <ul>
                    {plansItems.map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* EDU Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("business")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-sm font-semibold hover:text-purple-700 flex items-center"
              onClick={() => navigate("/business")}
              >
                EDU Business
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "business" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <ul>
                    {businessItems.map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* EDU Teach Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("teach")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-sm font-semibold hover:text-purple-700 flex items-center">
                EDU Teach
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "teach" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
                  <ul>
                    {teachItems.map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Wishlist Icon */}
            {isLoggedIn && (
              <button className="p-2 hover:bg-gray-100 rounded-full" title="Wishlist">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            )}

            {/* Cart Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full" title="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </button>

            {/* Notification Icon */}
            {isLoggedIn && (
              <button className="p-2 hover:bg-gray-100 rounded-full" title="Notifications">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
                {/* Notification dot */}
                <span className="absolute top-2 right-2 w-2 h-2 bg-purple-600 rounded-full"></span>
              </button>
            )}

            {/* My Learning */}
            {isLoggedIn && (
              <button
                className="text-sm font-semibold hover:text-purple-700"
                onClick={() => navigate("/my-learning")}
              >
                My learning
              </button>
            )}

            {/* Conditional: Log in/Sign up or User Avatar */}
            {!isLoggedIn ? (
              <>
                <button
                  className="px-4 py-1 border border-purple-700 text-purple-700 rounded hover:bg-purple-50 font-semibold text-sm"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
                <button
                  className="px-4 py-1 bg-purple-700 text-white rounded hover:bg-purple-800 font-semibold text-sm"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </button>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none relative">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {user.initials}
                  </span>
                  {/* Purple dot for active */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full border-2 border-white"></span>
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50 hidden group-hover:block">
                  <ul>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</li>
                    <li
                      className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Log out
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Globe Icon */}
            <button className="p-2 border rounded hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </button>
          </div>
          {/* Right icons (mobile/tablet only) */}
          <div className="flex items-center lg:hidden space-x-2">
            {/* Cart Icon */}
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </button>
            {/* Globe Icon */}
            <button className="p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
            <div className="bg-white w-72 h-full p-6 shadow-lg flex flex-col">
              <button
                className="mb-4 text-gray-600"
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="space-y-4 mb-6">
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/"); setMobileMenu(false);}}>Home</button>
                </li>
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/explore"); setMobileMenu(false);}}>Explore</button>
                </li>
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/plans"); setMobileMenu(false);}}>Plans & Pricing</button>
                </li>
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/business"); setMobileMenu(false);}}>EDU Business</button>
                </li>
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/teach"); setMobileMenu(false);}}>EDU Teach</button>
                </li>
                {isLoggedIn && (
                  <>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/my-learning"); setMobileMenu(false);}}>My learning</button>
                    </li>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => setMobileMenu(false)}>Wishlist</button>
                    </li>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => setMobileMenu(false)}>Notifications</button>
                    </li>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => setMobileMenu(false)}>Profile</button>
                    </li>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => setIsLoggedIn(false)}>Log out</button>
                    </li>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/login"); setMobileMenu(false);}}>Log in</button>
                    </li>
                    <li>
                      <button className="text-left w-full text-gray-800 font-semibold" onClick={() => {navigate("/signup"); setMobileMenu(false);}}>Sign up</button>
                    </li>
                  </>
                )}
                <li>
                  <button className="text-left w-full text-gray-800 font-semibold" onClick={() => setMobileMenu(false)}>Cart</button>
                </li>
              </ul>
              <div className="mt-auto">
                <h4 className="text-xs text-gray-500 mb-2">Popular</h4>
                <ul className="space-y-2">
                  {secondaryLinks.map(link => (
                    <li key={link}>
                      <button className="text-left w-full text-gray-700" onClick={() => setMobileMenu(false)}>{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setMobileMenu(false)} />
          </div>
        )}
      </nav>

      {/* Secondary Navbar */}
      <nav className="bg-gray-50 border-b border-gray-200 w-full ">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
          <div
            className="
              flex
              flex-nowrap
              overflow-x-auto
              space-x-2
              py-2
              justify-center
            "
            style={{ scrollbarWidth: "auto" }} // <-- Yeh line scroll bar ko visible rakhegi (Firefox)
          >
            {secondaryLinks.map((link) => (
              <button
                key={link}
                className="flex-shrink-0 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition whitespace-nowrap"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
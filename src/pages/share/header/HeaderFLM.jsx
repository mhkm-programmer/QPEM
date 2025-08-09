import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const HeaderFLM = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dropdownTimeout = useRef(null);

  const primaryColor = "#1B4965";
  const accentColor = "#F4A261";
  const hoverColor = "#E76F51";

  const menuItems = [
    { label: "Home", to: "/" },
    {
      label: "Our Services",
      to: "/services",
      submenu: [
        { label: "Plumbing Services", to: "/services/plumbing" },
        { label: "Electrical Services", to: "/services/electrical" },
        { label: "Appliance Repairs", to: "/services/appliance" },
        { label: "General Maintenance", to: "/services/maintenance" },
      ],
    },
    { label: "Contact Us", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const matches = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    ).filter((el) => el.textContent.toLowerCase().includes(query));

    if (matches.length) {
      matches.forEach((el, i) => {
        el.id = `search-result-${i}`;
        el.style.backgroundColor = "#fff3cd";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });
      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent,
          elementId: `search-result-${i}`,
        }))
      );
    } else {
      alert("No matching content found.");
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-md font-sans">
      {/* Top Banner */}
      <div className="bg-[#F4A261] py-1 text-center text-sm font-medium tracking-wide text-black">
        <Typed
          strings={[
            "Qatar Plumbing, Electrical & Maintenance – Your Trusted Local Experts",
            "Fast, Reliable Plumbing & Electrical Services in Doha, Qatar",
            "24/7 Support • Affordable • Guaranteed Quality",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Logo and Search */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3">
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="https://8upload.com/image/68928dda5d591/QPEM_Logo.jpg"
            alt="QPEM Logo"
            className="h-14 rounded-md"
            loading="lazy"
          />
        </NavLink>

        {/* Search */}
        <div className="flex-1 mx-4">
          <div className="relative max-w-md mx-auto w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search services, repairs, maintenance..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-sm"
              aria-label="Search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-10 top-0 bottom-0 flex items-center px-2 text-gray-500 hover:text-red-600"
              >
                <FaTimes />
              </button>
            )}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 px-3 bg-[#F4A261] text-black font-semibold rounded-r-md hover:bg-[#E76F51]"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#1B4965] px-3 text-3xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center gap-8 py-2 text-base font-medium">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setActiveSubMenu(index);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setActiveSubMenu(null), 150);
            }}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F4A261]"
                  : "hover:text-[#E76F51] transition-colors"
              }
            >
              {item.label}
            </NavLink>

            {item.submenu && activeSubMenu === index && (
              <div className="absolute bg-white text-gray-800 border border-gray-200 top-full left-0 mt-2 w-64 rounded-md shadow-lg z-50">
                {item.submenu.map((sub, subIdx) => (
                  <NavLink
                    key={subIdx}
                    to={sub.to}
                    className="block px-4 py-2 text-sm hover:bg-[#F4A261] hover:text-black transition"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t text-gray-800 px-4 py-3 space-y-3">
          {menuItems.map((item, idx) =>
            item.submenu ? (
              <details key={idx} className="group">
                <summary className="cursor-pointer py-2 flex justify-between items-center hover:text-[#F4A261] select-none">
                  {item.label} <span>▾</span>
                </summary>
                <ul className="pl-4 space-y-1 mt-1">
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-sm hover:text-[#E76F51]"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <NavLink
                key={idx}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm hover:text-[#E76F51]"
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-orange-50 text-black px-4 py-3 text-sm">
          <h2 className="font-semibold">Search Results:</h2>
          <ul className="list-disc pl-6">
            {searchResults.map((res, i) => (
              <li key={i}>
                <a
                  href={`#${res.elementId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(res.elementId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    setSearchResults([]);
                  }}
                  className="text-blue-700 hover:underline"
                >
                  {res.text}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSearchResults([])}
            className="mt-2 text-red-600 underline text-sm"
          >
            Close Results
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderFLM;

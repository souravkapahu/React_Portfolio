import { useState } from "react";
import ContactFormModal from "../components/common/contactForm";
import images from "../assets/index";

const { resume } = images;

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeUrl = localStorage.getItem('resume')
  const handleActiveTab = (currentTab: string) => {
    setActiveTab(currentTab);
    setIsMobileMenuOpen(false); // Close menu

    if (currentTab === "contact") {
      setIsContactModalOpen(true);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/60 shadow-md backdrop-blur-sm transition-all duration-500">
        <div className="flex justify-between items-center px-4 md:px-20 h-14 text-white font-playfair">
          {/* Mobile Hamburger - LEFT side */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu (centered on large screens) */}
          <div className="hidden md:flex gap-10 text-[18px] mx-auto">
            {["home", "about", "contact"].map((tab) => (
              <a
                key={tab}
                href={tab !== "contact" ? `#${tab}` : undefined}
                onClick={() => handleActiveTab(tab)}
                className={`${activeTab === tab
                  ? "underline underline-offset-4 decoration-red-600"
                  : ""
                  } capitalize cursor-pointer`}
              >
                {tab}
              </a>
            ))}
            <a href={`${resumeUrl}`} download className="capitalize">
              Download Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 text-white flex flex-col items-center gap-4 py-4 text-lg font-medium animate-fadeInDown">
            {["home", "about", "contact"].map((tab) => (
              <a
                key={tab}
                href={tab !== "contact" ? `#${tab}` : undefined}
                onClick={() => handleActiveTab(tab)}
                className={`${activeTab === tab
                  ? "underline underline-offset-4 decoration-red-600"
                  : ""
                  } capitalize cursor-pointer`}
              >
                {tab}
              </a>
            ))}
            <a href={resume} download>
              Download Resume
            </a>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setActiveTab("home");
        }}
      />
    </>
  );
}

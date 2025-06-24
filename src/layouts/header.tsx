import { useState } from "react";
import { Link } from "react-router-dom";
import ContactFormModal from "../components/common/contactForm";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleActiveTab = (currentTab: string) => {
    setActiveTab(currentTab);

    if (currentTab === "contact") {
      setIsContactModalOpen(true);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm shadow-md transition-all duration-500 animate-slideDown">
        <div className="flex justify-center items-center text-white font-playfair text-[18px] gap-10 h-14">
          <a
            href="#home"
            className={`${
              activeTab === "home"
                ? "underline underline-offset-4 decoration-red-600"
                : ""
            }`}
            onClick={() => handleActiveTab("home")}
          >
            Home
          </a>

          <a
            href="#about"
            className={`${
              activeTab === "about"
                ? "underline underline-offset-4 decoration-red-600"
                : ""
            }`}
            onClick={() => handleActiveTab("about")}
          >
            About
          </a>

          <a
            //   href="#about"
            className={`${
              activeTab === "contact"
                ? "underline underline-offset-4 decoration-red-600"
                : ""
            }`}
            onClick={() => handleActiveTab("contact")}
          >
            Contact
          </a>
        </div>
      </div>
      {/* Modal below navbar */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setActiveTab("home"); // Reset active tab when modal closes
        }}
      />
    </>
  );
}

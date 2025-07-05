import { useState } from "react";
import ContactFormModal from "../components/common/contactForm";
import { footerConstant } from "../constant";
import { useGetSocialHandles } from "../hooks/socialHandle";

const imageURL = import.meta.env.VITE_IMAGE_BASE_URL;

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const storageData = localStorage.getItem("profile");
  const profileId = storageData ? JSON.parse(storageData)._id : null;
  const name = storageData ? JSON.parse(storageData).name : null;

  const {
    data,
    isLoading,
    error,
  } = useGetSocialHandles(profileId);

  const socialLinks = data?.data ?? [];

  const handleClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <footer className="bg-slate-800 font-playfair text-white px-6 md:px-20 py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Personal Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-sm text-gray-400">
            Full Stack Developer | Crafting modern web experiences using React,
            TypeScript & Node.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            {socialLinks.map(({ link, icon }: any, idx: any) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform hover:-translate-y-1"
              >
                <img
                  crossOrigin="anonymous"
                  src={`${imageURL}/${icon}`}
                  className="w-6 h-6 md:w-7 md:h-7"
                  alt="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Saurav Kaphu. Built with ❤️ using React &
        Tailwind.
      </div>
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
        }}
      />
    </footer>
  );
}

import { useState, useEffect } from "react";
import ContactFormModal from "../components/common/contactForm";
import { useGetSocialHandles } from "../hooks/socialHandle";
import { Alert, Spin } from "antd";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [profileId, setProfileId] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [profileReady, setProfileReady] = useState(false);

  useEffect(() => {
    let retries = 0;
    const interval = setInterval(() => {
      const raw = localStorage.getItem("profile");
      if (raw && raw !== "undefined") {
        try {
          const parsed = JSON.parse(raw);
          if (parsed?._id) {
            setProfileId(parsed._id);
            setName(parsed.name || "Guest");
            setProfileReady(true);
            clearInterval(interval);
          }
        } catch (err) {
          console.error("Failed to parse profile from localStorage", err);
          clearInterval(interval);
        }
      }

      if (++retries > 20) {
        clearInterval(interval);
        setProfileReady(true); // allow fallback display
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const {
    data,
    isLoading,
    error,
  } = useGetSocialHandles(profileId ?? "");

  const socialLinks = data?.data ?? [];

  const handleClick = () => setIsContactModalOpen(true);

  if (!profileReady) return null;

  return (
    <footer className="bg-slate-800 font-playfair text-white px-6 md:px-20 py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Personal Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{name || "Your Name"}</h2>
          <p className="text-sm text-gray-400">
            Full Stack Developer | Crafting modern web experiences using React,
            TypeScript & Node.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-white transition"
                  onClick={section === "contact" ? handleClick : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect</h3>

          {isLoading && <Spin tip="Loading socials..." />}

          {error && (
            <Alert
              message="Failed to load social links"
              description={error?.message || "An unexpected error occurred."}
              type="error"
              showIcon
              className="mb-3"
            />
          )}

          {!isLoading && !error && socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map(({ link, icon }: any, idx: number) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform hover:-translate-y-1"
                >
                  <img
                    crossOrigin="anonymous"
                    src={icon}
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="social-icon"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Saurav Kapahu. Built with ❤️ using React & Tailwind.
      </div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
}
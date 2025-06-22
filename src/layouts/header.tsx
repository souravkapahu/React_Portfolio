import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [activeTab, setActiveTab] = useState("home");

    const handleActiveTab = (currentTab: string) => {
        setActiveTab(currentTab);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm shadow-md transition-all duration-500 animate-slideDown">
            <div className="flex justify-center items-center text-white font-playfair text-[18px] gap-10 h-14">
                <a
                    href="#home"
                    className={`${activeTab === "home"
                            ? "underline underline-offset-4 decoration-red-600"
                            : ""
                        }`}
                    onClick={() => handleActiveTab("home")}
                >
                    Home
                </a>

                <a
                    href="#about"
                    className={`${activeTab === "about"
                            ? "underline underline-offset-4 decoration-red-600"
                            : ""
                        }`}
                    onClick={() => handleActiveTab("about")}
                >
                    About
                </a>
            </div>
        </div>
    );
}

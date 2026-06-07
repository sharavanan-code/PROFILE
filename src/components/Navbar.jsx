import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50
      ${
        scrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-sky-400">
            Sharavanan
          </h1>

          <ul className="hidden md:flex gap-8 text-slate-300">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  to={item}
                  className="cursor-pointer hover:text-sky-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
<a
  href="/sharavana_resumes(real_use).pdf"
  download
  className="
  px-5
  py-2
  rounded-xl
  bg-sky-500
  hover:bg-sky-400
  transition
  text-white
  font-medium
  "
>
  Resume
</a>
        </div>

   

      </div>
    </motion.nav>
  );
}
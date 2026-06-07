import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";

import avatar from "../assets/avatar.png";

import TechBadge from "./TechBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-6
      pt-20
      bg-[#0B1120]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-400 text-xl mb-4">
            👋 Hi, I'm
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            leading-tight
            "
          >
            SHARAVANAN
          </h1>

          <div className="mt-5">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Software Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl text-sky-400 font-semibold"
            />
          </div>

          <p
            className="
            mt-8
            text-slate-400
            text-lg
            leading-relaxed
            max-w-xl
            "
          >
            Building scalable web applications using
            Java, Spring Boot, React, Node.js and
            MYSQL, 
PostgreSQL
          </p>

          <p className="mt-3 text-slate-500">
            Open to Full-Time Opportunities and
            Freelance Projects.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
  to="projects"
  smooth={true}
  duration={500}
  offset={-80}
>
  <button
    className="
    px-8
    py-4
    rounded-xl
    bg-sky-500
    hover:bg-sky-400
    transition
    font-semibold
    cursor-pointer"
  >
    View Projects
  </button>
</Link>

            <Link
  to="contact"
  smooth={true}
  duration={500}
  offset={-80}
>
  <button
    className="
    px-8
    py-4
    rounded-xl
    border
    border-slate-600
    hover:border-sky-500
    transition
    cursor-pointer"
  >
    Contact Me
  </button>
</Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <TechBadge name="Java" />
            <TechBadge name="Spring Boot" />
            <TechBadge name="React" />
            <TechBadge name="Node.js" />
            <TechBadge name="MongoDB" />
            <TechBadge name="Docker" />
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div
              className="
              relative
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              "
            >
              <div
                className="
                absolute
                inset-0
                bg-sky-500/10
                blur-3xl
                "
              />

              <img
                src={avatar}
                alt="avatar"
                className="relative z-10 w-full"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
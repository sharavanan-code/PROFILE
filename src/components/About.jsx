import { motion } from "framer-motion";

export default function About() {
return ( <section
   id="about"
   className="min-h-screen bg-[#0B1120] px-6 py-32"
 > <div className="max-w-7xl mx-auto">

```
    {/* SECTION TITLE */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h4 className="text-sky-400 font-semibold mb-4 tracking-wider">
        ABOUT ME
      </h4>

      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Building Scalable Solutions
        <br />
        For Real-World Problems
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-slate-300 text-lg leading-relaxed">
          I am a Full Stack Developer passionate about building scalable
          web applications and solving real-world problems. I enjoy
          creating clean, efficient, and user-focused digital experiences
          that combine strong functionality with modern design.
        </p>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          My expertise includes
          <span className="text-sky-400 font-medium"> Java</span>,
          <span className="text-sky-400 font-medium">
            {" "}Spring Boot
          </span>,
          <span className="text-sky-400 font-medium">
            {" "}React
          </span>,
          <span className="text-sky-400 font-medium">
            {" "}Node.js
          </span>,
          <span className="text-sky-400 font-medium">
            {" "}MongoDB
          </span>,
          <span className="text-sky-400 font-medium">
            {" "}MySQL
          </span>
          and
          <span className="text-sky-400 font-medium">
            {" "}PostgreSQL
          </span>.
        </p>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          Alongside development, I actively practice
          <span className="text-sky-400 font-medium">
            {" "}Data Structures & Algorithms (DSA)
          </span>
          to strengthen my problem-solving skills and deepen my
          understanding of software engineering fundamentals.
        </p>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          Currently, I am expanding my knowledge of
          <span className="text-sky-400 font-medium">
            {" "}Docker
          </span>,
          <span className="text-sky-400 font-medium">
            {" "}Kubernetes
          </span>,
          and
          <span className="text-sky-400 font-medium">
            {" "}Cloud Technologies
          </span>
          while building production-ready applications.
        </p>
      </motion.div>

      {/* RIGHT STATS */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-5"
      >
        <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-sky-500/50 transition duration-300">
          <h3 className="text-4xl font-bold text-sky-400">
            10+
          </h3>

          <p className="text-slate-400 mt-2">
            Projects Built
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-sky-500/50 transition duration-300">
          <h3 className="text-4xl font-bold text-sky-400">
            15+
          </h3>

          <p className="text-slate-400 mt-2">
            Technologies
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-sky-500/50 transition duration-300">
          <h3 className="text-4xl font-bold text-sky-400">
            200+
          </h3>

          <p className="text-slate-400 mt-2">
            DSA Problems
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-sky-500/50 transition duration-300">
          <h3 className="text-4xl font-bold text-sky-400">
            Daily
          </h3>

          <p className="text-slate-400 mt-2">
            Learning & Growth
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

);
}

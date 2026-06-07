import { motion } from "framer-motion";

const educationData = [
  {
     year: "2025 - 2027",
    degree: "Master of Science in Computer Science",
    college: "Nandanam Arts and Science College",
  },
  {
    year: "2022 - 2025",
    degree: "Bachelor of Computer Applications",
    college: "The New College",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#0B1120] px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h4 className="text-sky-400 font-semibold mb-4 tracking-wider">
            EDUCATION
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic Journey
          </h2>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative border-l-2 border-sky-500 ml-4">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}

              <div
                className="
                absolute
                -left-[42px]
                top-2
                w-5
                h-5
                rounded-full
                bg-sky-500
                border-4
                border-[#0B1120]
                "
              />

              {/* Card */}

              <div
                className="
                bg-[#111827]
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-sky-500/50
                transition
                duration-300
                "
              >
                <p className="text-sky-400 font-semibold mb-3">
                  {edu.year}
                </p>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-slate-400 text-lg">
                  {edu.college}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
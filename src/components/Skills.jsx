import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "Python"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0B1120] px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h4 className="text-sky-400 font-semibold mb-4 tracking-wider">
            MY SKILLS
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
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
              <h3 className="text-2xl font-bold text-sky-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-sky-500/10
                    border
                    border-sky-500/20
                    text-sky-300
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
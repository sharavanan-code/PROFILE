import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0B1120] px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h4 className="text-sky-400 font-semibold mb-4 tracking-wider">
            PROJECTS
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Work
          </h2>
        </motion.div>

        {/* PROJECT CARDS */}

        <div className="space-y-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              {project.featured && (
                <span
                  className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-sky-500/10
                  text-sky-400
                  text-sm
                  mb-5
                  "
                >
                  Featured Project
                </span>
              )}

              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 text-lg mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
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
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-sky-500
                hover:bg-sky-400
                transition
                font-medium
                "
              >
                <FaGithub />
                View Source Code
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
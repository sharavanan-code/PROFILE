import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Message Sent Successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error);
        alert("Failed To Send Message");
      }
    );
};

  return (
    <section
      id="contact"
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
            CONTACT
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Build Something Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I'm always open to discussing new opportunities,
              collaborations, freelance work, and exciting projects.
            </p>

            <div className="space-y-6">

              <a
  href="mailto:sharavanan045@gmail.com"
  className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition"
>
  <FaEnvelope size={22} />
  G-Mail
</a>
              

            <a
  href="https://www.linkedin.com/in/sharavanan045/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition"
>
  <FaLinkedin size={22} />
  LinkedIn
</a>

             <a
  href="https://github.com/sharavanan-code"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition"
>
  <FaGithub size={22} />
  GitHub
</a>

            <a
  href="https://leetcode.com/u/code_with_sharavanan/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition"
>
  <SiLeetcode size={22} />
  LeetCode
</a>

            </div>

            <div className="mt-10">
              <h3 className="text-white font-semibold mb-4">
                Available For
              </h3>

              <ul className="text-slate-400 space-y-2">
                <li>• Full-Time Opportunities</li>
                <li>• Freelance Projects</li>
                <li>• Collaboration</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            bg-[#111827]
            border
            border-slate-800
            rounded-3xl
            p-8
            "
          >
            <div className="space-y-5">

              <input
                name="user_name"
                type="text"
                placeholder="Full Name"
                required
                className="
                w-full
                p-4
                rounded-xl
                bg-[#1F2937]
                border
                border-slate-700
                outline-none
                text-white
                "
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email Address"
                required
                className="
                w-full
                p-4
                rounded-xl
                bg-[#1F2937]
                border
                border-slate-700
                outline-none
                text-white
                "
              />

              <input
                name="user_phone"
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                p-4
                rounded-xl
                bg-[#1F2937]
                border
                border-slate-700
                outline-none
                text-white
                "
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="
                w-full
                p-4
                rounded-xl
                bg-[#1F2937]
                border
                border-slate-700
                outline-none
                resize-none
                text-white
                "
              />

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-xl
                bg-sky-500
                hover:bg-sky-400
                transition
                font-semibold
                "
              >
                Send Message
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
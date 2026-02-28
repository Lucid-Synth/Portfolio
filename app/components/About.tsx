import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 border-t border-white/5 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none select-none uppercase font-mono text-[10px] tracking-[1em] vertical-text opacity-20">
        Engineering_Mindset
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 md:gap-24 items-start">
        {/* Left: The Narrative */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[14px] text-blue-500 uppercase tracking-[0.5em] mb-12 block">
              / Breif
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 leading-[1.1] mb-10">
              Crafting digital <br />
              <span className="font-serif-display italic font-normal text-zinc-500">
                architecture
              </span>{" "}
              with <br />
              precision & purpose.
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light font-sans max-w-xl">
              <p>
                I’m a Computer Science student passionate about designing
                systems that are both reliable and thoughtfully engineered. I
                focus on writing clean, maintainable code and building
                applications that scale seamlessly from concept to production.
              </p>
              <p>
                My interests lie in distributed systems, backend architecture,
                and modern web technologies. I enjoy translating complex
                technical challenges into efficient, real-world solutions while
                continuously refining my understanding of performance, security,
                and system design.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Technical Specs / Focus Areas */}
        <div className="md:col-span-5 md:pt-24 md:block hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 border border-white/5 bg-zinc-900/10 backdrop-blur-sm rounded-3xl"
          >
            <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600 mb-8 pb-4 border-b border-white/5">
              Core_Focus_Areas
            </h3>

            <ul className="space-y-6">
              {[
                { title: "Full-Stack Dev", detail: "React, Next.js, Node" },
                {
                  name: "Castoro",
                  title: "Systems Design",
                  detail: "Scalable Architecture",
                },
                { title: "Database Mgmt", detail: "PostgreSQL, MongoDB" },
                { title: "DevOps", detail: "Docker, CI/CD Pipelines" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="group flex justify-between items-end border-b border-white/5 pb-4 last:border-0"
                >
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                      Area_0{i + 1}
                    </p>
                    <p className="text-lg font-bold tracking-tight text-zinc-200 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-600 text-right">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

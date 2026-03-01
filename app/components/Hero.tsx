import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for work
          </div>

          <h1 className="flex text-[14vw] sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-none md:leading-[0.85]">
            Hi, I'm <br className="block md:hidden" />
            <span className="font-cursive text-blue-500 dark:text-blue-400 tracking-normal ml-2">
              Ujjwal
            </span>
          </h1>

          <p className="text-md md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
            I’m a Computer Science student focused on building robust digital
            systems. I enjoy turning complex problems into simple, scalable
            solutions through thoughtful design and clean code. My interests
            span full-stack development, system architecture, and performance
            optimization.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <a
              href="#projects"
              className="px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              View Work <ArrowRight size={18} />
            </a>
            <div className="flex gap-6 text-zinc-600">
              <a href="https://github.com/Lucid-Synth" className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ujjwal-anand-ba10b032a" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dev.lucidsynth@gmail.com" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              {/* <a href="Resume" className="hover:text-white transition-colors">
                <Download size={24} />
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

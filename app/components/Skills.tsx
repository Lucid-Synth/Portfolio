import { motion } from 'framer-motion'
import { 
  SiJavascript, SiPython, SiNextdotjs, SiTailwindcss, 
  SiPostgresql, SiDocker, SiGit, SiReact, SiTypescript, SiNodedotjs
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";

function Skills() {

      const skills = [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'AWS', icon:<FaAws />}
      ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden flex items-center">
      
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-[#080808] to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-24 pr-24"
          animate={{ x: [0, -2000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 50, 
            ease: "linear" 
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-6 text-zinc-300 hover:text-zinc-200 transition-colors duration-700 cursor-default group">
              <span className="text-5xl md:text-7xl opacity-40 group-hover:opacity-100 transition-all transform group-hover:scale-110">
                {skill.icon}
              </span>
              <span className="text-2xl md:text-4xl font-black uppercase tracking-[0.2em] opacity-20 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </section>
  )
}

export default Skills
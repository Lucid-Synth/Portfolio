import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const projects = [
    {
      title: 'Remind',
      description: 'A full-stack web application that helps you organize valuable YouTube videos and personal thoughts in one centralized, distraction-free workspace.',
      tags: ['Node.js', 'React', 'PostgreSQL', 'Drizzle'],
      github: 'https://github.com/Lucid-Synth/Remind',
      demo: 'https://remind-rouge.vercel.app',
      accent: 'border-blue-500/50'
    },
    {
      title: 'Miny',
      description: 'A modern full-stack URL shortener that transforms long URLs into clean, shareable links. ',
      tags: ['Express.js', 'PostgreSQL', 'Drizzle', 'React'],
      github: 'https://github.com/Lucid-Synth/miny',
      demo: 'https://miny-nine.vercel.app',
      accent: 'border-emerald-500/50'
    },
    {
      title: 'Expenza',
      description: 'A full-stack expense tracking web app to easily record, categorize, and analyze your daily spending.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/Lucid-Synth/Expenza',
      demo: 'https://expenza-eight.vercel.app/',
      accent: 'border-purple-500/50'
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[14px] text-blue-500 uppercase tracking-[0.5em] mb-12 block">
                / Engineering_logs
              </span>
              <p className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-200">
                Featured <span className="text-zinc-600 font-castoro italic font-light lowercase">Works</span>
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {projects.map((project, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                key={idx} 
                className={`group relative p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 transition-all duration-500 ${project.accent} border-t-2 flex flex-col justify-between min-h-100 overflow-hidden`}
              >
                {/* Interactive Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />
                
                <div>
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-4xl font-castoro text-zinc-800 group-hover:text-blue-500/30 transition-colors duration-500">
                      0{idx + 1}
                    </span>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[8px] uppercase font-black tracking-[0.2em] text-zinc-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500 mb-6 relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed grow font-light relative z-10 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom-aligned Links */}
                <div className="flex gap-6 mt-8 relative z-10 border-t border-white/5 pt-6">
                  <a href={project.github} className="flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 hover:text-white transition-colors group/link">
                    <Github size={16} /> <span>Source</span>
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 hover:text-white transition-colors group/link">
                    <ExternalLink size={16} /> <span>Live</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects
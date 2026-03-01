import { motion } from 'framer-motion'
function Contact() {
  return (
    <section id="contact" className="py-64 px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-200 md:h-200 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
        <motion.div whileInView={{ opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-[18vw] md:text-[15vw] lg:text-[14rem] font-black tracking-tighter mb-10 md:mb-16 text-zinc-500/40 select-none uppercase leading-[0.8]">
            Connect
          </h2>
          <a href="mailto:dev.lucidsynth@gmail.com" className="text-2xl md:text-7xl font-light text-zinc-500 hover:text-white transition-all duration-500 underline underline-offset-16 md:underline-offset-20 decoration-1 decoration-zinc-800 hover:decoration-blue-500">
            lucidsynth@gmail.com
          </a>
          <p className="mt-20 text-zinc-600 font-mono text-[13px] tracking-[0.5em] uppercase">
            Available for remote work & collaborations
          </p>
        </motion.div>
      </section>
  )
}

export default Contact
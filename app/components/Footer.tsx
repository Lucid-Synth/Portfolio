function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="w-full md:w-auto">
            <div className="text-2xl font-black tracking-tighter mb-4 font-castoro uppercase">Lucid-Synth<span className="text-blue-500 font-sans">.</span></div>
            <p className="text-zinc-600 text-sm max-w-xs font-light uppercase tracking-widest leading-loose">
              Designing minimalist systems <br /> for a complex web.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              <a href="https://x.com/LucidSynth" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://github.com/Lucid-Synth" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ujjwal-anand-ba10b032a" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em]">
              © 2026 Lucid-Synth
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
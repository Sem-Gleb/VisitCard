import { motion } from "framer-motion";
import { Download, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Layer 1: 3D Background (z-index: 0) */}
      <HeroBackground />
      
      {/* Layer 2: Dark overlay for visibility (z-index: 1) */}
      <div 
        className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-40" 
        style={{ 
          zIndex: 1,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13, 16, 23, 0.7) 100%)'
        }} 
      />
      
      {/* Layer 3: Main content (z-index: 10) */}
      <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Logo */}
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-white text-3xl font-bold relative overflow-hidden group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, hsl(188 94% 43%), hsl(217 91% 60%))',
                  boxShadow: '0 0 40px hsl(188 94% 43% / 0.3)'
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(188 94% 43%), hsl(271 81% 56%))'
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  animate={{ 
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 font-extrabold tracking-tight">SG</span>
              </motion.div>
            </motion.div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <motion.span
                className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Семенченко Глеб
              </motion.span>
              <motion.div
                className="absolute -inset-1 blur-xl"
                style={{
                  background: 'linear-gradient(90deg, hsl(188 94% 43% / 0.2), hsl(188 94% 43% / 0.2))',
                  zIndex: -1
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </h1>
            
            {/* Job Title Badge */}
            <motion.div
              className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-xl md:text-2xl text-primary font-semibold relative z-10">
                Frontend-разработчик
              </p>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Создаю быстрые, отзывчивые и масштабируемые интерфейсы
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {["React", "TypeScript", "Next.js", "Redux"].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg text-foreground font-medium"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px hsl(188 94% 43% / 0.3)" 
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              asChild
              className="gap-2 text-white border-0 hover:scale-105 transition-all"
              style={{
                background: 'linear-gradient(135deg, hsl(188 94% 43%), hsl(217 91% 60%))',
                boxShadow: '0 0 40px hsl(188 94% 43% / 0.3)'
              }}
            >
              <a href="/resume.pdf" download="Резюме_Семенченко_Глеб.pdf">
                <Download className="w-5 h-5" />
                Скачать резюме
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              Связаться
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="tel:+79110393363" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +7 (911) 039-3363
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:cops41588@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              cops41588@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="https://t.me/fgh011x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Send className="w-4 h-4" />
              @fgh011x
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

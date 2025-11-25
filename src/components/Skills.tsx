import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Palette, Plug, Wrench, Zap } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-cyan-400",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "React Router", "LazyComponents"]
    },
    {
      icon: Layers,
      title: "State Management",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      skills: ["Redux Toolkit", "Zustand", "MobX", "React Query", "Apollo Client"]
    },
    {
      icon: Palette,
      title: "Styling",
      gradient: "from-pink-500 to-rose-500",
      iconColor: "text-rose-400",
      skills: ["TailwindCSS", "SCSS", "CSS-in-JS", "Styled Components", "Emotion", "MUI", "GSAP", "Framer Motion"]
    },
    {
      icon: Plug,
      title: "API & Data",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-emerald-400",
      skills: ["REST API", "WebSocket", "Axios", "JWT", "GraphQL"]
    },
    {
      icon: Wrench,
      title: "Tools & Build",
      gradient: "from-orange-500 to-amber-500",
      iconColor: "text-amber-400",
      skills: ["Git", "Vite", "Webpack", "Figma", "ESLint", "Prettier", "Jest", "React Testing Library", "CI/CD"]
    },
    {
      icon: Zap,
      title: "Optimization & 3D",
      gradient: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-400",
      skills: ["Core Web Vitals", "Accessibility", "SEO", "Performance", "Lazy Loading", "Three.js", "WebGL", "Code Splitting", "SSR/SSG"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Навыки</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-neutral-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Технологии и инструменты, с которыми я работаю
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/95 dark:bg-background/70 border border-border/40 dark:border-border/50 rounded-3xl p-6 shadow-lg hover:shadow-xl dark:shadow-none dark:hover:shadow-none hover:border-primary/40 transition-all group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-md`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-white text-neutral-800 border border-border/50 rounded-xl text-sm font-medium shadow-sm hover:border-primary/40 transition-colors cursor-default dark:bg-white/10 dark:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "ООО «Битфорс»",
      position: "Frontend-разработчик",
      period: "июль 2025 — настоящее время",
      current: true,
      description: "Разработка и поддержка клиентской части, интеграция с API, работа с WebSockets, оптимизация, рефакторинг.",
      technologies: ["React", "TypeScript", "React Router", "SCSS", "Next.js", "Redux Toolkit", "Axios", "MUI"]
    },
    {
      company: "КРОК",
      position: "Middle Frontend Developer",
      period: "май 2023 — июнь 2025",
      description: "Ревью кода, создание фич, pixel-perfect верстка, оптимизация UI/UX, интеграция с backend.",
      technologies: ["React", "TypeScript", "Redux", "SCSS", "REST API"]
    },
    {
      company: "SimbirSoft",
      position: "Frontend-разработчик (junior)",
      period: "январь 2022 — апрель 2023",
      description: "Разработка frontend-части личного кабинета банка. Интеграция с REST и WebSocket API.",
      technologies: ["React", "TypeScript", "Redux", "MobX", "Vite", "WebSocket"]
    },
    {
      company: "REDMADROBOT",
      position: "Frontend intern",
      period: "сентябрь 2021 — ноябрь 2021",
      description: "Разработка кастомной дизайн-системы, адаптивная верстка, оптимизация Core Web Vitals.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "Core Web Vitals"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Опыт работы</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className={`hidden md:block absolute top-6 ${
                  index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                } w-4 h-4 rounded-full ${
                  exp.current ? "bg-primary animate-glow" : "bg-primary/50"
                } border-4 border-background`}
              />

              <div className={`bg-card border ${exp.current ? "border-primary shadow-glow" : "border-border"} rounded-xl p-6 hover:shadow-soft transition-all`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 bg-primary/10 border border-primary rounded-full text-xs text-primary font-semibold">
                      Сейчас здесь
                    </span>
                  )}
                </div>
                
                <p className="text-lg font-semibold text-primary mb-2">{exp.position}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-muted border border-border rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
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

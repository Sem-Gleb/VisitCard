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
      period: "июнь 2025 — ноябрь 2025 (5 месяцев)",
      current: true,
      achievements: [
        "Разработка и поддержка клиентской части веб-приложения",
        "Разработка макетов интерфейса сайтов и веб-страниц",
        "Рефакторинг программного кода и исправление выявленных багов",
        "Работа с API адаптерами, WebSockets, JWT",
        "Разработка пользовательского интерфейса, в том числе его интерактивных элементов",
        "Оценка разработанного веб-сайта или приложения изначальному макету",
        "Оптимизация программного кода"
      ],
      technologies: ["React", "TypeScript", "React Router", "SCSS", "Next.js", "Redux Toolkit", "WebSockets", "Axios", "MUI", "LazyComponents"]
    },
    {
      company: "КРОК",
      position: "Frontend Developer (React, NextJS)",
      period: "май 2021 — май 2025 (4 года и 1 месяц)",
      achievements: [
        "Разработал и оптимизировал форму оплаты: сократил количество шагов с 5 до 2, что повысило конверсию на 40% и увеличило выручку",
        "Ускорил загрузку страниц: оптимизировал бандлы и внедрил code splitting, время загрузки снизилось на 60%, отказы уменьшились на 25%",
        "Внедрил SSR/SSG на Next.js для ключевых страниц: улучшил SEO и время первого рендера на 50%",
        "Рефакторинг устаревшего кода: миграция с Redux на Zustand, упростил управление состоянием, уменьшил размер бандла на 30%",
        "Разработал компонентную библиотеку на TypeScript и Tailwind: ускорил разработку новых фич на 35%, повысил консистентность UI",
        "Внедрил адаптивную верстку: покрытие мобильных устройств выросло до 95%, мобильный трафик увеличился на 50%",
        "Настроил CI/CD и автоматизировал тестирование: покрытие тестами выросло до 80%, количество багов в продакшене снизилось на 45%",
        "Оптимизировал работу с API: внедрил GraphQL с Apollo Client и кеширование через React Query, количество запросов сократилось на 40%, UX улучшился",
        "Создал интерактивные 3D-визуализации на Three.js и WebGL: повысил вовлеченность пользователей на 65%, время на сайте выросло на 50%",
        "Реализовал анимации на GSAP и Framer Motion: улучшил восприятие интерфейса, снизил показатель отказов на 20%"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Redux", "SCSS", "CSS-in-JS", "React Query", "Axios", "Jest", "React Testing Library", "Git", "Webpack", "Vite", "WebGL", "GraphQL", "Three.js", "GSAP", "Framer Motion"]
    },
    {
      company: "REDMADROBOT",
      position: "Frontend-разработчик intern",
      period: "сентябрь 2021 — ноябрь 2021 (3 месяца)",
      achievements: [
        "Работа с API (Axios, websockets)",
        "Разработка кастомной дизайн-системы под бренд",
        "Оптимизация dashboard для маркетплейса (SEO + lazy components)",
        "Верстка и создание адаптивных интерфейсов (Tailwind, SCSS)",
        "Улучшение метрик Core Web Vitals (LCP, CLS, INP)",
        "Написание тестов (unit, e2e на Jest и RTL)"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "SCSS", "CSS-in-JS", "React Query", "Axios", "Jest", "React Testing Library", "Git", "Webpack", "Vite", "Core Web Vitals"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-background" ref={ref}>
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-sky-500 via-primary to-purple-600 opacity-70 blur-[1px]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.01,
                rotate: index % 2 === 0 ? -0.3 : 0.3
              }}
              className={`relative mb-12 group ${
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

              <div
                className={`relative overflow-hidden rounded-3xl border p-6 transition-all text-left bg-background/85
                  ${
                    exp.current
                      ? "border-primary/60 shadow-[0_20px_45px_rgba(14,165,233,0.15)]"
                      : "border-border/50 shadow-[0_15px_40px_rgba(2,6,23,0.35)]"
                  }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-transparent to-purple-500/10" />
                <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-purple-500/20 text-primary">
                      <Building2 className="w-5 h-5" />
                    </div>
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

                <ul className="text-muted-foreground mb-4 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 flex-shrink-0" />
                      <span className="leading-relaxed text-muted-foreground/90">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-background/70 border border-border/60 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Оптимизированная форма оплаты",
      description: "Разработал и оптимизировал форму оплаты, сократив количество шагов с 5 до 2. Результат: конверсия выросла на 40%, выручка увеличилась. Применены техники UX-оптимизации, валидация в реальном времени и улучшенная обработка ошибок.",
      technologies: ["React", "TypeScript", "Next.js", "Zustand", "Tailwind CSS", "Formik", "Yup"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      title: "Оптимизация производительности с Code Splitting",
      description: "Оптимизировал бандлы и внедрил code splitting для ускорения загрузки страниц. Время загрузки снизилось на 60%, отказы уменьшились на 25%. Реализован динамический импорт компонентов и lazy loading.",
      technologies: ["Next.js", "TypeScript", "Webpack", "Vite", "LazyComponents", "Code Splitting", "Performance"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "SSR/SSG внедрение для SEO",
      description: "Внедрил Server-Side Rendering и Static Site Generation на Next.js для ключевых страниц. Улучшил SEO и время первого рендера на 50%. Реализована гибридная стратегия рендеринга для оптимальной производительности.",
      technologies: ["Next.js", "TypeScript", "SSR", "SSG", "SEO", "React Query"],
      image: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      title: "Миграция Redux на Zustand",
      description: "Провел рефакторинг устаревшего кода: миграция с Redux на Zustand. Упростил управление состоянием, уменьшил размер бандла на 30%. Улучшил читаемость кода и производительность приложения.",
      technologies: ["React", "TypeScript", "Zustand", "Redux Toolkit", "Webpack", "Code Splitting"],
      image: "bg-gradient-to-br from-orange-500 to-amber-500"
    },
    {
      title: "Компонентная библиотека на TypeScript",
      description: "Разработал переиспользуемую компонентную библиотеку на TypeScript и Tailwind CSS. Ускорил разработку новых фич на 35%, повысил консистентность UI. Создана полная документация и система дизайн-токенов.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "CSS-in-JS", "Figma"],
      image: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      title: "3D-визуализации на Three.js",
      description: "Создал интерактивные 3D-визуализации на Three.js и WebGL для повышения вовлеченности пользователей. Вовлеченность выросла на 65%, время на сайте увеличилось на 50%. Реализована оптимизация производительности для мобильных устройств.",
      technologies: ["React", "TypeScript", "Three.js", "WebGL", "GSAP", "Framer Motion", "Performance"],
      image: "bg-gradient-to-br from-indigo-500 to-purple-500"
    },
    {
      title: "GraphQL и React Query оптимизация",
      description: "Оптимизировал работу с API: внедрил GraphQL с Apollo Client и кеширование через React Query. Количество запросов сократилось на 40%, UX значительно улучшился. Реализовано умное кеширование и оптимистичные обновления.",
      technologies: ["React", "TypeScript", "GraphQL", "Apollo Client", "React Query", "Next.js"],
      image: "bg-gradient-to-br from-teal-500 to-cyan-500"
    },
    {
      title: "Dashboard для маркетплейса",
      description: "Разработал и оптимизировал dashboard для маркетплейса с фокусом на SEO и lazy components. Улучшил метрики Core Web Vitals (LCP, CLS, INP). Реализована адаптивная верстка и оптимизация производительности.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "SCSS", "React Query", "LazyComponents", "Core Web Vitals", "SEO"],
      image: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Проекты</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Избранные проекты, над которыми я работал
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-background/90 border border-border/60 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(2,6,23,0.45)] hover:shadow-[0_25px_70px_rgba(14,165,233,0.2)] transition-all"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Демо
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Код
                  </Button>
                </motion.div>
              </div>

              <div className="relative p-6">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 via-transparent to-purple-500/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background/70 border border-border/60 rounded-md text-xs font-medium"
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

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
      title: "Личный кабинет банка",
      description: "Разработка полнофункционального личного кабинета для банковского приложения с интеграцией REST API и WebSocket для real-time уведомлений.",
      technologies: ["React", "TypeScript", "Redux", "MobX", "Vite", "WebSocket"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      title: "Корпоративная платформа",
      description: "Создание масштабируемой платформы с pixel-perfect версткой, оптимизацией производительности и интеграцией с множественными API.",
      technologies: ["React", "TypeScript", "Next.js", "Redux Toolkit", "SCSS"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Кастомная дизайн-система",
      description: "Разработка переиспользуемой дизайн-системы с компонентами, документацией и оптимизацией Core Web Vitals.",
      technologies: ["React", "TypeScript", "Storybook", "CSS-in-JS", "Figma"],
      image: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce платформа",
      description: "Разработка высокопроизводительного интернет-магазина с адаптивным дизайном, корзиной и интеграцией платежных систем.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Redux Toolkit", "Stripe"],
      image: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30" ref={ref}>
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
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-soft hover:border-primary/50 transition-all"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
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

              <div className="p-6">
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
                      className="px-3 py-1 bg-muted border border-border rounded-md text-xs font-medium"
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

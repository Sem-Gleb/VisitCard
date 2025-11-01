import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Чистый код",
      description: "Пишу поддерживаемый, читаемый код с использованием лучших практик"
    },
    {
      icon: Palette,
      title: "Pixel Perfect",
      description: "Детально реализую дизайн-макеты с точностью до пикселя"
    },
    {
      icon: Zap,
      title: "Производительность",
      description: "Оптимизирую приложения для быстрой загрузки и отзывчивости"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 px-4 mt-16" ref={ref}>
      <div className="container mx-auto max-w-6xl w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 w-full"
          >
            <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none space-y-3 md:space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Frontend-разработчик с опытом более <span className="text-primary font-semibold">4 лет</span>. 
                Специализируюсь на <span className="text-primary font-semibold">React, TypeScript, Next.js</span>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Имею опыт интеграции с <span className="text-primary font-semibold">REST и WebSocket API</span>, 
                настройки взаимодействия frontend с backend, создания кастомных дизайн-систем и UI-библиотек.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Ценю чистый, поддерживаемый код и pixel-perfect верстку. 
                Всегда стремлюсь к оптимизации производительности и улучшению пользовательского опыта.
              </p>
              
              {/* API Skills highlight */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                  REST API
                </span>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                  WebSocket
                </span>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                  JWT Auth
                </span>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                  Axios
                </span>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                  API Integration
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                <span className="text-muted-foreground">Москва / Санкт-Петербург</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 md:space-y-6 w-full"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-soft hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-lg group-hover:bg-gradient-primary group-hover:shadow-glow transition-all flex-shrink-0">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      icon: GraduationCap,
      institution: "Российский государственный аграрный университет — МСХА им. К.А. Тимирязева",
      degree: "Прикладная информатика, IT-решения для бизнеса",
      location: "Москва",
      period: "Выпуск 2027",
      status: "Неоконченное высшее"
    },
    {
      icon: Code2,
      institution: "Школа 21 (Сбер)",
      degree: "Программирование и разработка ПО",
      location: "Москва",
      period: "2021 — 2022",
      status: "Завершено"
    }
  ];

  return (
    <section id="education" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Образование</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-soft hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-4 bg-primary/10 rounded-xl flex-shrink-0">
                  <edu.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 break-words">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-base md:text-lg text-primary font-semibold mb-4">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="inline-block px-4 py-2 bg-muted rounded-lg">
                    <span className="text-sm font-medium">{edu.status}</span>
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

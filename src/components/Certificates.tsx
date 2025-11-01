import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificates = [
    {
      title: "HTML",
      organization: "Минцифры России",
      file: "/certificates/html_certificate.pdf",
      description: "Основы HTML и семантической верстки"
    },
    {
      title: "CSS",
      organization: "Минцифры России",
      file: "/certificates/css_certificate.pdf",
      description: "Стилизация и адаптивная верстка"
    },
    {
      title: "ООП",
      organization: "Минцифры России",
      file: "/certificates/oop_certificate.pdf",
      description: "Объектно-ориентированное программирование"
    },
    {
      title: "API",
      organization: "Минцифры России",
      file: "/certificates/api_certificate.pdf",
      description: "Работа с REST API и интеграции"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Сертификаты</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Профессиональные сертификаты Минцифры России
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-soft hover:border-primary/50 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-gradient-primary group-hover:shadow-glow transition-all">
                  <Award className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </div>
              </div>
              
              <p className="text-sm text-primary font-semibold mb-2">
                {cert.organization}
              </p>
              
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                {cert.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="w-full gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              >
                <a 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Посмотреть
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

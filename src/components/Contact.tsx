import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, MapPin, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cops41588@gmail.com");
    setCopiedEmail(true);
    toast.success("Email скопирован в буфер обмена");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: Send,
      label: "Telegram (предпочтительно)",
      value: "@fgh011x",
      href: "https://t.me/fgh011x",
      primary: true
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (911) 039-3363",
      href: "tel:+79110393363"
    },
    {
      icon: Mail,
      label: "Email",
      value: "cops41588@gmail.com",
      href: "mailto:cops41588@gmail.com",
      copyable: true
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "Москва / Санкт-Петербург"
    }
  ];

  return (
    <section id="contacts" className="py-12 md:py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card border rounded-xl p-4 md:p-6 hover:shadow-soft transition-all group overflow-hidden ${
                item.primary ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg transition-all ${
                  item.primary 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'bg-primary/10 group-hover:bg-gradient-primary group-hover:shadow-glow'
                }`}>
                  <item.icon className={`w-6 h-6 transition-colors ${
                    item.primary ? 'text-white' : 'text-primary group-hover:text-white'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm md:text-lg font-semibold hover:text-primary transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-lg font-semibold break-words">{item.value}</p>
                  )}
                  {item.copyable && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="mt-2 gap-2 h-8"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3" />
                          Скопировано
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Копировать
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="gap-2 bg-gradient-primary text-white shadow-glow hover:shadow-glow hover:scale-105 transition-all"
          >
            <a href="/resume.pdf" download="Резюме_Семенченко_Глеб.pdf">
              <Download className="w-5 h-5" />
              Скачать резюме (PDF)
            </a>
          </Button>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Гражданство: Россия • Есть разрешение на работу • Не готов к командировкам
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

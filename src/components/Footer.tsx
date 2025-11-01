import { Github, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sem-Gleb", label: "GitHub" },
    { icon: Send, href: "https://t.me/fgh011x", label: "Telegram" },
    { icon: Mail, href: "mailto:cops41588@gmail.com", label: "Email" }
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              SG
            </div>
            <div className="text-left">
              <p className="font-bold">Семенченко Глеб</p>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Семенченко Глеб. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

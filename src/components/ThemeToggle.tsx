import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden group hover:bg-primary/10 transition-colors"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-180 dark:scale-0 text-amber-500" />
        <Moon className="absolute inset-0 h-5 w-5 rotate-180 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 text-blue-500" />
      </div>
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
}

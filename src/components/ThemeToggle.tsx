// This component is no longer functional as we're using dark theme only
// Keeping a minimal implementation for compatibility with existing code
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hidden" // Added hidden class to remove from view
      title="Dark mode enabled"
    >
      <Moon className="h-5 w-5 text-white" />
      <span className="sr-only">Dark theme</span>
    </Button>
  );
}

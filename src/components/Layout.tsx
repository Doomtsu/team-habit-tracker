import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SignInDialog } from "./SignInDialog";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    toast({
      title: isDarkMode ? "Light mode enabled" : "Dark mode enabled",
      duration: 1500,
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Welcome!",
      description: "Let's create your account to get started.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted transition-colors duration-300">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">
              HealthyHabit
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="nav-link hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform">
                Dashboard
              </Link>
              <Link to="/teams" className="nav-link hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform">
                Teams
              </Link>
              <Link to="/habits" className="nav-link hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform">
                Habits
              </Link>
              <Link to="/leaderboard" className="nav-link hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform">
                Leaderboard
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="mr-2"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <SignInDialog />
            </div>

            <button
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 animate-fade-in">
              <Link
                to="/dashboard"
                className="block nav-link py-2 hover:bg-muted rounded-lg px-3 transition-all duration-200"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/teams"
                className="block nav-link py-2 hover:bg-muted rounded-lg px-3 transition-all duration-200"
                onClick={toggleMenu}
              >
                Teams
              </Link>
              <Link
                to="/habits"
                className="block nav-link py-2 hover:bg-muted rounded-lg px-3 transition-all duration-200"
                onClick={toggleMenu}
              >
                Habits
              </Link>
              <Link
                to="/leaderboard"
                className="block nav-link py-2 hover:bg-muted rounded-lg px-3 transition-all duration-200"
                onClick={toggleMenu}
              >
                Leaderboard
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-full justify-start"
              >
                {isDarkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              <SignInDialog />
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 animate-fade-in min-h-[calc(100vh-180px)]">
        {children}
      </main>

      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 HealthyHabit Team Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
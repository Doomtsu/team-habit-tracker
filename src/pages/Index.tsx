import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Users,
  Trophy,
  TrendingUp,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    toast({
      title: "Welcome!",
      description: "Let's create your account to get started.",
    });
    navigate("/dashboard");
  };

  const features = [
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Track Habits",
      description:
        "Set and monitor daily, weekly, or monthly goals for various healthy habits.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Building",
      description:
        "Create or join teams, collaborate, and motivate each other to achieve goals.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Earn Rewards",
      description:
        "Earn badges and achievements as you and your team reach milestones.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Track Progress",
      description:
        "Visualize your progress with interactive charts and detailed analytics.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10" />
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-in">
            Build Healthy Habits{" "}
            <span className="text-primary animate-pulse-subtle">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in opacity-0 [animation-delay:200ms]">
            Join teams, track habits, and achieve your health goals with our
            comprehensive team tracking platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in opacity-0 [animation-delay:400ms]">
            <Button
              size="lg"
              className="group btn-primary relative overflow-hidden transition-all duration-300 transform hover:scale-105"
              onClick={handleGetStarted}
            >
              <span className="relative z-10 flex items-center">
                Get Started <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="dark:text-black group relative overflow-hidden transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                toast({
                  title: "Demo Video",
                  description: "Opening demo video in a new tab.",
                });
              }}
            >
              <span className="relative z-10 flex items-center">
                Watch Demo <PlayCircle className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-sm">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose HealthyHabit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-background dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already building better habits and
            achieving their health goals together.
          </p>
          <Button
            size="lg"
            className="group btn-primary relative overflow-hidden transition-all duration-300 transform hover:scale-105"
            onClick={handleGetStarted}
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
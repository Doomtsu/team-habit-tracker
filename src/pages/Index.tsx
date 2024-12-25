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
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-slide-in text-foreground dark:text-white">
          Build Healthy Habits{" "}
          <span className="text-primary">Together</span>
        </h1>
        <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in">
          Join teams, track habits, and achieve your health goals with our
          comprehensive team tracking platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-slide-in">
          <Button
            size="lg"
            className="btn-primary"
            onClick={handleGetStarted}
          >
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="dark:text-white dark:hover:text-black"
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              toast({
                title: "Demo Video",
                description: "Opening demo video in a new tab.",
              });
            }}
          >
            Watch Demo
          </Button>
        </div>
      </section>

      <section className="py-20 bg-muted dark:bg-gray-800 rounded-lg">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-white">
            Why Choose HealthyHabit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background dark:bg-gray-900 p-6 rounded-lg shadow-sm card-hover"
              >
                <div className="mb-4">{feature.icon}</div>
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
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already building better habits and
            achieving their health goals together.
          </p>
          <Button
            size="lg"
            className="btn-primary"
            onClick={handleGetStarted}
          >
            Start Your Journey <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
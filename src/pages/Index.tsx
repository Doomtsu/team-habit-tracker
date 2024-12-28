import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SignInDialog } from "@/components/SignInDialog";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Activity, Users, Trophy } from "lucide-react";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in gradient-text">
            Build Healthy Habits Together
          </h1>
          
          <p className="text-xl text-foreground/80 dark:text-gray-200 max-w-[600px] animate-fade-in delay-150">
            Track your team's health goals, celebrate achievements, and motivate each other to maintain healthy habits.
          </p>

          <div className="flex gap-4 animate-fade-in delay-300">
            {user ? (
              <Button 
                size="lg" 
                onClick={() => navigate("/dashboard")}
                className="btn-primary group"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            ) : (
              <>
                <SignInDialog />
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate("/teams")}
                  className="glass-card hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  View Teams
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg border glass-card hover-lift animate-fade-in delay-450">
              <Activity className="w-12 h-12 mb-4 text-primary mx-auto animate-pulse-subtle" />
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-gray-100">Track Progress</h3>
              <p className="text-foreground/80 dark:text-gray-200">
                Set and monitor daily, weekly, and monthly goals for various healthy habits.
              </p>
            </div>

            <div className="p-6 rounded-lg border glass-card hover-lift animate-fade-in delay-500">
              <Users className="w-12 h-12 mb-4 text-secondary mx-auto animate-pulse-subtle" />
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-gray-100">Team Competition</h3>
              <p className="text-foreground/80 dark:text-gray-200">
                Compete with other teams and earn badges for achieving milestones.
              </p>
            </div>

            <div className="p-6 rounded-lg border glass-card hover-lift animate-fade-in delay-550">
              <Trophy className="w-12 h-12 mb-4 text-primary mx-auto animate-pulse-subtle" />
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-gray-100">Stay Motivated</h3>
              <p className="text-foreground/80 dark:text-gray-200">
                Receive reminders and celebrate team achievements together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
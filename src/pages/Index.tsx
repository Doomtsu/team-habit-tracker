import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SignInDialog } from "@/components/SignInDialog";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up dark:text-white">
            Build Healthy Habits Together
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[600px] animate-fade-up delay-150 dark:text-gray-300">
            Track your team's health goals, celebrate achievements, and motivate each other to maintain healthy habits.
          </p>

          <div className="flex gap-4 animate-fade-up delay-300">
            {user ? (
              <Button size="lg" onClick={() => navigate("/dashboard")}>
                Go to Dashboard
              </Button>
            ) : (
              <>
                <SignInDialog />
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate("/teams")}
                  className="bg-white text-black dark:hover:bg-gray-100"
                >
                  View Teams
                </Button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up delay-450">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm dark:border-gray-700 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Set and monitor daily, weekly, and monthly goals for various healthy habits.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm dark:border-gray-700 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">Team Competition</h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Compete with other teams and earn badges for achieving milestones.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm dark:border-gray-700 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
              <p className="text-muted-foreground dark:text-gray-300">
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
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, Award, Medal, Trophy, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Habits = () => {
  const { toast } = useToast();

  // Placeholder data - would come from backend in real application
  const habits = [
    {
      id: 1,
      name: "Daily Exercise",
      target: "30 minutes",
      progress: 80,
      streak: 5,
    },
    {
      id: 2,
      name: "Water Intake",
      target: "8 glasses",
      progress: 60,
      streak: 3,
    },
    {
      id: 3,
      name: "Sleep Schedule",
      target: "8 hours",
      progress: 90,
      streak: 7,
    },
    {
      id: 4,
      name: "Meditation",
      target: "15 minutes",
      progress: 40,
      streak: 2,
    },
  ];

  // Placeholder badges data - would come from backend
  const teamBadges = [
    {
      id: 1,
      name: "Perfect Week",
      description: "Complete all habits for 7 days straight",
      icon: Trophy,
      earned: true,
      date: "2024-02-15",
    },
    {
      id: 2,
      name: "Early Birds",
      description: "Team completed morning habits for 5 days",
      icon: Medal,
      earned: true,
      date: "2024-02-10",
    },
    {
      id: 3,
      name: "Consistency Kings",
      description: "Maintain 80% completion rate for 2 weeks",
      icon: Award,
      earned: false,
      date: null,
    },
    {
      id: 4,
      name: "Goal Crushers",
      description: "Complete 50 team habits",
      icon: BadgeCheck,
      earned: true,
      date: "2024-02-01",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Habits</h1>
          <Button
            onClick={() => {
              toast({
                title: "Coming Soon",
                description: "Adding new habits will be available soon!",
              });
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Habit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {habits.map((habit) => (
            <Card key={habit.id}>
              <CardHeader>
                <CardTitle className="text-xl">{habit.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{habit.progress}%</span>
                    </div>
                    <Progress value={habit.progress} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Target: {habit.target}</span>
                    <span>Streak: {habit.streak} days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Team Badges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamBadges.map((badge) => (
              <Card 
                key={badge.id} 
                className={`text-center transition-all duration-300 hover:shadow-lg ${
                  !badge.earned && 'opacity-50'
                }`}
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <badge.icon className={`h-12 w-12 mx-auto ${
                      badge.earned ? 'text-primary' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className="font-semibold mb-2">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {badge.description}
                  </p>
                  {badge.earned ? (
                    <Badge variant="secondary">
                      Earned {new Date(badge.date).toLocaleDateString()}
                    </Badge>
                  ) : (
                    <Badge variant="outline">Not earned yet</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Habits;
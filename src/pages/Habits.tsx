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
import { Plus } from "lucide-react";

const Habits = () => {
  const { toast } = useToast();

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </Layout>
  );
};

export default Habits;

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
import { Plus, Bell, BarChart } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Habits = () => {
  const { toast } = useToast();

  // Placeholder data - would come from backend
  const habits = [
    {
      id: 1,
      name: "Daily Exercise",
      target: "10000 steps",
      progress: 80,
      streak: 5,
      type: "daily",
      reminderTime: "09:00",
      data: [
        { day: "Mon", value: 8000 },
        { day: "Tue", value: 9200 },
        { day: "Wed", value: 7800 },
        { day: "Thu", value: 10200 },
        { day: "Fri", value: 9600 },
      ],
    },
    {
      id: 2,
      name: "Water Intake",
      target: "8 glasses",
      progress: 60,
      streak: 3,
      type: "daily",
      reminderTime: "10:00",
      data: [
        { day: "Mon", value: 6 },
        { day: "Tue", value: 8 },
        { day: "Wed", value: 7 },
        { day: "Thu", value: 5 },
        { day: "Fri", value: 6 },
      ],
    },
    {
      id: 3,
      name: "Sleep",
      target: "8 hours",
      progress: 90,
      streak: 7,
      type: "daily",
      reminderTime: "22:00",
      data: [
        { day: "Mon", value: 7.5 },
        { day: "Tue", value: 8 },
        { day: "Wed", value: 8.2 },
        { day: "Thu", value: 7.8 },
        { day: "Fri", value: 8.1 },
      ],
    },
    {
      id: 4,
      name: "Pet Time",
      target: "30 minutes",
      progress: 40,
      streak: 2,
      type: "daily",
      reminderTime: "18:00",
      data: [
        { day: "Mon", value: 20 },
        { day: "Tue", value: 25 },
        { day: "Wed", value: 15 },
        { day: "Thu", value: 30 },
        { day: "Fri", value: 20 },
      ],
    },
  ];

  const handleAddHabit = () => {
    toast({
      title: "Coming Soon",
      description: "Adding new habits will be available soon!",
    });
  };

  const handleSetReminder = (habitId: number) => {
    toast({
      title: "Reminder Set",
      description: "You'll be notified when it's time to complete this habit.",
    });
  };

  const handleViewProgress = (habitId: number) => {
    toast({
      title: "Progress Details",
      description: "Detailed progress view coming soon!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Habits</h1>
          <Button onClick={handleAddHabit}>
            <Plus className="mr-2 h-4 w-4" /> Add Habit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {habits.map((habit) => (
            <Card key={habit.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl flex justify-between items-center">
                  {habit.name}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSetReminder(habit.id)}
                    >
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleViewProgress(habit.id)}
                    >
                      <BarChart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
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
                  <div className="h-32 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={habit.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
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
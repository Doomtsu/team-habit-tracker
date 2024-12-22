import React from "react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  Users,
  Award,
  Medal,
  BadgeCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Placeholder data - would come from backend in real application
  const stats = {
    activeStreak: 7,
    completedGoals: 12,
    teamRank: 3,
    totalPoints: 450,
    upcomingGoals: 3,
    teamMembers: 4,
  };

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
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeStreak} days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Goals</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedGoals}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Rank</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{stats.teamRank}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPoints}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Goals</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.upcomingGoals}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.teamMembers}</div>
            </CardContent>
          </Card>
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

export default Dashboard;
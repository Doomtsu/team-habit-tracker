import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, Trophy, TrendingUp } from "lucide-react";

const Teams = () => {
  const { toast } = useToast();

  // Placeholder data - this would come from your backend in a real application
  const teams = [
    {
      id: 1,
      name: "Health Warriors",
      members: 4,
      completedGoals: 12,
      activeStreak: 5,
      points: 240,
    },
    {
      id: 2,
      name: "Wellness Champions",
      members: 3,
      completedGoals: 8,
      activeStreak: 3,
      points: 180,
    },
    {
      id: 3,
      name: "Fitness Fanatics",
      members: 4,
      completedGoals: 15,
      activeStreak: 7,
      points: 320,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Teams</h1>
          <Button
            onClick={() => {
              toast({
                title: "Coming Soon",
                description: "Team creation will be available soon!",
              });
            }}
          >
            Create Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <Users className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1">Total Teams</h3>
            <p className="text-3xl font-bold">{teams.length}</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <Trophy className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1">Total Goals Completed</h3>
            <p className="text-3xl font-bold">
              {teams.reduce((acc, team) => acc + team.completedGoals, 0)}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-xl font-semibold mb-1">Highest Streak</h3>
            <p className="text-3xl font-bold">
              {Math.max(...teams.map((team) => team.activeStreak))} days
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Name</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Completed Goals</TableHead>
                <TableHead>Active Streak</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team) => (
                <TableRow key={team.id}>
                  <TableCell className="font-medium">{team.name}</TableCell>
                  <TableCell>{team.members}</TableCell>
                  <TableCell>{team.completedGoals}</TableCell>
                  <TableCell>{team.activeStreak} days</TableCell>
                  <TableCell>{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Teams;
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Users, Trophy, TrendingUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateTeamDialog } from "@/components/CreateTeamDialog";

export interface Team {
  id: number;
  name: string;
  members: number;
  completedGoals: number;
  activeStreak: number;
  points: number;
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([
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
  ]);

  const handleTeamCreated = (newTeam: Omit<Team, "id" | "completedGoals" | "activeStreak" | "points">) => {
    const teamToAdd: Team = {
      id: teams.length + 1,
      name: newTeam.name,
      members: newTeam.members,
      completedGoals: 0,
      activeStreak: 0,
      points: 0,
    };
    setTeams([...teams, teamToAdd]);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Teams</h1>
          <CreateTeamDialog onTeamCreated={handleTeamCreated} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 rounded-lg hover-lift animate-fade-in dark:bg-gray-800">
            <Users className="h-8 w-8 text-primary mb-2 animate-float" />
            <h3 className="text-xl font-semibold mb-1">Total Teams</h3>
            <p className="text-3xl font-bold">{teams.length}</p>
          </div>
          <div className="glass-card p-6 rounded-lg hover-lift animate-fade-in dark:bg-gray-800" style={{ animationDelay: "0.1s" }}>
            <Trophy className="h-8 w-8 text-primary mb-2 animate-float" />
            <h3 className="text-xl font-semibold mb-1">Total Goals Completed</h3>
            <p className="text-3xl font-bold">
              {teams.reduce((acc, team) => acc + team.completedGoals, 0)}
            </p>
          </div>
          <div className="glass-card p-6 rounded-lg hover-lift animate-fade-in dark:bg-gray-800" style={{ animationDelay: "0.2s" }}>
            <TrendingUp className="h-8 w-8 text-primary mb-2 animate-float" />
            <h3 className="text-xl font-semibold mb-1">Highest Streak</h3>
            <p className="text-3xl font-bold">
              {Math.max(...teams.map((team) => team.activeStreak))} days
            </p>
          </div>
        </div>

        <div className="glass-card rounded-lg overflow-hidden animate-fade-in dark:bg-gray-800" style={{ animationDelay: "0.3s" }}>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 dark:bg-gray-700">
                <TableHead>Team Name</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Completed Goals</TableHead>
                <TableHead>Active Streak</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team, index) => (
                <TableRow 
                  key={team.id}
                  className="hover:bg-muted/50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
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
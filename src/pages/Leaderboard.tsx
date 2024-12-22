import React from "react";
import { Layout } from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  // Placeholder data - would come from backend in real application
  const teams = [
    {
      id: 1,
      rank: 1,
      name: "Health Warriors",
      points: 2500,
      completedGoals: 125,
      streak: 15,
    },
    {
      id: 2,
      rank: 2,
      name: "Wellness Champions",
      points: 2200,
      completedGoals: 110,
      streak: 12,
    },
    {
      id: 3,
      rank: 3,
      name: "Fitness Fanatics",
      points: 2000,
      completedGoals: 100,
      streak: 10,
    },
    {
      id: 4,
      rank: 4,
      name: "Health Heroes",
      points: 1800,
      completedGoals: 90,
      streak: 8,
    },
    {
      id: 5,
      rank: 5,
      name: "Wellness Warriors",
      points: 1600,
      completedGoals: 80,
      streak: 6,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Trophy className="h-8 w-8 text-primary mr-4" />
          <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>

        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Goals Completed</TableHead>
                <TableHead>Current Streak</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team) => (
                <TableRow key={team.id}>
                  <TableCell className="font-bold">#{team.rank}</TableCell>
                  <TableCell className="font-medium">{team.name}</TableCell>
                  <TableCell>{team.points}</TableCell>
                  <TableCell>{team.completedGoals}</TableCell>
                  <TableCell>{team.streak} days</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
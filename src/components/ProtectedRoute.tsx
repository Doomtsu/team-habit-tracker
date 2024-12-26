import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireCaptain?: boolean;
}

export function ProtectedRoute({ 
  children, 
  requireAdmin = false,
  requireCaptain = false 
}: ProtectedRouteProps) {
  const { session, isAdmin, isTeamCaptain, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (loading) return;

    if (!session) {
      toast({
        title: "Access denied",
        description: "Please sign in to access this page.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    if (requireAdmin && !isAdmin) {
      toast({
        title: "Access denied",
        description: "You need administrator privileges to access this page.",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }

    if (requireCaptain && !isTeamCaptain && !isAdmin) {
      toast({
        title: "Access denied",
        description: "You need team captain privileges to access this page.",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }
  }, [session, isAdmin, isTeamCaptain, navigate, requireAdmin, requireCaptain, loading, toast]);

  if (loading) return null;
  if (!session) return null;
  if (requireAdmin && !isAdmin) return null;
  if (requireCaptain && !isTeamCaptain && !isAdmin) return null;

  return <>{children}</>;
}
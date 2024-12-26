import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

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
  const { session, isAdmin, isTeamCaptain } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/");
      return;
    }

    if (requireAdmin && !isAdmin) {
      navigate("/dashboard");
      return;
    }

    if (requireCaptain && !isTeamCaptain && !isAdmin) {
      navigate("/dashboard");
      return;
    }
  }, [session, isAdmin, isTeamCaptain, navigate, requireAdmin, requireCaptain]);

  if (!session) return null;
  if (requireAdmin && !isAdmin) return null;
  if (requireCaptain && !isTeamCaptain && !isAdmin) return null;

  return <>{children}</>;
}
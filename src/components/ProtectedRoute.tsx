import React from "react";

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
  // During development, we'll just render the children without any checks
  return <>{children}</>;
}
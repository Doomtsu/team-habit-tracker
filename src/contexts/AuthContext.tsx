import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
  isTeamCaptain: boolean;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeamCaptain, setIsTeamCaptain] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        checkUserRole(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkUserRole(session.user.id);
      } else {
        setIsAdmin(false);
        setIsTeamCaptain(false);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function checkUserRole(userId: string) {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching user role:", error);
      return;
    }

    setIsAdmin(profile?.role === "admin");
    setIsTeamCaptain(profile?.role === "team_captain");
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      toast({
        title: "Signed out successfully",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error signing out",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isAdmin,
        isTeamCaptain,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
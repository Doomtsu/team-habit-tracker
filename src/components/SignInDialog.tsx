import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function SignInDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  React.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setIsOpen(false);
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        navigate("/dashboard");
      }
      if (event === "SIGNED_OUT") {
        toast({
          title: "Signed out",
          description: "You have been signed out successfully.",
        });
      }
      if (event === "PASSWORD_RECOVERY") {
        toast({
          title: "Password updated",
          description: "Your password has been updated successfully.",
        });
      }
      if (event === "USER_UPDATED") {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="btn-primary">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to HealthyHabit</DialogTitle>
          <DialogDescription className="space-y-2">
            <p>Sign in to your account or create a new one to start tracking your team's healthy habits.</p>
            <p className="text-sm text-muted-foreground">
              Password requirements:
              <ul className="list-disc list-inside mt-1">
                <li>Minimum 6 characters long</li>
              </ul>
            </p>
          </DialogDescription>
        </DialogHeader>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            style: {
              message: {
                color: 'red',
              },
            },
          }}
          providers={[]}
          theme="light"
          localization={{
            variables: {
              sign_up: {
                password_label: 'Password (minimum 6 characters)',
                email_label: 'Email address',
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
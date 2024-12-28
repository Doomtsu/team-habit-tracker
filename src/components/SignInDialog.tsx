import { useState } from "react";
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
import { LogIn } from "lucide-react";

export function SignInDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="btn-primary group">
          Sign In
          <LogIn className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Welcome Back!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Sign in to your account to track your team's progress
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                container: {
                  width: '100%',
                },
                button: {
                  width: '100%',
                  backgroundColor: 'rgb(var(--primary))',
                  color: 'white',
                },
                anchor: {
                  color: 'rgb(var(--primary))',
                },
              },
            }}
            theme="default"
            providers={[]}
            redirectTo={window.location.origin}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
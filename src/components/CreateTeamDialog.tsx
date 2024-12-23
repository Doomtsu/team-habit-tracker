import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Team name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  maxMembers: z.string().transform((val) => parseInt(val, 10)),
});

type FormData = z.infer<typeof formSchema>;

export function CreateTeamDialog() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      maxMembers: "5",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically make an API call to create the team
      console.log("Creating team:", data);
      
      toast({
        title: "Team created!",
        description: `${data.name} has been successfully created.`,
      });
      
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create team. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Team</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
          <DialogDescription>
            Fill in the details below to create your new team.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter team name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your team's goals and purpose"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxMembers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Members</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="2"
                      max="20"
                      placeholder="Enter max team size"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Create Team</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
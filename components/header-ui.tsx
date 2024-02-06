import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Calendar, User } from "lucide-react";

export const HeaderUI = () => {
  return (
    <header className="container fixed inset-x-0 top-0 z-50 h-44 w-full bg-background px-8 pb-2 pt-8">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div>
            <span className="text-xl text-muted-foreground">Hello,</span>
            <br />
            <span className="text-2xl font-bold">Zerna</span>
          </div>
        </div>
        <div className="flex">
          <ModeToggle />
          <Button variant="ghost" className="rounded-full">
            <Calendar className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="relative mt-4 text-muted-foreground">
        <Input
          className="rounded-full bg-secondary pl-12"
          placeholder="Search"
        />
        <SearchIcon className="absolute left-4 top-3 h-4 w-4" />
      </div>
    </header>
  );
};

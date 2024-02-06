"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarFoldIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquarePlus } from "lucide-react";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className="fixed bottom-8 right-8 h-14 w-14 rounded-full py-2.5 md:h-14 md:w-14"
        >
          <MessageSquarePlus className="h-14 w-14 text-primary-foreground md:h-6 md:w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>New Group Chat</DrawerTitle>
          <DrawerDescription>Join or create new group chat</DrawerDescription>
        </DrawerHeader>
        <form action="" className="p-4">
          <div className="grid-1.5">
            <Label className="text-xs">Invite ID</Label>
            <Input />
          </div>
          <div className="relative flex items-center pt-3">
            <div className="flex-grow border-t border-muted"></div>
            <span className="mx-4 flex-shrink text-xs text-muted-foreground">
              OR
            </span>
            <div className="flex-grow border-t border-muted"></div>
          </div>
          <div className="grid-1.5 mb-4">
            <Label className="text-xs">Group Name</Label>
            <Input type="text" />
          </div>
          <Button className="w-full">Create Group</Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default FloatingActionButton;

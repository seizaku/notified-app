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

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NewNotificationButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className={"rounded-full"}>
          <CalendarFoldIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>New Notification</DrawerTitle>
          <DrawerDescription>
            Instantly notify all your members
          </DrawerDescription>
        </DrawerHeader>
        <form action="" className="space-y-2 p-4">
          <div className="grid-1.5">
            <Label className="text-xs">Notification Title</Label>
            <Input />
          </div>
          <div className="grid-1.5">
            <Label className="text-xs">Description</Label>
            <Textarea placeholder="Write desciption here.."></Textarea>
          </div>
          <div className="grid-1.5">
            <Label className="text-xs">Notification Date</Label>
            <Input type="date" />
          </div>
          <div className="grid-1.5">
            <Label className="text-xs">Place</Label>
            <Input type="text" />
          </div>
          <Button className="w-full">Notify Members</Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default NewNotificationButton;

// <Dialog>
// <DialogTrigger asChild>
//   <Button variant="outline" className={"rounded-full"}>
//     <CalendarFoldIcon />
//   </Button>
// </DialogTrigger>
// <DialogContent className="h-full w-full rounded-xl">
//   <DialogHeader>
//     <DialogTitle>New Notification</DialogTitle>
//     <DialogDescription className="text-xs">
//       Instant notificaction to all members
//     </DialogDescription>
//   </DialogHeader>
//   <form action="" className="space-y-2">
//     <div className="grid-1.5">
//       <Label className="text-xs">Notification Title</Label>
//       <Input />
//     </div>
//     <div className="grid-1.5">
//       <Label className="text-xs">Description</Label>
//       <Textarea
//         rows={24}
//         placeholder="Write desciption here.."
//       ></Textarea>
//     </div>
//     <div className="grid-1.5">
//       <Label className="text-xs">Notification Date</Label>
//       <Input type="date" />
//     </div>
//     <div className="grid-1.5">
//       <Label className="text-xs">Place</Label>
//       <Input type="text" />
//     </div>
//     <Button className="w-full">Notify Members</Button>
//   </form>
// </DialogContent>
// </Dialog>

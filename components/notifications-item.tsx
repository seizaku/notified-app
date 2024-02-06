"use client";
import { NotificationsProps } from "@/app/page";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CalendarDays,
  CalendarClock,
  HomeIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

type Props = {
  data: NotificationsProps;
};

export const NotificationItem = ({ data }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Collapsible className="animate-fade mb-2 w-full">
      <CollapsibleTrigger
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-start"
      >
        <section className="mb-2 flex cursor-pointer items-center justify-between gap-8 rounded-lg border px-4 py-2 hover:bg-secondary">
          <div>
            <h1 className="font-medium">{data.title}</h1>
            <span className="flex items-center gap-1.5 truncate text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {data.date}
            </span>
            {data.time && (
              <span className="mt-1.5 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
                <CalendarClock className="h-4 w-4" /> {data.time}
              </span>
            )}
            {data.place && (
              <span className="mt-1.5 flex gap-2 text-xs text-muted-foreground">
                <HomeIcon className="h-4 w-4" /> {data.place}
              </span>
            )}
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </section>
      </CollapsibleTrigger>
      <CollapsibleContent className="animate-fade leading-2 rounded-lg border px-4 py-2 text-sm">
        <h1 className="mb-1.5 font-medium">Description</h1>
        <p className="leading-2 font-normal">{data.desc}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

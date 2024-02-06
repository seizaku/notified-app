import { MessagesProps } from "@/app/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  data: MessagesProps;
};

export const GroupChatItem = ({ data }: Props) => {
  return (
    <a
      href="./chat/1"
      className="animate-fade mb-2 flex w-full cursor-pointer justify-between gap-8 rounded-lg p-2 px-4 hover:bg-secondary"
    >
      <div className="flex gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={`${data.chatImageUri}`} alt="wmsu-avatar" />
          <AvatarFallback>LZ</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-medium">{data.chatName}</h1>
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm text-muted-foreground">
              {data.lastMessage.sender}: {data.lastMessage.message}
            </p>
            <span className="text-xs text-muted-foreground">
              {data.lastMessage.time}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

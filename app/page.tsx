import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeaderUI } from "@/components/header-ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GroupChatItem } from "@/components/group-chat-item";
import { NotificationItem } from "@/components/notifications-item";
import FloatingActionButton from "@/components/floating-action-button";

export interface NotificationsProps {
  title: String;
  desc: String;
  date?: String;
  time?: String;
  place?: String;
}

const notifications: NotificationsProps[] = [
  {
    title: "No Classes Tomorrow",
    desc: `Dear WMSU students,

    This is to inform you that all classes for Feb 5, 2024 are canceled due to a virus outbreak. We apologize for any inconvenience this may cause and appreciate your understanding.
    
    Stay tuned for further updates and make the most of this unexpected break. If you have any urgent concerns or queries, feel free to reach out to the college administration.
    
    Thank you for your cooperation.
    
    Best regards, WMSU College Administration`,
    date: "Monday, Feb 5 2024",
  },
  {
    title: "Discrete Structures Quiz",
    desc: "Prepare quiz exam booklet. Coverage will be definition of matrix and arithmetic matrix.",
    date: "Saturday, Feb 3 2024",
    time: "9:01 am",
    place: "LR3",
  },
];

export interface MessagesProps {
  chatId: Number;
  chatName: String;
  chatImageUri: String;
  lastMessage: {
    sender: String;
    message: String;
    time: String;
  };
}

const messages: MessagesProps[] = [
  {
    chatId: 123,
    chatName: "WMSU",
    chatImageUri:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Western_Mindanao_State_University.png",
    lastMessage: {
      sender: "You",
      message: "Any updates?",
      time: "9:05 pm",
    },
  },
  {
    chatId: 456,
    chatName: "BSCS 1B",
    chatImageUri: "/download.jpg",
    lastMessage: {
      sender: "Winston",
      message: "Nein. Wala daw klase guys.",
      time: "3:00 am",
    },
  },
];

export default function Home() {
  return (
    <>
      <HeaderUI />
      <main className="mt-44 flex flex-col items-center">
        <section className="w-full">
          <Tabs defaultValue="chat" className="container mx-auto w-full">
            <TabsList className="mb-2 w-full rounded-full">
              <TabsTrigger value="chat" className="w-full rounded-full">
                All Messages
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="w-full rounded-full"
              >
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <ScrollArea className="mx-auto h-fit w-full">
                {messages.length == 0 && (
                  <p className="w-full text-center text-xs text-muted-foreground">
                    You have not joined any group chats yet.
                  </p>
                )}
                {messages.map((data, index) => (
                  <GroupChatItem key={index} data={data} />
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="notifications">
              <ScrollArea className="mx-auto h-fit w-full">
                {notifications.length == 0 && (
                  <p className="w-full text-center text-xs text-muted-foreground">
                    You currently have no notifications yet.
                  </p>
                )}
                {notifications.map((data, index) => (
                  <NotificationItem key={index} data={data} />
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </section>
        <section className="my-4 w-full"></section>
        <FloatingActionButton />
      </main>
    </>
  );
}

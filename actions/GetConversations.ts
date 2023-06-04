import prisma from "@/lib/prismadb";
import getUser from "./GetUser";

const getConversations = async () => {
  const user = await getUser();
  console.log("user", user);
  if (!user) return [];
  const messages = await prisma.conversation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      users: true,
    },
  });

  return messages;
};

export default getConversations;

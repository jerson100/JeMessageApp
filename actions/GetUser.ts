import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";

const getUser = async () => {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user?.status) {
    return null;
  }

  return user;
};

export default getUser;

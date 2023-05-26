import client from "../lib/prismadb";
import getUser from "./GetUser";

const getUsers = async () => {
  const user = await getUser();
  if (!user) return [];
  const users = await client.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      email: {
        not: user.email,
      },
      status: 1,
    },
  });
  return users;
};

export default getUsers;

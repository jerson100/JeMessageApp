import getUser from "@/actions/GetUser";
import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const us = await getUser();
    if (!us)
      return NextResponse.json(
        { message: "User not Unauthorized" },
        { status: 401 }
      );
    const body = await req.json();
    const { userId, name, isGroup, members } = body;
    if (isGroup && (!members || members.length < 2 || !name)) {
      return NextResponse.json(
        {
          message:
            "Si la conversación es un grupo entonces debe contener como mínimo dos integrantes y un nombre",
        },
        { status: 400 }
      );
    }

    if (isGroup) {
      const newConversation = await client.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map(({ value }: { value: string }) => ({ id: value })),
              {
                id: us.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      });
      return NextResponse.json(newConversation, { status: 201 });
    }

    const exitsConversation = await client.conversation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [us.id, userId],
            },
          },
          {
            userIds: {
              equals: [userId, us.id],
            },
          },
        ],
      },
    });

    if (exitsConversation.length > 0) {
      return NextResponse.json(exitsConversation[0], { status: 200 });
    }

    //create new conversation
    const newConversation = await client.conversation.create({
      data: {
        isGroup: false,
        users: {
          connect: [
            {
              id: us.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });
    return NextResponse.json(newConversation, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: "Ocurrió un error interno" },
      { status: 500 }
    );
  }
}

import getConversations from "@/actions/GetConversations";
import Link from "next/link";
import React from "react";

const MessageList = async () => {
  const messages = await getConversations();
  return (
    <div>
      {messages.map((message) => {
        return (
          <Link href={`/conversations/${message.id}`} key={message.id}>
            {JSON.stringify(message.users)}
          </Link>
        );
      })}
    </div>
  );
};

export default MessageList;

// import { Schema, model, models } from "mongoose";

// interface IMessage {
//   conversationId: Schema.Types.ObjectId;
//   senderId: Schema.Types.ObjectId;
//   body?: string;
//   image?: string;
//   seen: Schema.Types.ObjectId[];
// }

// const MessageSchema = new Schema<IMessage>(
//   {
//     conversationId: {
//       type: Schema.Types.ObjectId,
//       ref: "Conversation",
//       required: [true, "Please provide a conversationId"],
//     },
//     senderId: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: [true, "Please provide a senderId"],
//     },
//     body: String,
//     image: String,
//     seen: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// export const MessageModel =
//   models.Message || model<IMessage>("Message", MessageSchema);

// import { Schema, model, models } from "mongoose";

// interface IConversation {
//   name: string;
//   isGroup?: boolean;
//   lastMessageAt: Date;
//   users: Schema.Types.ObjectId[];
// }

// const ConversationSchema = new Schema<IConversation>(
//   {
//     name: {
//       type: String,
//       required: [true, "Please provide a name"],
//     },
//     isGroup: {
//       type: Boolean,
//       default: false,
//     },
//     lastMessageAt: {
//       type: Date,
//       default: Date.now,
//     },
//     users: [
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

// export const ConversationModel =
//   models.Conversation ||
//   model<IConversation>("Conversation", ConversationSchema);

const mongoose = require("mongoose") ;

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String, required: true },
    },
    profilePicture: String,
    mailbox: {
      inbox: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mails" }],
      outbox: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mails" }],
      drafts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mails" }],
      trash: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mails" }],
    },
  },
  {
    timestamps: true,
  }
);




const User = mongoose.model("User", userSchema);
module.exports=User

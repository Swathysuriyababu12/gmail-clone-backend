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
      inbox: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
      outbox: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
      drafts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
      trash: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
    },
  },
  {
    timestamps: true,
  }
);




const User = mongoose.model("User", userSchema);
module.exports=User
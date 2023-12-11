const mongoose=require("mongoose")

const mailSchema = mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: String,
    subject: String,
    message: String,
    read: {
      type: Boolean,
      default: false,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Email = mongoose.model("Mails", mailSchema);

module.exports = Email;

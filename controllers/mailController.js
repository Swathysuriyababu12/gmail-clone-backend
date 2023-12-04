const Mail = require("../models/mailSchema.js");

const saveSentEmails = async (request, response) => {
  try {
    if (request.body) {
      await Mail.create(request.body);

      return response
        .status(201)
        .json({ message: "Email saved successfully", success: true });
    }
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Error while Saving Email.", error: error.message });
  }
};

module.exports = { saveSentEmails };

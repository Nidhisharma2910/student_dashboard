const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://nidhi9904sharma:V8kWhmjWRAmNbIIw@cluster0.nns3sx2.mongodb.net/?retryWrites=true&w=majority");
};

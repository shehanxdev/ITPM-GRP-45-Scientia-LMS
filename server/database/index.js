const mongoose = require("mongoose");

module.exports.initDatabase = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Cozy_Hut",
    })
    .then((res) => {
      console.log("Db connected");
      return res;
    })
    .catch(() => {
      return undefined;
    });
};

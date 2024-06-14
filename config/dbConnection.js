const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        username: "pannamrajesh",
        password: "pannamrajesh",
      },
    });
    console.log(
      "DATABASE CONNECTED",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;

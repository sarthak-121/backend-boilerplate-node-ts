import mongoose from "mongoose";

const intializeDatabase = async () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
      console.log("Connected to database.....");
    })
    .catch((err: any) => {
      console.log("Error while connecting to database", err);
    });
};

export default intializeDatabase;

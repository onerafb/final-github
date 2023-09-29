import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "learnify",
    })
    .then((c) => console.log(`mongo connected`))
    .catch((e) => console.log(e));
};

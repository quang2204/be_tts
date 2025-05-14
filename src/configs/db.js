import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://quang20042204:UYQyIcW7n0QtzQPx@cluster0.uee1tkk.mongodb.net/shopquanao").then();
  } catch (error) {
    console.log(error);
  }
};

/** @format */

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongo Db connectDb : at ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

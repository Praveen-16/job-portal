import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect('mongodb+srv://praveen:praveen@cluster0.wv3dqcm.mongodb.net/jobportal_DB');

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;

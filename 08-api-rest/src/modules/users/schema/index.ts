
import mongoose, { Model, Schema } from "mongoose";
import { User } from "../../../interface";


export interface IUser extends User {}
const userSchema = new Schema({

  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number
  },

});

const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;

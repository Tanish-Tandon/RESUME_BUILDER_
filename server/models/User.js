import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      // FIXED REGEX: [a-zA-Z]{2,} yeh ensure karega ki dot (.) ke baad kam se kam 2 letters hon (.com, .in, etc.)
      validate: {
        validator: function(v) {
          return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: props => `Bhai, ${props.value} valid email format nahi hai (dot ke baad minimum 2 characters zaroori hain)!`
      }
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
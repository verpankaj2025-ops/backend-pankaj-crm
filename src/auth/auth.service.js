import User from '../users/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  return await User.create({ ...data, password: hashed });
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  return { user, token };
};

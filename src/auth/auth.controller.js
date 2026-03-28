import { registerUser, loginUser } from './auth.service.js';

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body.email, req.body.password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

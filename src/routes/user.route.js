import { validate } from "../controllers/user.controller.js";

const register = (username, password, confirmPassword) => {
  validate(username, password, confirmPassword);
};

export { register };

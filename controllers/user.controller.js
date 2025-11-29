const hashPassword = (password) => {};
const save = () => {};

const register = (username, password, confirmPassword) => {
  if (password != confirmPassword) return;
  const hashPassword = hashPassword(password);
  save();
  console.log("luu thanh cong");
};

export { register };

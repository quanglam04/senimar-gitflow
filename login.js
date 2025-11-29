const validate = (username, password) => {};
const login = (username, password, otp) => {
  validate(username, password);
  console.log("username,password,otp");
};
login();
export { login };

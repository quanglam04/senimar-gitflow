import { register } from "../routes/user.route.js";

const validate = (username, password, confirmPassword) => {
  console.log(
    "username, password dang ky thanh cong, thong tin cua user la abcs. He thong tu dong chuyen ve trang dang nhap"
  );
  console.log("fix thanh cong");
};

register("trinhlam", "123", "123");

export { validate };

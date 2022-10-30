const mySqlConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "emcuong",
  database: "fasrevo",
};

/*
win: a5k53super@gmail.com ijnrvejuadtqlzlo
linux: phungcuong2610@gmail.com ohdnegbczwdcnrka
*/

// const emailConfig = {
//   email: "a5k53super@gmail.com",
//   emailKey: "ijnrvejuadtqlzlo",
// };

const emailConfig = {
  email: "phungcuong2610@gmail.com",
  emailKey: "ohdnegbczwdcnrka",
};

const errorConfig = {
  register: {
    isExist: "Email đã tồn tại",
  },
  email: {
    notExist: "Email của bạn không tồn tại",
    notSend: "Gửi không thành công",
  },
  login: {
    accountExist: "Tài khoản của bạn không tồn tại",
    password: "Sai mật khẩu",
    accessDenied: "Quyền truy cập bị từ chối",
    invalidToken: "Mã truy cập không hợp lệ",
  },
  userDetail: {
    notAddUserDetail: "Không thể tạo mới UserDetail",
  },
  fileFilter: {
    fileError: "Không đúng dịnh dạng",
  },
  password: {
    notChange: "Đổi mật khẩu không thành công",
  },
};

const okConfig = {
  register: {
    isOK: "Đăng ký thành công",
  },
  email: {
    register: {
      isOkRegister: "Đăng ký tài khoản Fasrevo thành công",
      url: "https://youtu.be/dQw4w9WgXcQ",
    },
  },
  login: {
    isExist: "Đăng nhập thành công",
  },
  password: {
    changeOK: "Đổi mật khẩu thành công",
    forgotPassMes:
      "Chúng tôi đã gửi một email đến cho bạn. Vui lòng kiểm tra hòm thư",
  },
  userDetail: {
    addUserDetail: "Tạo mới thành công UserDetail",
  },
  category: {
    addCategory: "Thêm mới Category thành công",
    updateCategory: "Cập nhật Category thành công",
    deleteCategory: "Xóa Category thành công",
  },
};

const status = {
  ok: 1,
  error: 0,
};

const PORT = 3030;

const TOKEN_SECRET = "fasrevo6789";

export {
  mySqlConfig,
  emailConfig,
  errorConfig,
  okConfig,
  PORT,
  TOKEN_SECRET,
  status,
};

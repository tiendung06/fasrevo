import appRootPath from 'app-root-path';

// TienDzung
const mySqlConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'fasrevo',
};

// PhungCuong
// const mySqlConfig = {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "emcuong",
//   database: "fasrevo",
// };

const emailConfig = {
  email: 'a5k53super@gmail.com',
  emailKey: 'naczjedbrdvtyeyq',
};

const errorConfig = {
  register: {
    EXIST_ERROR: 'Email đã tồn tại',
  },
  login: {
    ACCOUNT_ERROR: 'Tài khoản của bạn không tồn tại',
    PASSWORD_ERROR: 'Sai mật khẩu',
  },
  jwt: {
    ACCESS_DENIED: 'Quyền truy cập bị từ chối',
    INVALID_TOKEN: 'Mã truy cập không hợp lệ',
  },
  email: {
    EXIST_ERROR: 'Email của bạn không tồn tại',
    SEND_ERROR: 'Gửi không thành công',
  },
  password: {
    CHANGE_ERROR: 'Đổi mật khẩu không thành công',
  },
  user: {
    UPDATE_USER_ERROR: 'Cập nhật thông tin không thành công',
  },
  fileFilter: {
    FILE_ERROR: 'Không đúng dịnh dạng',
  },
};

const okConfig = {
  register: {
    iS_OK: 'Đăng ký thành công',
  },
  login: {
    IS_OK: 'Đăng nhập thành công',
  },
  email: {
    register: {
      iS_OK_REGISTER: 'Đăng ký tài khoản Fasrevo thành công',
      URL: 'https://youtu.be/dQw4w9WgXcQ',
    },
    SEND_OK: 'Gửi không thành công',
  },
  password: {
    CHANGE_OK: 'Đổi mật khẩu thành công',
    FORGOT_PASS_MESSAGE:
      'Chúng tôi đã gửi một email đến cho bạn. Vui lòng kiểm tra hòm thư',
  },
  user: {
    UPDATE_USER: 'Cập nhật thông tin user thành công',
  },
  fileFilter: {
    FILE_OK: 'Đúng định dạng',
  },
};

const status = {
  OK: 1,
  ERROR: 0,
};

const PORT = 3030;

const TOKEN_SECRET = 'fasrevo6789';

const PATH = appRootPath + '\\src\\public\\images';
const IMAGE_URL = process.env.SERVER_HOST + '/image';

const vnpay = {
  VNP_TMNCODE: 'YE3SQLHZ',
  VNP_HASHSECRET: 'FPQSBHFPLTQSJOMPUEWGFWKKPUFWIQUJ',
  VNP_URL: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
  VNP_RETURNURL: 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction',
};

const PAGE_LIMIT = 20;

export {
  mySqlConfig,
  emailConfig,
  errorConfig,
  okConfig,
  PORT,
  TOKEN_SECRET,
  status,
  PATH,
  vnpay,
  PAGE_LIMIT,
  IMAGE_URL,
};

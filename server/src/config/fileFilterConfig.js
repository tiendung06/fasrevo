import { errorConfig } from "./configuration.js";

const fileFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = errorConfig.fileFilter.fileError;
    return cb(new Error(errorConfig.fileFilter.fileError), false);
  }
  cb(null, true);
};

export default fileFilter;

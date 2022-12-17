import { errorConfig, PATH } from './configuration.js';
import multer from 'multer';
import path from 'path';

const fileFilter = function (req, file, cb) {
  // Accept images only
  if (
    !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp|WEBP)$/)
  ) {
    req.fileValidationError = errorConfig.fileFilter.FILE_ERROR;
    return cb(new Error(errorConfig.fileFilter.FILE_ERROR), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

export { fileFilter, storage };

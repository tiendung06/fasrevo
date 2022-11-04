import multer from "multer";
import { fileFilter, storage } from "../config/fileFilterConfig.js";

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;

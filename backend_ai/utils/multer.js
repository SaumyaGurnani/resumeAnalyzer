const multer = require("multer");

// 1. Use memoryStorage to keep the file as a buffer
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF allowed'), false);
    }
};

// 2. Export multer with the new storage config
exports.upload = multer({ storage: storage, fileFilter: fileFilter });
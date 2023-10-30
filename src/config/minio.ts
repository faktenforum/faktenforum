import { S3Client } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import { v4 as uuidv4 } from "uuid";

export const bucket = process.env.MINIO_BUCKET_NAME!;

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!
  },

  endpoint: `http://${process.env.MINIO_HOST}:${process.env.MINIO_API_PORT}`,
  forcePathStyle: true
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    console.log("USer", req.user);
    cb(null, {
      fieldName: file.fieldname,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      user: req.user && req.user.id
    });
  },
  key: (req, file, cb) => {
    cb(null, uuidv4());
  }
});

export const s3storage = storage;

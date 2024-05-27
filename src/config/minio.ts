import { S3Client } from "@aws-sdk/client-s3";
import type { PlatformMulterFile } from "@tsed/common";
import multerS3 from "multer-s3";
import { v4 as uuidv4 } from "uuid";

export const bucket = process.env.MINIO_BUCKET_NAME!;

export type Metadata = {
  fieldName: string;
  originalName: string;
  size: number;
  user: string;
};
export type S3MulterFile = PlatformMulterFile & { key: string; etag: string; metadata: Metadata };

type User = {
  id: string;
};
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!
  },
  region: process.env.MINIO_REGION,
  endpoint: `http://${process.env.MINIO_HOST}:${process.env.MINIO_API_PORT}`,
  forcePathStyle: true
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    console.log("File", file);
    const user = req.user as User;
    cb(null, {
      fieldName: file.fieldname,
      originalName: file.originalname,

      user: user && user.id
    });
  },
  key: (req, file, cb) => {
    cb(null, uuidv4());
  }
});

export const s3storage = storage;

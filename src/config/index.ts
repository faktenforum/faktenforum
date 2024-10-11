import { readFileSync } from "fs";
import { envs } from "./envs/index";
import loggerConfig from "./logger/index";
import { type S3MulterFile, s3storage } from "./minio";
import type S3MulterFile from "~/config/minio";
import { allowedMimeTypes, type MimeType } from "~/utils/consts";
const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const fileFilter = (req: Request, file: S3MulterFile, cb: Function) => {
  if (allowedMimeTypes.includes(file.mimetype as MimeType)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDF and image files are allowed."), false);
  }
};

// eslint-disable-next-line no-undef
export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  swagger: [
    {
      path: "/api/doc",
      specVersion: "3.0.1"
    }
  ],
  passport: {
    disableSession: true
  },
  views: {
    root: "./views",
    extensions: {
      ejs: "ejs"
    }
  },
  multer: {
    storage: s3storage,
    limits: {
      files: 10,
      fileSize: 50 * 1024 * 1024 // 50MB
    },
    fileFilter
  }
  // additional shared configuration
};

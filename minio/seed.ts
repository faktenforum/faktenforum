import * as minio from 'minio'
import * as fs from 'fs'
import dotenv from "dotenv"

const folder = './minio/resources/'

dotenv.config()
const minio_bucket_name = process.env.MINIO_BUCKET_NAME || ""
const minio_access_key = process.env.MINIO_ACCESS_KEY || ""
const minio_secret_key = process.env.MINIO_SECRET_KEY || ""

const minioClient = new minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: minio_access_key,
    secretKey: minio_secret_key
});


minioClient.bucketExists(minio_bucket_name, function (e, exists) {
    if (e) {
        console.log(e)
    }

    if (!exists) {
        minioClient.makeBucket(minio_bucket_name)
    }
})


fs.readdirSync(folder).forEach(file => {
  minioClient.fPutObject(
    minio_bucket_name, 
    file, 
    folder+file,
    {},
    (err, etag) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Sucessfully uploaded ${file}`)
        }
    }
  )
});
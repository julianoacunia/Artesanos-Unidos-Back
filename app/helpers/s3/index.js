// const AWS = require('aws-sdk')

// let instance
// let s3

// class S3 {
//   constructor() {
//     if (instance) {
//       return instance;
//     }
//     AWS.config.update({
//       accessKeyId: process.env.AWS_ACCESS_KEY,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     })
//     this.s3 = new AWS.s3()
//     instance = this
//   }

//   uploadFiles = async (file, bucket) => {
//   if(!process.env.IS_TEST) {
//     // Regex to remove the first block on the base64 code, if not s3 not parse the file properly
//     const buf = Buffer.from(file.base64.split(',')[1], 'base64');
//     const params = {
//       Bucket: bucket,
//       ACL: 'public-read',
//       Key: file.name,
//       Body: buf,
//       ContentEncoding: 'base64',
//       ContentType: file.type
//     };
//     return this.s3.upload(params).promise();
//   }
//   return new Promise((resolve) => resolve({ key: 'receiptFile.key', url: 'receiptFile.Location' }));
//   }

//   deleteObject = async (key, bucket) => {
//     return this.s3.deleteObject({ Key: key, Bucket: bucket }).promise();
//   }

//   deleteObjects = async (bucket) => {
//     return this.s3.deleteObjects({ Bucket: bucket }).promise();
//   }

//   listObjects = async (bucket, folderPath) => {
//     return this.s3.listObjects({ Bucket: bucket, Prefix: folderPath }).promise();
//   }

// }

// module.exports = {
//   S3,
//   uploadFiles,
//   deleteObject,
//   deleteObjects,
//   listObjects,
// }
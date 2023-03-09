const algoliasearch = require('algoliasearch');
const {Readable } = require("stream");
require('dotenv').config();
const {
    S3Client,
    PutObjectCommand
} = require("@aws-sdk/client-s3");
const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
});

const streambuffers = require('stream-buffers');
const crypto=require('crypto');
const {formidable} = require('formidable');
export const config = {
    api: {
        bodyParser: false
    }
}
const client = algoliasearch(process.env.ALGOLIA_APP_KEY, process.env.ALGOLIA_ADMIN_KEY);
const index = client.initIndex('xrdirectory');
export default async function handler(req, res) {
    if (req.method === 'POST') {
        //index.saveObject(req.body);
        const imageData =  new streambuffers.WritableStreamBuffer({initialSize: 100 * 1024, incrementAmount: 10 * 1024});
        const streamHandler = () => {
            return imageData;
        }

        const data = await new Promise((resolve, reject) => {
            const form = formidable({fileWriteStreamHandler: streamHandler});
            form.parse(req, (err,fields, files) => {
                if (err) reject({err});
                resolve({err, fields, files});
            })
        })
        const hash = crypto.createHash('md5').update(data.fields.url).digest('hex');
        data.objectID = hash;
        data.timestamp = Date.now().valueOf();
        const uploadData = {
            objectID: hash,
            url: data.fields.url,
            timestamp: Date.now().valueOf(),
            description: data.fields.description,
            author: data.fields.author,
            image: hash
        }
        const resp = await index.saveObject(uploadData);
        const response = await S3.send(
            new PutObjectCommand({Bucket: 'webxrdirectory',
                Key: hash,
                ContentLength: imageData.size(),
                ContentType: data.files.image.mimetype,
                Body: Readable.from(imageData.getContents())})
        );
        console.log(response);
        console.log(JSON.stringify(resp));
        console.log(JSON.stringify(data));
        res.redirect(307, '/');
    } else {

    }
}
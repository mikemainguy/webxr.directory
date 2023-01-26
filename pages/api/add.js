const algoliasearch = require('algoliasearch');
require('dotenv').config();
const crypto=require('crypto');


const client = algoliasearch(process.env.ALGOLIA_APP_KEY, process.env.ALGOLIA_ADMIN_KEY);
const index = client.initIndex('xrdirectory');
export default function handler(req, res) {
    if (req.method === 'POST') {
        //index.saveObject(req.body);
        const data = req.body;
        const hash = crypto.createHash('md5').update(req.body.url).digest('hex');
        data.objectID = hash;
        data.timestamp = Date.now().valueOf();

        index.saveObject(req.body);
        console.log(JSON.stringify(data));
        res.redirect('/');
    } else {

    }
}
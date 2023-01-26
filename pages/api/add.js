export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(JSON.stringify(req.body))
        res.redirect('/');
    } else {

    }
}
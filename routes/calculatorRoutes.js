const app = require('express');
const router = app.Router();

router.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

router.post('/add', (req, res) => {
    res.json({ "result": req.body.first + req.body.second });
});

router.post('/subtract', (req, res) => {
    res.json({ "result": req.body.first - req.body.second });
});

module.exports = router;
const express = require("express");
const router = express.Router();
 
router.get('/test/:id', (req, res) => res.send('route testing : ' + req.params.id));
 
module.exports = router;
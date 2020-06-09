const express = require('express')
const router = express.Router();

router.get('/google',(req,res)=>{

    res.send('<h1>Hiii</h1>')
})

module.exports = router;
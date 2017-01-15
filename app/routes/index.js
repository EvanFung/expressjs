var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
  res.send(`
    <h1>Welcome</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height:300px;"/>
    <script src="/reload/reload.js"></script>
    `);

});

module.exports = router;

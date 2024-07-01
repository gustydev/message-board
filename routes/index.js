var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages});
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;

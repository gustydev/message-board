const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
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
  messages.unshift({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;

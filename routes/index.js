const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const messages = await Message.find().exec();
  res.render('index', {
    title: 'Message Board',
    messages: messages
  })
}))

router.post('/', [
  // Validate and sanitize input of user
  body('text', 'Message must be between 1 and 240 characters')
  .trim()
  .isLength({min: 1, max: 240})
  .escape(),
  body('user', 'Username is required')
  .trim()
  .isLength({min: 1})
  .escape(),

  asyncHandler(async(req, res, next) => {
    const errors = validationResult(req);

    const msg = new Message({
      text: req.body.text,
      user: req.body.user,
      added: new Date()
    });
    
    if (!errors.isEmpty()) {
      res.render('index', {
        title: 'Message Board',
        messages: await Message.find().exec(),
        errors: errors
      })
      return
    } else {
      await msg.save();
      res.redirect('/')
    }
  })
])

module.exports = router;

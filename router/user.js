let router = require('express').Router();
const Cryptr = require('cryptr');
var cryptr = new Cryptr("Rama")

const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'ramadevi@elonnativesystem.com', 
    pass: 'ramkumar1002', 
  },
});

const sendOTPByEmail = (toEmail) => {
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
  const mailOptions = {
    from: 'ramadevi@elonnativesystem.com',
    to: toEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('OTP email sent successfully');
    }
  });
};
const recipientEmail = 'govindaraj@elonnativesystem.com';
sendOTPByEmail(recipientEmail);

const emailCount = require('../model/model.js');
router.post('/verifyOTP', async (req, res) => {
  const {email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  try {
    const user = await User.findOne({ email });

    if (user && user.otp === otp) {
      res.json({ success: true, message: 'OTP is valid' });
    } else {
      console.log("email", email);
      console.log("otp", otp);
      res.status(401).json({ error: 'Invalid OTP' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

    router.post('/register',async (req,callback) => {
        
    
        var user = new user_Signup();
        user.firstName = req.body.firstName;
        user.lastName  = req.body.lastName;
        user.userName  = req.body.userName;
        user.email     = req.body.email;
        user.mobile    = req.body.mobile;
        //user.password  = enc;
        mobile = user.mobile
       await user.save(function (err) {              
                if(err)        
                    callback.json("User already signup by using this Email")    
                else {                    
                callback.json({
                message : "*** New user signup ***",
                 data: {
                    firstName : req.body.firstName,
                    lastName  : req.body.lastName,
                    userName  : req.body.userName,
                    email     : req.body.email,
                    mobile    : req.body.mobile,
                  
                }
                })            
            }
        })       
        }) 

var Controller = require('../controller/controller.js');
router.route('/users')
.get(Controller.index)

router.route('/users/:email')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete);

module.exports = router;

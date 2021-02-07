const express = require('express');
const nodemailer = require('nodemailer');
const config = require('./config.js');
const router = express.Router();

router.post('/', function(req, res, next) {

    let transporter = nodemailer.createTransport({
    	service: 'Gmail',
    	auth: {
    		user: config.email.address,
    		pass: config.email.password
    	}
    });

    let subjectLine = '';
    switch(req.body.areaOfInterest) {
    	case 'engagement':
    		subjectLine += 'Book a Speaking Engagement';
    		break;
    	case 'consulting':
    		subjectLine += 'Discuss Consulting Work';
    		break;
    	case 'question':
    		subjectLine += 'Ask a Question';
    		break;
    	case 'inquiry':
    		subjectLine += 'General Inquiry';
    		break;
    	case 'other':
    		subjectLine += 'Other';
    		break;
    	default:
    		subjectLine = "This subject line was set in error";
    }
    subjectLine += ' - World of Analytics';


    let bodyText = 'Method of contact: ' + req.body.contactMethod + '\n' +
    			   'Contact information: ' + req.body.contactValue + '\n\n' +
    			   req.body.freeFormText;

    let mailOptions = {
    	from: config.email.address,
    	to: config.email.destination,
    	subject: subjectLine,
    	text: bodyText
    };

    transporter.sendMail(mailOptions, function(error, info) {
    	if(error) {
    		res.json({error: error});
    	} else {
    		res.json({info: info.response});
    	}
    });
});

module.exports = router;
var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');


var nodemailer = require('nodemailer');
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true })); 






app.listen(8080);

console.log("Running at Port 8080");


 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  
});



var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });



 app.post('/myaction', function(req, res) {
		
		var str='<label for="name">Name:</label><input style="background-color:yellow" type="text" value="'+req.body.name+'" disabled>';
			str= str+'<label for="lastname">Last Name:</label><input style="background-color:yellow" type="email" value="'+req.body.lastname+'"disabled>';
			str= str+'<label for="email">Email:</label><input style="background-color:yellow" type="email" value="'+req.body.email+'"disabled>';
			
			str= str+'<label for="message">Message:</label><textarea disabled rows="4" style="background-color:yellow">'+req.body.message+'</textarea>';
		
		
		
		
	//	res.end();

 transporter.sendMail({
from: '', // sender address
    to: "", // list of receivers
      subject: 'Testing Email with html',
      text: 'This is sample text for the email',
    //  attachments: [{'filename': 'attachment.txt',content: fs.createReadStream('attachment.txt')}], -- Here we attach attachment
      html: '<p>This is a <b>sample</b> html</p><p>For the email</p><table><tr><td>1</td><td>2</td></tr><tr><td>Vikas</td><td>VIKAS</td></tr></table>'+str
  }, function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sedning email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sedning email');
      }
  });






		




	});










    


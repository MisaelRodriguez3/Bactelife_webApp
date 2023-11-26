import { Router } from 'express';
import { GoogleApis } from 'googleapis';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';



const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, phone, email, preferred_language, message } = req.body;

    const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>PhoneNumber: ${phone}</li>
            <li>User Email: ${email}</li>
            <li>Preferred Language: ${preferred_language}</li>
            
        </ul>
        <p>${message}</p>
    `;

  const CLIENTD_ID="78131165559-97s0itpdq82s6bj3jec32i57bofalrva.apps.googleusercontent.com"
  const CLIENT_SECRET="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"
  const REDIRECT_URI="https://developers.google.com/oauthplayground"
  const REFRESH_TOKEN="1//04EXvOiis5ODgCgYIARAAGAQSNwF-L9IrFUWG56AqRDV4_Imkj_VwNQuCLwFZW8w90wAWNtUophGVT_vaYtuYXtzVE8u5HXvlYak"


const oAuth2Client=new google.auth.OAuth2(CLIENTD_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});


async function sendMail(){
try{

    const accessToken=await oAuth2Client.getAccessToken()
 const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:"pruebaspepes7@gmail.com",
        clientId:CLIENTD_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken,
    },

});
const mailOptions={
  from:"Bactelife webApp <pruebaspepes7@gmail.com> ",
  to:"ovejasdelwhite@gmail.com",
  subject:"web app form message",
  html:contentHTML,
};

const result=await transporter.sendMail(mailOptions)
return result;
}catch(err){
console.log(err);
}
}
sendMail()
.then(result=> res.status(200).send("enviado"))
.catch((erorr) => console.log(error.message));


});


export default router;
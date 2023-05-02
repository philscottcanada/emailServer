import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'philscottcanada@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

const fromEmail = 'philscottcanada@gmail.com'
const toEmail = 'philsdogfood@gmail.com'
const name = 'Phil'
const htmlEmail =`<h1 style="color:orange;">Are you seeing this email in orange HTML, ${name}???</h1>`

const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: `Hi ${name}, Thank you for trying out this server`,
    html: htmlEmail
};

transporter.sendMail(mailOptions, (error, info)=>{
    if (error){
        console.log(error)
    } else {
        console.log('Email Sent: ' + info.response);
        console.log(info)
    }
});
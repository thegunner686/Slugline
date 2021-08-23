const functions = require('firebase-functions');

const nodemailer = require('nodemailer');

const admin = require("firebase-admin")
admin.initializeApp()


//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sluglinedev@gmail.com',
        pass: 'SluglineDev01'
    }
});


exports.sendEmail = functions.firestore
    .document('Emails/{emailId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `"Slugline Ask A Slug" no-reply@slugline.com`,
            to: "suadev@ucsc.edu",
            cc: snap.data().personalEmail,
            subject: 'Ask A Slug!',
            html: `<h1>Ask A Slug Contact through Slugline App</h1>
                  <p>
                    <b>Personal Return Email: </b>${snap.data().personalEmail}<br>
                    <b>School Return Email: </b>${snap.data().schoolEmail}<br>
                    <b>Phone Number: </b>${snap.data().phoneNum}<br>
                    <b>Name: </b>${snap.data().name}<br>
                    <b>What can we help with?: </b>${snap.data().description}<br>
                  </p>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });
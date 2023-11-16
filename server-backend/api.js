var express = require('express');
require('mongodb');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var ObjectId = require('mongodb').ObjectId;
const crypto = require('crypto');
const { ppid } = require('process');
var router = express.Router();

exports.setApp = function (app, client) {

    //++++++++++++++++++++++++ User APIs ++++++++++++++++++++++++++++++
    app.post('/api/login', async (req, res, next) => 
    {
    // incoming: email, password
    // outgoing: id, firstName, lastName, error

    const { email, password } = req.body;

    const db = client.db('COP4331Cards');
    const results = await db.collection('Users').find({Email:email,Password:password}).toArray();

    var id = -1; // Will display -1 as id if invalid login
    var fn = '';
    var ln = '';
    var error = '';

    var ret;

    if( results.length > 0 )
    {
        id = results[0]._id;
        fn = results[0].FirstName;
        ln = results[0].LastName;

        //ratemyride.herokuapp.com
        if (results[0].isVerified == false) {
        const msg = {
          to: results[0].email,
          from: "RateMyRide@4331cop.com",
          subject: "Please Verify Your Email",
          text: `Hello, thank you for registering to <RATEMYRIDE> 
              Please copy and paste the address below to verify your account
              http://localhost:3000/emailVerif?token=${results[0].emailToken}`,
          html: `<h1> Hello, <h1>
                <p> Thank you for registering on our site</p>
                <p> please click the link below to verify your account.</p>
                <a href=http://localhost:3000/emailVerif?token=${results[0].emailToken}>Verify account</a>`,
        }

        try {
            await sgMail.send(msg)
            error = "Please verify your email, a new verification link has been sent to your email"
            ret = { error: error };
          }
          catch (e) {
            error = e.toString();
            ret = { error: error };
          }
          return res.status(200).json(ret);
        }
  
        try {
          const token = require("./createJWT.js");
          ret = token.createToken(fn, ln, id);
        }
        catch (e) {
          ret = { error: e.message };
        }
      }
      else {
        ret = { error: "Email/Password combination incorrect" };
      }
  
      res.status(200).json(ret);
    });

    app.post('/api/register', async (req, res, next) => 
    {
        // incoming: firstName, lastName, email, password
        // outgoing: error

        const { firstName, lastName, email, password } = req.body;

        /* // Fetch the current maximum UserId
        const maxUserIdResult = await db.collection('Users').find({}, { sort: { UserId: -1 }, limit: 1 }).toArray();
        const currentMaxUserId = maxUserIdResult.length > 0 ? parseInt(maxUserIdResult[0].UserId) || 0 : 0;

        // Calculate the next UserId
        const newUserId = (parseInt(currentMaxUserId) + 1).toString(); */

        const newAccount = {
            FirstName:firstName,
            LastName:lastName,
            Email:email,
            Password:password,
            emailToken: crypto.randomBytes(64).toString('hex'),
            isVerified: false
        };

        let error = '';
        var ret;
        const db = client.db('COP4331Cards');
        try {
            // Check for existing user
            const user = await db.collection('Users').find({Email:email});
            {
                if(user)
                {
                    error = "Account with this email already exists.";
                    error = { error: error };
                    return res.status(200).json(error);
                }
            }

            const result = db.collection('Users').insertOne(newAccount);
        }
        catch (e)
        {
            error = e.toString();
        }

        const msg = {
            to: email,
            from: "RateMyRide@4331cop.com",
            subject: "Verify Your Email",
            text: `Hello, thank you for registering to <RATEMYRIDE> 
                Please copy and paste the address below to verify your account
                http://https://ratemyride-3b8d03447308.herokuapp.com//emailVerif?token=${newAccount.emailToken}`,
            html: `<h1> Hello, <h1>
                  <p> THank you for registering on our site</p>
                  <p> please click the link below to verify your account.</p>
                  <a href=https://ratemyride-3b8d03447308.herokuapp.com/emailVerif?token=${newAccount.emailToken}>Verify account</a>`,
          }

          try {
            await sgMail.send(msg)
            ret = { emailToken: newAccount.emailToken, error: error };
          }
          catch (e) {
            error = e.toString();
            ret = { error: error };
          }

          res.status(200).json(ret);
    });

    app.post('/api/emailVerif', async (req, res, next) => {
        const { emailToken } = req.body;
        const db = client.db('COP4331Cards');
        let user;
        // let error = '';
        let retMsg = '';
        var ret;
    
        try {
          user = await db.collection('Users').findOne({ "emailToken": emailToken });
          if (user) {
            const search = { 'emailToken': user.emailToken };
            const updateUser = { $set: { emailToken: null, isVerified: true } };
            await db.collection('Users').updateOne(search, updateUser);
            retMsg = 'Your Email has been verified successfully';
            ret = { retMsg: retMsg };
            return res.status(200).json(ret);
          }
    
          else {
            retMsg = 'Verification link is invalid';
            ret = { retMsg: retMsg };
            return res.status(200).json(ret);
          }
        }
        catch (e) {
          retMsg = e.toString();
          ret = { retMsg: retMsg };
          return res.status(200).json(ret);
        }    
      });

      app.post('/api/forgotPassword', async (req, res, next) => {

        const { search } = req.body;
    
        let error = '';
        const passToken = crypto.randomBytes(64).toString('hex');
        const db = client.db("COP4331Cards");
        var ret;
        let results;
    
        try {
    
          results = await db.collection('Users').findOne({ "email": search });
          if (!results) {
            error = 'Registered user does not exist with that email';
            return res.redirect('/');
          }
    
          //email = {"email": search};
          const updateUser = { $set: { "passToken": passToken } };
          user = db.collection('Users').updateOne({ "email": search }, updateUser);
        }
        catch (e) {
          error = e.toString();
          ret = { error: error };
        }
    
        const msg = {
          to: search,
          from: "RateMyRide@4331cop.com",
          subject: "Password Reset",
          text: `Forgot Password
              We have recieved a request to reset the password for your account.
              To reset password click on the link below.
              http://localhost:3000/passReset?token=${passToken}`,
          html: `<h1> Hello, <h1>
                <p>  We have recieved a request to reset the password for your account</p>
                <p> please click the link below to reset your password</p>
                <a href=http://localhost:3000/passReset?token=${passToken}>Reset Password</a>`,
        }
    
        console.log(error);
    
        try {
          await sgMail.send(msg);
          ret = { passToken: passToken, _id: results._id, error: error };
        }
        catch (e) {
          error = e.toString();
          ret = { error: error };
        }
    
        res.status(200).json(ret);
      });

      app.post('/api/resetPassword', async (req, res, next) => {

        var ObjectID = require('mongodb').ObjectId;
        const { password, passToken } = req.body;
        const db = client.db("COP4331Cards");
    
        let error = '';
    
        try {
          user = await db.collection('Users').findOne({ "passToken": passToken });
          if (!user) {
            error = 'Password reset link is invalid, please request a new email';
            return res.redirect('/');
          }
    
          const search = { "passToken": passToken };
          const updatePass = { $set: { Password: password, passToken: null } };
    
          const result = db.collection('Users').updateOne(search, updatePass);
        }
        catch (e) {
          error = e.toString();
        }
    
        var ret = { error: error };
        res.status(200).json(ret);
    
      });
    
    // +++++++++++++++++++++++++++++ Theme Park APIs +++++++++++++++++++++++
    app.post('/api/getAllThemeParks', async (req, res, next) => {
        // incoming: 
        // outgoing: allThemeParks, log
        
        var log = "";
        const db = client.db('COP4331Cards');
        const themeParks = await db.collection('ThemeParks').find({}).toArray();
    
        if (themeParks.length > 0)
        {
            const mappedThemeParks = themeParks.map(themePark => ({
            themeParkId: themePark._id,
            themePark: themePark.ThemePark,
            city: themePark.City,
            state: themePark.State,
            // Add other fields as needed
            }));
            log = "Success.";
            var ret = { allThemeParks:mappedThemeParks, log:log};
            res.status(200).json(ret);
        } 
        else{
            log = "No theme parks found.";
            var ret = { log:log };
            res.status(200).json(ret);
        }
    });

    // +++++++++++++++++++++++++++++ Ride APIs +++++++++++++++++++++++++++++
    app.post('/api/searchRide', async (req, res, next) => {

    // incoming: rideName
    // outgoing: rides, error

    const { rideName } = req.body;
    const db = client.db('COP4331Cards');

    let rides = [];
    let error = '';

    const results = await db.collection('Rides').find({ Ride: rideName }).toArray();

    if (results.length > 0) {
        rides = results.map(ride => ({
        rideName: ride.Ride,
        description: ride.Description,
        themeParkId: ride.ThemeParkID,
        rideId: ride._id // Optionally include the ride ID in the response
        }));
    } 
    else {
        error = 'No rides found with the specified name.';
    }

    res.status(200).json({ rides, error });
    });


    app.post('/api/addRide', async (req, res, next) =>
    {
    // incoming: rideName, description, themeParkId
    // outgoing: error
        
    const { rideName, description, themeParkId } = req.body;
        
    const newRide = {Ride:rideName,Description:description,ThemeParkID:themeParkId};
    var error = '';

    try
    {
        const db = client.db('COP4331Cards');
        const result = db.collection('Rides').insertOne(newRide);
    }
    catch(e)
    {
        error = e.toString();
    }

    var ret = { error: error };
    res.status(200).json(ret);
    });


    //++++++++++++++++++++++++++++++++ Review APIs ++++++++++++++++++++++++++++++++++++++++
    app.post('/api/addReview', async (req, res, next) =>
    {
    // incoming: rideId, userId, thrill, theme, length, overall, review
    // outgoing: error
        
    const { rideId, userId, thrill, theme, length, overall, review } = req.body;
    var error = '';

    const db = client.db('COP4331Cards');
    const results = await db.collection('Reviews').find({RideID:rideId,UserID:userId}).toArray();
    if(results.length > 0)
    {
        error = "You have already reveiwed this ride! Either edit existing review or delete it before creating a new one.";
    }
    else
    {
        const newReview = {RideID:rideId,UserID:userId,Thrill:thrill,Theme:theme,Length:length,Overall:overall,Review:review};
        const result = db.collection('Reviews').insertOne(newReview);
        error = "Rewiew added. Thank you!";
    }

    var ret = { error: error };
    res.status(200).json(ret);
    });

    app.post('/api/deleteReview', async (req, res, next) => 
    {
    // incoming: reviewId
    // outgoing: log
        
    var log = "";
    const { reviewId } = req.body; // Assuming you send the review ID in the request body

    const db = client.db('COP4331Cards');

    // Find the review by its ID and delete it
    const deleteResult = await db.collection('Reviews').deleteOne({_id:new ObjectId(reviewId)});

    if(deleteResult.deletedCount > 0)
    {
        log = "Review deleted.";
    }
    else{
        log = "Review doesn't exist.";
    }
    // Review was successfully deleted
    var ret = { log:log };
    res.status(200).json(ret);

    });

    app.post('/api/avgScores', async (req, res, next) =>
    {
    // incoming: rideId
    // outgoing: thrillAvg, themeAvg, lengthAvg, overallAvg, error
        
    const { rideId } = req.body;
        
    var error = "";

    const db = client.db('COP4331Cards');
    const results = await db.collection('Reviews').find({RideID:rideId}).toArray();

    // Initialize vars to 0
    var thr=0;var the=0;var len=0; var ovr = 0;

    var n = results.length;
    if( n > 0 )
    {
        // Add totals
        for(let i = 0; i < n; i++)
        {
        thr += parseInt(results[i].Thrill);
        the += parseInt(results[i].Theme);
        len += parseInt(results[i].Length);
        ovr += parseInt(results[i].Overall);
        }
        // Average scores
        thr /= n; the /= n; len /= n; ovr /= n;
    }
    else
    {
        error = "No reviews yet."
    }

    // Convert back to strings always rounded to 1 decimal place
    thr = thr.toFixed(1); the = the.toFixed(1); len = len.toFixed(1); ovr = ovr.toFixed(1);

    var ret = { thrillAvg:thr, themeAvg:the, lengthAvg:len, overallAvg:ovr, error:error};
    res.status(200).json(ret);
    });
}


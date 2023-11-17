const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

(async () => {
await client.connect();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const PORT = process.env.PORT || 5055;

const app = express();

app.set('port', (process.env.PORT || 5055));

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.listen(PORT, () =>
{
console.log('Server listening on port ' + PORT);
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production')
{
  // Set static folder
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) =>
  {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
	
app.post('/api/login', async (req, res, next) => 
{
  // incoming: email, password
  // outgoing: userID, firstName, lastName, log
	
 var log = '';

  const { email, password } = req.body;

  const db = client.db('COP4331Cards');
  const results = await db.collection('Users').find({Email:email,Password:password}).toArray();

  var id = -1;// Will display -1 as id if invalid login
  var fn = '';
  var ln = '';

  if( results.length > 0 )
  {
    id = results[0]._id;
    fn = results[0].FirstName;
    ln = results[0].LastName;
    log = "Success."
  }
  else{
    log = "Account doesn't exist."
  }


  var ret = { userID:id, firstName:fn, lastName:ln, log:log};
  res.status(200).json(ret);
});

app.post('/api/register', async (req, res, next) => 
{
  // incoming: firstName, lastName, email, password
  // outgoing: log

  var log = "";

  const { firstName, lastName, email, password } = req.body;

  const db = client.db('COP4331Cards');

  /*
  // Fetch the current maximum UserId
  const maxUserIdResult = await db.collection('Users').find({}, { sort: { UserId: -1 }, limit: 1 }).toArray();
  const currentMaxUserId = maxUserIdResult.length > 0 ? parseInt(maxUserIdResult[0].UserId) || 0 : 0;

  // Calculate the next UserId
  const newUserId = (parseInt(currentMaxUserId) + 1).toString();

  var newAccount = {UserId:newUserId,FirstName:firstName, LastName:lastName, Email:email, Password:password};
  db.collection('Users').insertOne(newAccount);

  var ret = { log: "Account created" }; */

  // Check for existing user
  const results = await db.collection('Users').find({Email:email}).toArray();
  if(results.length > 0)
  {
    log = "Account with this email already exists."
  }
  else{
    var newAccount = {FirstName:firstName, LastName:lastName, Email:email, Password:password};
    db.collection('Users').insertOne(newAccount);
    log = "Account created."
  }

  var ret = { log:log };
  res.status(200).json(ret);
});

app.post('/api/searchRide', async (req, res, next) => {

  // incoming: rideName
  // outgoing: rides, log

  const { rideName } = req.body;
  const db = client.db('COP4331Cards');

  let rides = [];
  let log = '';

  const results = await db.collection('Rides').find({ Ride: { $regex: rideName, $options: 'i' } } ).toArray();

  if (results.length > 0) {
    rides = results.map(ride => ({
      rideName: ride.Ride,
      description: ride.Description,
      themeParkId: ride.ThemeParkID,
      rideId: ride._id // Optionally include the ride ID in the response
    }));
    log = "Rides found."
  } 
  else {
    log = "No rides found with the specified name.";
  }

  res.status(200).json({ rides, log });
});


app.post('/api/addRide', async (req, res, next) =>
{
  // incoming: rideName, description, themeParkId
  // outgoing: log
	
  const { rideName, description, themeParkId } = req.body;
	
  const newRide = {Ride:rideName,Description:description,ThemeParkID:themeParkId};
  var log = '';

  try
  {
    const db = client.db('COP4331Cards');
    const result = db.collection('Rides').insertOne(newRide);
  }
  catch(e)
  {
    log = e.toString();
  }

  var ret = { log: log };
  res.status(200).json(ret);
});


app.post('/api/addReview', async (req, res, next) =>
{
  // incoming: rideId, userId, thrill, theme, length, overall, review
  // outgoing: log
	
  const { rideId, userId, thrill, theme, length, overall, review } = req.body;
  var log = '';

  const db = client.db('COP4331Cards');
  const results = await db.collection('Reviews').find({RideID:rideId,UserID:userId}).toArray();
  if(results.length > 0)
  {
    log = "You have already reveiwed this ride! Either edit existing review or delete it before creating a new one.";
  }
  else
  {
    const newReview = {RideID:rideId,UserID:userId,Thrill:thrill,Theme:theme,Length:length,Overall:overall,Review:review};
    const result = db.collection('Reviews').insertOne(newReview);
    log = "Rewiew added. Thank you!";
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

app.post('/api/deleteReview', async (req, res, next) => 
{
  // incoming: reviewId
  // outgoing: log
	
  var log = "";
  const { reviewId } = req.body;

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
  // outgoing: thrillAvg, themeAvg, lengthAvg, overallAvg, log
	
  const { rideId } = req.body;
	
  var log = "";

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
    log = "Success."
  }
  else
  {
    log = "No reviews yet."
  }

  // Convert back to strings always rounded to 1 decimal place
  thr = thr.toFixed(1); the = the.toFixed(1); len = len.toFixed(1); ovr = ovr.toFixed(1);

  var ret = { thrillAvg:thr, themeAvg:the, lengthAvg:len, overallAvg:ovr, log:log};
  res.status(200).json(ret);
});

app.post('/api/getAllThemeParks', async (req, res, next) => {
  // incoming: 
  // outgoing: allThemeParks, log

  const {} = req.body;

  var log = "";
  const db = client.db('COP4331Cards');
  const themeParks = await db.collection('ThemeParks').find({}).toArray();

  if (themeParks.length > 0) {
    const mappedThemeParks = themeParks.map(themePark => ({
      themeParkId: themePark._id,
      themePark: themePark.ThemePark,
      city: themePark.City,
      state: themePark.State
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

app.post('/api/getRides', async (req, res, next) => 
{
  // incoming: themeParkId
  // outgoing: rideList, log
	
  const { themeParkId } = req.body;

  const db = client.db('COP4331Cards');
  const results = await db.collection('Rides').find({ThemeParkID:themeParkId}).toArray();

  let rides = [];
  let log = '';

  if( results.length > 0 )
  {
    rides = results.map(ride => ({
      rideName: ride.Ride,
      description: ride.Description,
      themeParkId: ride.ThemeParkID,
      rideId: ride._id
    }));
    log = "Rides found."
  }
  else {
    log = "No rides found at that theme park.";
  }

  var ret = { rideList:rides, log:log};
  res.status(200).json(ret);
});

app.post('/api/getRideInfo', async (req, res, next) => 
{
  // incoming: rideId
  // outgoing: rideName, description, themeParkId, log
	
 var log = '';

  const { rideId } = req.body;

  const db = client.db('COP4331Cards');
  const results = await db.collection('Rides').find({_id:new ObjectId(rideId)}).toArray();

  if( results.length > 0 )
  {
    rideName = results[0].Ride;
    description = results[0].Description;
    themeParkId = results[0].ThemeParkID;
    log = "Success."
  }
  else{
    log = "Ride doesn't exist."
  }


  var ret = { rideName:rideName, description:description, themeParkId:themeParkId, log:log};
  res.status(200).json(ret);
});

app.post('/api/getRideRating', async (req, res, next) =>
{
  // incoming: rideId
  // outgoing: overallAvg, log
	
  const { rideId } = req.body;
	
  var log = "";

  const db = client.db('COP4331Cards');
  const results = await db.collection('Reviews').find({RideID:rideId}).toArray();

  // Initialize vars to 0
  var ovr = 0;

  var n = results.length;
  if( n > 0 )
  {
    // Add totals
    for(let i = 0; i < n; i++)
    {
      ovr += parseInt(results[i].Overall);
    }
    // Average scores
    ovr /= n;
    log = "Success."
  }
  else
  {
    log = "No reviews yet."
  }

  // Convert back to strings always rounded to 1 decimal place
  ovr = ovr.toFixed(1);

  var ret = { overallAvg:ovr, log:log};
  res.status(200).json(ret);
});

app.post('/api/getReviews', async (req, res, next) => {

  // incoming: rideId
  // outgoing: reviewList, log

  const { rideId } = req.body;
  const db = client.db('COP4331Cards');

  let reviewList = [];
  let log = '';

  const results = await db.collection('Reviews').find({ RideID:rideId }).toArray();

  if (results.length > 0) {
    reviewList = results.map(review => ({
      thrill: review.Thrill,
      theme: review.Theme,
      length: review.Length,
      overall: review.Overall,
      review: review.Review,
      userId: review.UserID
    }));
    log = "Reviews found."
  } 
  else {
    log = "No reviews yet.";
  }

  res.status(200).json({ reviewList, log });
});
})();
const MongoClient = require('mongodb').MongoClient;
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
  // outgoing: id, firstName, lastName, error

 var error = '';

  const { email, password } = req.body;

  const db = client.db('COP4331Cards');
  const results = await db.collection('Users').find({Email:email,Password:password}).toArray();

  var id = -1;
  var fn = '';
  var ln = '';

  if( results.length > 0 )
  {
    id = results[0].ObjectId.toString()
    fn = results[0].FirstName;
    ln = results[0].LastName;
  }

  var ret = { userId:_id, firstName:fn, lastName:ln, error:''};
  res.status(200).json(ret);
});

app.post('/api/register', async (req, res, next) => 
{
  // incoming: firstName, lastName, email, password
  // outgoing: error
	
  var error = '';

  const { firstName, lastName, email, password } = req.body;

  const db = client.db('COP4331Cards');

  // Set up auto increment user ID here
  const userId = new ObjectId();

  var newAccount = {_id:userId,FirstName:firstName, LastName:lastName, Email:email, Password:password};
  db.collection('Users').insertOne(newAccount);

  var ret = { log: "Account created" };
  res.status(200).json(ret);
});

app.post('/api/addRide', async (req, res, next) =>
{
  // incoming: rideName, description, themeParkId
  // outgoing: error
	
  const { rideName, description, themeParkId } = req.body;

  // Need auto increment Ride ID here
	
  const newRide = {RideID:"1",Ride:rideName,Description:description,ThemeParkID:themeParkId};
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

app.post('/api/addReview', async (req, res, next) =>
{
  // incoming: rideId, userId, thrill, theme, length, overall, review
  // outgoing: error
	
  const { rideId, userId, thrill, theme, length, overall, review } = req.body;

  // Need auto increment review ID here
	
  const newReview = {ReviewID:"6",RideID:rideId,UserID:userId,Thrill:thrill,Theme:theme,Length:length,Overall:overall,Review:review};
  var error = '';

  try
  {
    const db = client.db('COP4331Cards');
    const result = db.collection('Reviews').insertOne(newReview);
  }
  catch(e)
  {
    error = e.toString();
  }

  var ret = { error: error };
  res.status(200).json(ret);
});

app.post('/api/deleteReview', async (req, res, next) => 
{
  // incoming: reviewId
  // outgoing: error
	
  const { reviewId } = req.body; // Assuming you send the review ID in the request body

  const db = client.db('COP4331Cards');

  // Find the review by its ID and delete it
  const deleteResult = await db.collection('Reviews').deleteOne({ReviewID:reviewId});

  // Review was successfully deleted
  var ret = { log: "Review deleted" };
  res.status(200).json(ret);

});

})();

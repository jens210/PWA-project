/**** External libraries ****/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Log all HTTP requests to the console
require('dotenv').config();
/***** CONFIGURATION *****/
const port = process.env.PORT || 8080;
const app = express();
// const router = express.Router();

app.use(bodyParser.json()); // Make sure all json data is parsed
app.use(morgan('combined')); // Log all requests to the console

/**** CONFIGURATION ****/
/***** MIDDLEWARE *****/

// Additional headers to avoid triggering CORS security errors in the browser
// Read more: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    // respond with 200
    console.log('Allowing OPTIONS');
    res.sendStatus(200);
  } else {
    // move on
    next();
  }
});
/***** MIDDLEWARE *****/
/***** DATA *****/

// Establishes the connection to the database
// const mongoURI = 'mongodb+srv://admin:admin@hoima-dsbni.mongodb.net/questionnaire?retryWrites=true'; // change me
const mongoURI = process.env.REACT_APP_MONGO;
const timestamp = new Date().toLocaleTimeString();
const db = mongoURI;

// Provides info on connection status
// MongoDB changed some things which requires the "useNewUrlParser: true" added
// https://mongoosejs.com/docs/deprecations.html
mongoose
  .connect(db, { dbName: 'questionnaire', useNewUrlParser: true })
  .then(() =>
    console.log(
      `${'\n'}🕒  ${timestamp} 🕒 ${'\n'}✅ ✅ ✅  WERE LIVE! MongoDB SUCCESSFULLY CONNECTED ${'\n'}`
    )
  )
  .catch(err => console.error(`${'\n'}❌ ❌ ❌  CONNECTION ERROR: `, err));

const answerSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  date: String,
  q1: {
    type: Number,
    required: true,
  },
  q2: {
    type: Boolean,
    required: true,
  },
  q3: {
    type: Boolean,
    required: true,
  },
  q4: {
    type: Boolean,
    required: true,
  },
  q5: {
    answerCheck: {
      type: Boolean,
      required: true,
    },
    details: String,
  },
  q6: {
    answerCheck: {
      type: Boolean,
      required: true,
    },
    details: String,
  },
  q7: {
    type: Boolean,
    required: true,
  },
  q8: {
    type: Boolean,
    required: true,
  },
  q9: {
    answerCheck: {
      type: Boolean,
      required: true,
    },
    details: String,
  },
});

// Questionnaire Model
const Answer = mongoose.model('Answer', answerSchema);

/***** DATA *****/
/***** ROUTES *****/
/***** ROUTES *****/
// GET
// GET
app.get('/answers', (req, res) => {
  Answer.find({}, (err, Answer) => res.json(Answer));
});

// POST
// POST
app.post('/answers', (req, res) => {
  let newAnswer = new Answer({
    // why not use req.body instead?
    nickname: req.body.nickname,
    date: timestamp,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7,
    q8: req.body.q8,
    q9: req.body.q9,
  });
  // if (
  //   !newAnswer.nickname ||
  //   !newAnswer.q1 ||
  //   !newAnswer.q2 ||
  //   !newAnswer.q3 ||
  //   !newAnswer.q4 ||
  //   !newAnswer.q5 ||
  //   !newAnswer.q6 ||
  //   !newAnswer.q7 ||
  //   !newAnswer.q8 ||
  //   !newAnswer.q9
  // ) {
  //   return res.status(400).json({ msg: 'Information missing' });
  // }

  newAnswer
    .save()
    .then(result => res.json({ msg: `Answer posted: ${req.body.nickname}` }))
    .catch(err => console.log(err));
});

// Telling the console that the server is running on port 8080
app.listen(port, () => console.log(`SurveyFive listening on port ${port}!`));

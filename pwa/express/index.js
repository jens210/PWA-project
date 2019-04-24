const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const port = 8080;
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Log all HTTP requests to the console

// Telling the console that the server is running on port 8080
app.listen(port, () => console.log(`SurveyFive listening on port ${port}!`));

app.use(bodyParser.json()); // Make sure all json data is parsed
app.use(morgan('combined')); // Log all requests to the console

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
const mongoURI =
  'mongodb+srv://admin:admin@hoima-dsbni.mongodb.net/questionnaire?retryWrites=true';
// const mongoURI = process.env.REACT_APP_MONGO;
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

const questionnaireSchema = new mongoose.Schema({
  order: Number,
  title: String,
  type: String,
  required: Boolean,
});

// Questionnaire Model
const Questions = mongoose.model('questions', questionnaireSchema, 'questions');

/***** DATA *****/
/***** ROUTES *****/
/***** ROUTES *****/

// GET THE QUESTIONS
app.get('/', (req, res) => {
  Questions.find({}, (err, Questions) => res.json(Questions));
});

// TODO: POST THE ANSWERS
// TODO A check on last ID will not be secure
app.post('/answers', (req, res) => {
  const answers = req.body.answers;

  if (answers.length <= 0) {
    let msg = `No answers has been provided!`;

    console.error(msg);
    res.status(401).json({ msg: msg });
    return;
  }
});

const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const port = 8080;

app.get('/', (req, res) => res.send('HI ROOT!'));

// Telling the console that the server is running on port 8080
app.listen(port, () => console.log(`SurveyFive listening on port ${port}!`));

/***** MIDDLEWARE *****/
/***** MIDDLEWARE *****/

app.use((req, res, next) => {});

/***** MIDDLEWARE *****/
/***** DATA *****/
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

// db.on('error', console.error.bind(console, 'CONNECTION ERROR: '));
// db.once('open', () => {
//   console.log('WERE LIVE');
// });

const questionnaireSchema = new mongoose.Schema({
  title: String,
  type: Number,
  required: Boolean,
});

// Questionnaire Model
const Questions = mongoose.model('question', questionnaireSchema, 'questions');

/***** DATA *****/
/***** ROUTES *****/
/***** ROUTES *****/

// GET THE QUESTIONS
router.get('/Welcome', (req, res) => {
  res.json(Questions.find().then(Questions => res.json(Questions)));
});

// POST THE ANSWERS
router.post('/Success', (req, res) => {
  const answers = req.body.answers;

  if (answers === null) {
    let msg = `No answers has been provided!`;

    console.error(msg);
    res.status(401).json({ msg: msg });
    return;
  }

  res.json(Questions.find().then(Questions => res.json(Questions)));
});

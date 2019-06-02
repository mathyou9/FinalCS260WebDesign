const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/final-memes', {
  useNewUrlParser: true
});

const memeSchema = new mongoose.Schema({
  path: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Meme = mongoose.model('Meme', memeSchema);

// Get all memes
app.get('/api/memes', async (req, res) => {
  try {
    let memes = await Meme.find().sort({
      path: 1
    });
    res.send(memes);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

// Get a single meme
app.get('/api/memes/:id', async (req, res) => {
  try {
    let meme = await Meme.findOne({
      _id: req.params.id
    });
    res.send(meme);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

// Create a meme
// This is used to populate the database, not otherwise part of the assignment
app.post('/api/memes', async (req, res) => {
  if (!req.body.path)
    return res.status(400).send({
      message: 'Missing path.'
    });
  let meme = Meme({
    path: req.body.path
  });
  try {
    meme.save();
    return res.send(meme);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

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
mongoose.connect('mongodb://localhost:27017/final-blog', {
  useNewUrlParser: true
});

const blogSchema = new mongoose.Schema({
  author: String,
  title: String,
  entry: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model('Blog', blogSchema);

app.get('/api/entries', async (req, res) => {
  try {
    let entries = await Blog.find();
    res.send(entries);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

app.post('/api/entries', async (req, res) => {
  if (!req.body.author || !req.body.title || !req.body.entry) {
    return res.status(400).send({
      message: "missing author or title or entry"
    });
  }
  const entry = new Blog({
    author: req.body.author,
    title: req.body.title,
    entry: req.body.entry
  });
  try {
    await entry.save();
    res.send(entry);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

// This is extra and not used in the assignment
app.delete('/api/entries/:id', async (req, res) => {
  try {
    await Blog.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "server error"
    });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

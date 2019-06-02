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
mongoose.connect('mongodb://localhost:27017/final-pets', {
  useNewUrlParser: true
});

const clientSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
});

const petSchema = new mongoose.Schema({
  ownerID: String,
  name: String,
  type: String,
});

const Client = mongoose.model("Client", clientSchema);
const Pet = mongoose.model("Pet", petSchema);

app.get("/api/clients", async(req, res) => {
  try {
    let clients = await Client.find();
    res.send(clients);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/clients", async(req, res) => {
  if(!req.body.name){
    return res.status(400).send({
      message: "Name field is required"
    });
  }
  if(!req.body.address){
    return res.status(400).send({
      message: "Address field is required"
    });
  }
  if(!req.body.phone){
    return res.status(400).send({
      message: "Phone field is required"
    });
  }
  const client = new Client({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    await client.save();
    res.send(client);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/clients/:id/pets", async(req,res) => {
  try{
    let pets = await Pet.find({ownerID: req.params.id});
    res.send(pets);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/clients/:id/pets", async(req, res) => {
  if(!req.body.name){
    return res.status(400).send({
      message: "Name field is required"
    });
  }
  if(!req.body.type){
    return res.status(400).send({
      message: "Type field is required"
    });
  }
  const pets = new Pet({
    ownerID: req.params.id,
    name: req.body.name,
    type: req.body.type,
  });
  try {
    await pets.save();
    res.send(pets);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

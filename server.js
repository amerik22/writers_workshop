const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");


var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/writersworkshopdb", { useNewUrlParser: true });


// db.User.create(
//   {name: "sue", password:"sue"})
//   .then(function(dbUser){
//   console.log("user create" + dbUser)
// })
// .catch(function(err){
//   console.log(err.message);
// });

// db.Project.create({
// title: "project2",
// body: "lksien  aeoi ana kela naln en a je lormem" 
// }).then(function(dbProject){

//   return db.User.findOneAndUpdate({_id: "5c9f9d4b019e987cacc2da5d"}, { $push: { projects: dbProject._id } }, { new: true })
// }).then(function(dbUser){
//   console.log("user here" + dbUser)
  
// })
// .catch(function(err){
//   console.log(err);
// });

app.get("/login", function(req, res){
  console.log("here login");
  db.User.find({}).populate("projects")
  .then(function(theUser){
   console.log(theUser);
    res.json(theUser)
  }).catch(function(err){
    res.json(err.message);
  })
});





// Send every other request to the React app
// Define any API routes before this runs



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

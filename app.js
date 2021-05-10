
const express = require("express");
const port = 5000;
const logger = require("morgan");
// Define an api
const app = express();
app.use(logger("dev"));

function middleWare(req, res, next) {
console.log("My special middle ware");
//next ();
}

app.get('/', middleWare,function(req, res){
    console.log('Alooooooo 3')
    res.send ('Hello Homepage')
})
app.get('/khoi', function(){
    console.log('Alooooooosssss 3')
})

app.get("/movies", function (req, res) {
    res.send("Thank you for coming to my home page!");
  });

app.get('/send-something', function(req, res){
   res.send ('Hello There')
})

app.get("/movies/:id/:person/:fruit/:bar?foo=bar&student=heheh", function (req, res) {
    console.log({
      query: req.query,
    });
    res.send("ID: " + req.params.id);
  });
// get post

app.get("/posts", (req, res, next) => {
    res.send( "<h1> List of post </h1>" + req.params.posts );
});
// get user id 1+2+country
app.get("/users/:id/:country", (req, res) => {
    console.log ({
        id: req.params.id,
        country: req.params.country
    })
    res.send(' <h1> ID: <h1>' + req.params.id );
    if (req.query.country === 'vietnam')
    res.send(' <h1> country: <h1>' + req.params.country );
    else 
    next()
  });




  app.use((req, res, next) => {
    const error = new Error("<h1>Resource Not Found</h1>");
    error.statusCode = 404;
    next(error);
});

function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(err.statusCode || 500);
    res.send(err.message);
}

  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
 
   
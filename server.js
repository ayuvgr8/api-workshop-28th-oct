const express = require("express");

const app = express();

const movies = [
  {
    id : 1,
    name: " The Shawshank Redemption",
    director: "Frank darabont",
    year: 1994,
    duration: "2h 45 mins",
    genre: ["crime", "Drama"],
    rate: 9.3,
  },
  {
    id : 2,
    name: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    duration: "2h 58 mins",
    genre: ["crime", "drama"],
    rate: 9.2,
  },

  {
    id : 3, 
    name: "Fight Club",
    director: "David Fincher",
    year: 1999,
    duration: "2h 19 mins",
    genre: ["drama"],
    rate: 8.8,
  },

];

app.use(express.json());


app.listen(8080, () => {
  console.log("Port number is running on port no. 8080");
});

app.get("/", (req, res) => {
  console.log("request received on /");
  res.send("Hi Ayushhhh World Airtribe !");
});


app.get("/api/movies", (req, res) => {
    console.log("request received on /api/movies");
    res.send(movies);
});

// app.get("/api/movies/1", (req, res) => {
//     res.send(movies[0]);
// });

// app.get("/api/movies/2", (req, res) => {
//     res.send(movies[1]);
// });

// app.get("/api/movies/3", (req, res) => {
//     res.send(movies[2]);
// });


app.get("/api/movies/:id", (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id, 10));  //type casting the coming ID Interger
    res.send(movie);
});

app.post("/api/movies", (req,res) =>{
    const movie = req.body;
    movie.id = movies.length + 1;
    console.log({body : req.body})
    movies.push(movie);
    res.send({success : true});
});
 

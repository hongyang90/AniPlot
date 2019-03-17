const express = require("express");
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))});

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({  //allows our app to respond to other software like postman
    extended: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/top/:page', (req, response) => {
    fetch(`https://api.jikan.moe/v3/top/anime/${req.params.page}/bypopularity`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body);
            // console.log(results.top);
            response.send(results.top);
        });
});

app.get('/anime/:id', (req, response) => {
    fetch(`https://api.jikan.moe/v3/anime/${req.params.id}/stats`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body);
            // console.log(results);
            response.send(results);
        });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
const express = require("express");
const app = express();
const path = require('path');
const fetch = require('node-fetch');
// const PORT = process.env.PORT || 8000;

app.use(express.static('frontend'));

app.use(bodyParser.urlencoded({  //allows our app to respond to other software like postman
    extended: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, './frontend/index.html')));

app.get('/anime', (req, res) => {
    fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.send(body));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
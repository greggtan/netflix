const express = require('express');
app = express();

var path = require('path');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//serve the static js html and css files!!
app.use(express.static('src/client'));
app.use(express.static('src'))


app.listen(1313, () => {
    console.log('listening on port 1313!')
})

app.get('/', (req, res) => {
    res.sendFile('C:/Users/user/Desktop/netflix/src/client/views/home.html');
})




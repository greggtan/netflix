
const express = require('express');
app = express();

var path = require('path');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mysql = require('mysql');
const util = require('util');

//create connection config to db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'netflix'
})

//promisify queries
const myQuery = util.promisify(db.query).bind(db);

//connect to db

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!')
});


app.listen(1314, () => {
    console.log('API Server listening on port 1314!')
})


app.get('/', (req, res) => {
    res.send('test!')
})

app.get('/addMovie', async (req, res) => {
    let dbMovieDetails = [
        {
            movieID: 1,
            movieCategory: 'popular',
            movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5KksxMnJrkw_dcJypT_UhPFzelf3xlXykdh8sV_IzEeE7SOJjB4TXhb_-nhmW4vql4p2jDa--NZk__UGCtl4aol1Aa-7jp2XC8SaRqS7mkmZPNsrm0O7G0av8b.jpg?r=4d2',
            movieMatchRating: 97,
            movieYear: 2020,
            movieAgeRating: 'M18',
            movieSeasons: 1,
            movieSynopsis: "After a traumatic year, an Indian-American teen just wants to spruce up her social status - but friends, family and feelings won't make it easy on her.",
            movieCast: 'Maitreyi Ramakrishnan, Poorna Jagannathan, Richa Moorjani',
            movieCreators: 'Mindy Kaling, Lang Fisher',
            movieEpisodes: [
                { episode: 1, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/image1.jpg', title: 'Pilot', duration: 28, episodeSynopsis: "After recent trauma, Devi starts her first day as a high school sophomore determined to shake off old labels and finally become cool." },

                { episode: 2, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/image2.jpg', title: '... had fun with Paxton Hall-Yoshida', duration: '29m', episodeSynopsis: "Devi hesitates to tell her friends the truth about her awkward interactions with Paxton. The prospect of an arranged marriage puts Kamala under pressure." },

                { episode: 3, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/image3.jpg', title: '... gotten drunk with the popular kids', duration: '30m', episodeSynopsis: "Devi hopes to win cool points with Paxton at a party, until a surprising turn of events happens. Hidden emotions emerge for Fabiola. Kamala makes a choice." },

                { episode: 4, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/image4.jpg', title: '... felt super Indian', duration: '22m', episodeSynopsis: "At Ganesh Puja celebrations, Devi questions how much she identifies with Indian culture, Nalini dodges acerbic aunties and Kamala frets over her future." },

                { episode: 5, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/image5.jpg', title: '... started a nuclear war', duration: '29m', episodeSynopsis: "Devi allows rumors about her and Paxton to swirl during an overnight school trip. Fabiola opens up to Eleanor, who gets upsetting news about her mother." },
            ]

        },

        {
            movieID: 2,
            movieCategory: 'popular',
            movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSW0zKZi3bsk34wxvn3dPGjFxSj06aTD6dOzEQU4_UU2J5WRBVXm-kAGkXjsf2q4KP5bD6TactIKnK1VGSPISkM4lt9AzjUAshyA79J_rQ2D-sLfU9I5Df6ZLz0oiaBpTcsy31txcwGid6SnVxd_SH80Pk3HmkRt1x5W3l6UydVR2TVSG0nXO4XNXaS_MgLlToBoAUQl2-a1QC7WiP2PNkZA.jpg?r=257',
            movieMatchRating: 99,
            movieYear: 2020,
            movieAgeRating: 'PG13',
            movieSeasons: 1,
            movieSynopsis: "A mondern-day Korean emperor passes through a mysterious portal and into a parallel world, where he encounters a feisty polic detective.",
            movieCast: 'Lee Min-ho, Kim Go-eun, Woo Do-hwan',
            movieCreators: 'Kim Eun-sook, Baek Sang-hoon, Jun Jee-hyun',
            movieEpisodes: [
                { episode: 1, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep1.jpg', title: 'Episode 1', duration: '1h 12m', episodeSynopsis: "Lee Gon mourns the tragic death of his father. Lee Lim goes on the run- and finds escape when he comes across a door to a parallel universe." },

                { episode: 2, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep2.jpg', title: 'Episode 2', duration: '1h 12m', episodeSynopsis: "Gon insists he is an emperor from another world. An incredulous Jeong Tae-eul takes him to the police station, where he sees a familiar face." },

                { episode: 3, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep3.jpg', title: 'Episode 3', duration: '1h 11m', episodeSynopsis: "Though Tae-eul finds Gon's story difficult to believe, some things about him are completely inexplicable. At work, she gets busy with a murder case." },

                { episode: 4, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep4.jpg', title: 'Episode 4', duration: '1h 12m', episodeSynopsis: "When Tae-eul loses her police badge, she can't help but think about Gon. Meanwhile, Kang Sin-jae has had it with his mother's bad habits" },

                { episode: 5, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep5.jpg', title: 'Episode 5', duration: '1h 12m', episodeSynopsis: "Being introduced to Gon's world is a lot to process for Tae-eul, who's taken to the palace. A disgruntled Jo Yeong keeps an eye on her" },

                { episode: 6, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep6.jpg', title: 'Episode 5', duration: '1h 12m', episodeSynopsis: "A potential military conflict threatens the kingdom. Gon promises Tae-eul he will return to her, and steps forward to take care of the situation." },

                { episode: 7, episodeThumbnail: 'http://192.168.0.103:1313/client/views/episodeImages/king-ep7.jpg', title: 'Episode 5', duration: '1h 12m', episodeSynopsis: "Gon brings Yeong along on his trip back to Tae-eul. He has a favour to ask of her, while she's found something troubling to share with him." },
            ]

        }

    ];

    //add movies into database table
    for (let i = 0; i < dbMovieDetails.length; i++) {

        console.log(dbMovieDetails[i]);
        // let addRecord = await myQuery('INSERT INTO movies SET ?', dbMovieDetails[i])
        let addRecord = await myQuery('INSERT INTO movies SET ?', {movieID: 1} )
        
    }

    res.send('movies added!');


})

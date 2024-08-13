const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const { resolve } = require("dns");

require('dotenv').config();
const port = process.env.PORT
const dbURL = process.env.DATABASE_URL

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbURL);

const Schema = mongoose.Schema;

app.set('view engine', 'ejs');
app.use(express.static(path.join('public')));

app.post("/", function (req, res) {
        const newPredict = new Schema({
            name: { type: String },
            biggestSurprise: { type: String },
            biggestFlop: { type: String },
            sprintPole: { type: String },
            sprintWinner: { type: String },
            polePosition: { type: String },
            firstPlace: { type: String },
            secondPlace: { type: String },
            thirdPlace: { type: String },
            crazyPrediction: { type: String }
        }, { collection: req.body.track });

        const Track = req.body.track;
        const predict = mongoose.models[Track] || mongoose.model(req.body.track, newPredict);

        const newTest = predict({
            name: req.body.name,
            biggestSurprise: req.body.biggestSurprise,
            biggestFlop: req.body.biggestFlop,
            sprintPole: req.body.sprintPole,
            sprintWinner: req.body.sprintWinner,
            polePosition: req.body.polePosition,
            firstPlace: req.body.firstPlace,
            secondPlace: req.body.secondPlace,
            thirdPlace: req.body.thirdPlace,
            crazyPrediction: req.body.crazyPrediction
        });
        newTest.save();
        res.redirect('/predict.html')
});


const Bahrain = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Bahrain' });

const bahrainGet = mongoose.model('Bahrain', Bahrain)

const Jeddah = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Jeddah' });

const jeddahGet = mongoose.model('Jeddah', Jeddah)

const Australia = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Australia' });

const australiaGet = mongoose.model('Australia', Australia)

const Japan = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Japan' });

const japanGet = mongoose.model('Japan', Japan)

const China = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'China' });

const chinaGet = mongoose.model('China', China)

const Miami = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Miami' });

const miamiGet = mongoose.model('Miami', Miami)

const Imola = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Imola' });

const imolaGet = mongoose.model('Imola', Imola)

const Monaco = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Monaco' });

const monacoGet = mongoose.model('Monaco', Monaco)

const Canada = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Canada' });

const canadaGet = mongoose.model('Canada', Canada)

const Spain = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Spain' });

const spainGet = mongoose.model('Spain', Spain)

const Austria = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Austria' });

const austriaGet = mongoose.model('Austria', Austria)

const Silverstone = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Silverstone' });

const silverstoneGet = mongoose.model('Silverstone', Silverstone)

const Hungary = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Hungary' });

const hungaryGet = mongoose.model('Hungary', Hungary)

const Belgium = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Belgium' });

const belgiumGet = mongoose.model('Belgium', Belgium)

const Netherlands = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Netherlands' });

const netherlandsGet = mongoose.model('Netherlands', Netherlands)

const Monza = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Monza' });

const monzaGet = mongoose.model('Monza', Monza)

const Azerbaijan = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Azerbaijan' });

const azerbaijanGet = mongoose.model('Azerbaijan', Azerbaijan)

const Singapore = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Singapore' });

const singaporeGet = mongoose.model('Singapore', Singapore)

const Texas = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Texas' });

const texasGet = mongoose.model('Texas', Texas)

const Mexico = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Mexico' });

const mexicoGet = mongoose.model('Mexico', Mexico)

const Brazil = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Brazil' });

const brazilGet = mongoose.model('Brazil', Brazil)

const LasVegas = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'LasVegas' });

const lasvegasGet = mongoose.model('LasVegas', LasVegas)

const Qatar = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'Qatar' });

const qatarGet = mongoose.model('Qatar', Qatar)

const AbuDhabi = new mongoose.Schema({
    name: { type: String },
    biggestSurprise: { type: String },
    biggestFlop: { type: String },
    sprintPole: { type: String },
    sprintWinner: { type: String },
    polePosition: { type: String },
    firstPlace: { type: String },
    secondPlace: { type: String },
    thirdPlace: { type: String },
    crazyPrediction: { type: String }
}, { collection: 'AbuDhabi' });

const abudhabiGet = mongoose.model('AbuDhabi', AbuDhabi)

app.get('/', async (req, res) => {
    try {
        const bahrainDoc = await bahrainGet.find();
        const jeddahDoc = await jeddahGet.find();
        const australiaDoc = await australiaGet.find()
        const japanDoc = await japanGet.find()
        const chinaDoc = await chinaGet.find()
        const miamiDoc = await miamiGet.find()
        const imolaDoc = await imolaGet.find()
        const monacoDoc = await monacoGet.find()
        const canadaDoc = await canadaGet.find()
        const spainDoc = await spainGet.find()
        const austriaDoc = await austriaGet.find()
        const silverstoneDoc = await silverstoneGet.find()
        const hungaryDoc = await hungaryGet.find()
        const belgiumDoc = await belgiumGet.find()
        const netherlandsDoc = await netherlandsGet.find()
        const monzaDoc = await monzaGet.find()
        const azerbaijanDoc = await azerbaijanGet.find()
        const singaporeDoc = await singaporeGet.find()
        const texasDoc = await texasGet.find()
        const mexicoDoc = await mexicoGet.find()
        const brazilDoc = await brazilGet.find()
        const lasvegasDoc = await lasvegasGet.find()
        const qatarDoc = await qatarGet.find()
        const abudhabiDoc = await abudhabiGet.find()

        res.render('index', { bahrainDoc, jeddahDoc, australiaDoc, japanDoc, chinaDoc, miamiDoc, imolaDoc, monacoDoc, canadaDoc, spainDoc, austriaDoc, silverstoneDoc, hungaryDoc, belgiumDoc, netherlandsDoc, monzaDoc, azerbaijanDoc, singaporeDoc, texasDoc, mexicoDoc, brazilDoc, lasvegasDoc, qatarDoc, abudhabiDoc });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, function () {
    console.log(`server is running on: ${port}`)
});
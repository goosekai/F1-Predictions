const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const crypto = require('crypto');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

app.use(passport.initialize());
app.use(passport.session());

const logins = mongoose.createConnection(process.env.LOGIN_DATABASE_URL);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    rememberMeToken: { type: String }  // New field for storing the remember me token
}, { collection: 'users' });

const User = logins.model('User', userSchema);

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username: username });

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);

    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

// Root route with auto sign-in functionality
app.get('/', async (req, res) => {
    if (req.isAuthenticated()) {
        // If the user is already authenticated, redirect to predictions
        return res.redirect('/predictions');
    }

    // Check if the remember me token exists in the cookies
    const token = req.cookies.remember_me;
    if (token) {
        try {
            // Find the user with the token
            const user = await User.findOne({ rememberMeToken: token });
            if (user) {
                // Log the user in automatically
                req.logIn(user, (err) => {
                    if (err) {
                        return res.sendFile(path.join(__dirname, 'public', 'login.html'));
                    }
                    // Redirect to predictions after auto-login
                    return res.redirect('/predictions');
                });
            } else {
                // If no user found with the token, show the login page
                return res.sendFile(path.join(__dirname, 'public', 'login.html'));
            }
        } catch (error) {
            console.error('Error during auto sign-in:', error);
            return res.sendFile(path.join(__dirname, 'public', 'login.html'));
        }
    } else {
        // If no token is found, show the login page
        return res.sendFile(path.join(__dirname, 'public', 'login.html'));
    }
});

app.post('/login', (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.redirect('/');

        req.logIn(user, async (err) => {
            if (err) return next(err);

            if (req.body.rememberMe) {
                const token = crypto.randomBytes(32).toString('hex');
                user.rememberMeToken = token;
                await user.save();

                res.cookie('remember_me', token, {
                    path: '/',
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 30  // 30 days
                });

                req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 30; // 30 days
            } else {
                req.session.cookie.expires = false;
            }

            return res.redirect('/predictions');
        });
    })(req, res, next);
});

app.get('/predictions', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'predictions.html'));
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

const f1 = mongoose.createConnection(process.env.F1_DATABASE_URL)

const Schema = mongoose.Schema;
app.post("/prediction", function (req, res) {
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
    const predict = f1.models[Track] || f1.model(req.body.track, newPredict);

    const newPredictSend = predict({
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
    newPredictSend.save();
    res.redirect('/predictions')
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

const bahrainGet = f1.model('Bahrain', Bahrain)

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

const jeddahGet = f1.model('Jeddah', Jeddah)

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

const australiaGet = f1.model('Australia', Australia)

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

const japanGet = f1.model('Japan', Japan)

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

const chinaGet = f1.model('China', China)

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

const miamiGet = f1.model('Miami', Miami)

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

const imolaGet = f1.model('Imola', Imola)

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

const monacoGet = f1.model('Monaco', Monaco)

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

const canadaGet = f1.model('Canada', Canada)

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

const spainGet = f1.model('Spain', Spain)

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

const austriaGet = f1.model('Austria', Austria)

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

const silverstoneGet = f1.model('Silverstone', Silverstone)

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

const hungaryGet = f1.model('Hungary', Hungary)

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

const belgiumGet = f1.model('Belgium', Belgium)

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

const netherlandsGet = f1.model('Netherlands', Netherlands)

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

const monzaGet = f1.model('Monza', Monza)

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

const azerbaijanGet = f1.model('Azerbaijan', Azerbaijan)

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

const singaporeGet = f1.model('Singapore', Singapore)

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

const texasGet = f1.model('Texas', Texas)

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

const mexicoGet = f1.model('Mexico', Mexico)

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

const brazilGet = f1.model('Brazil', Brazil)

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

const lasvegasGet = f1.model('LasVegas', LasVegas)

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

const qatarGet = f1.model('Qatar', Qatar)

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

const abudhabiGet = f1.model('AbuDhabi', AbuDhabi)

app.get('/prediction', async (req, res) => {
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

        res.json({
            bahrainDoc,
            jeddahDoc,
            australiaDoc,
            japanDoc,
            chinaDoc,
            miamiDoc,
            imolaDoc,
            monacoDoc,
            canadaDoc,
            spainDoc,
            austriaDoc,
            silverstoneDoc,
            hungaryDoc,
            belgiumDoc,
            netherlandsDoc,
            monzaDoc,
            azerbaijanDoc,
            singaporeDoc,
            texasDoc,
            mexicoDoc,
            brazilDoc,
            lasvegasDoc,
            qatarDoc,
            abudhabiDoc
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
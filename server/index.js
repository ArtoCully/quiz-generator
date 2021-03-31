const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const mysql = require('mysql');
const session = require("express-session");
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');

const userRouter = require('./routes/user');

const connection = mysql.createConnection({
  host: process.env.SESSIONSDB_HOST,
  port: process.env.SESSIONSDB_PORT,
  user: process.env.SESSIONSDB_USER,
  password: process.env.SESSIONSDB_PASS,
  database: process.env.SESSIONSDB_DB
});

const sessionStore = new MySQLStore({
  checkExpirationInterval: parseInt(process.env.SESSIONSDB_CHECK_EXP_INTERVAL, 10),
  expiration: parseInt(process.env.SESSIONSDB_EXPIRATION, 10)
}, connection);

/* Create a cookie that expires in 1 day */
const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSIONSDB_SECRET,
  store: sessionStore,
  cookie: { expires: expireDate }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/user', userRouter);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080'));


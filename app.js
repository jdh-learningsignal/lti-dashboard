const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const redis = require('redis')
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const lti = require('./lti');

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient(6379, 'localhost');

let store = new RedisStore({
  client: redisClient,
  ttl: 260
});

const { sequelize } = require('./models');
const indexRouter = require('./routes');
const accountsRouter = require('./routes/accounts');

const port = process.env.PORT || 3000;
// this express server should be secured/hardened for production use
const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// memory store shouldn't be used in production
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    httpOnly: false,
    maxAge: 30 * 60 * 1000 // 30분
  }
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.set('json spaces', 2);

// app.enable('trust proxy');

app.get('/dashboard', (req, res, next) => {
  if (req.session.userId) {
    return res.render('dashboard', {
      accountId: req.session.body.custom_canvas_account_id,
      isStudent: req.session.body.student
    })
  } else {
    next(new Error('Session invalid. Please login via LTI to use this application.'));
  }
});

app.get('/grading', (req, res, next) => {
  if (req.session.userId) {
    return res.render('grading', {
      accountId: req.session.body.custom_canvas_account_id
    })
  } else {
    next(new Error('Session invalid. Please login via LTI to use this application.'));
  }
});

app.post(['/launch*'], lti.handleLaunch);

app.use('/', indexRouter);
app.use('/accounts', accountsRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

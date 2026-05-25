const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const messageModel = require('./modules/message/message.routes');
const skillModel = require('./modules/skill/skill.routes');
const projectModel = require('./modules/project/project.routes');
const profileModel = require('./modules/profile/profile.routes');
const getPortfolio = require('./Public/getPorfolio')

const authModel = require('./auth/auth.routes');
const authMiddleware = require('./auth/auth.middleware');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/messages',authMiddleware, messageModel)
app.use('/skills',authMiddleware, skillModel)
app.use('/projects',authMiddleware, projectModel)
app.use('/profile',authMiddleware, profileModel)
app.use('/public',getPortfolio)
app.use('/auth',authModel)

module.exports = app;

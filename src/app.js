const express = require('express');
const messageModel = require('./modules/message/message.routes');
const skillModel = require('./modules/skill/skill.routes');
const projectModel = require('./modules/project/project.routes');
const profileModel = require('./modules/profile/profile.routes');
const authModel = require('./modules/auth/auth.routes');
const app = express();

app.use(express.json());
app.use(require('cors')())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/messages',messageModel)
app.use('/api/skills',skillModel)
app.use('/api/projects',projectModel)
app.use('/api/profile',profileModel)
app.use('/api/auth',authModel)

app.get("/api/check", (req, res) => {
  res.json({ message: "API working" });
});

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connecting to mongoDb
mongoose
.connect(db, { useNewUrlParser: true })
.then(()=> console.log('Mongo DB is Connectiong'))
.catch(error => console.log(error))

app.get('/', (req, res)=> res.send('Hello !'))


// use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log(`Server Running on port ${port}`))
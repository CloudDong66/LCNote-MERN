const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const items = require('./routes/api/items');
const arrays = require('./routes/api/arrays');
const hashtables = require('./routes/api/hashtables');
const linkedlists = require('./routes/api/linkedlists');
const dnds = require('./routes/api/dnds');
const dps = require('./routes/api/dps');
const backtrackings = require('./routes/api/backtrackings');
const snqs = require('./routes/api/snqs');
const heaps = require('./routes/api/heaps');
const greedys = require('./routes/api/greedys');
const sorts = require('./routes/api/sorts');
const trees = require('./routes/api/trees');
const graphs = require('./routes/api/graphs');
const recursions = require('./routes/api/recursions');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');



const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// use routes
app.use('/api/items', items);
app.use('/api/arrays', arrays);
app.use('/api/hashtables', hashtables);
app.use('/api/linkedlists', linkedlists);
app.use('/api/dnds', dnds);
app.use('/api/dps', dps);
app.use('/api/backtrackings', backtrackings);
app.use('/api/snqs', snqs);
app.use('/api/heaps', heaps);
app.use('/api/greedys', greedys);
app.use('/api/sorts', sorts);
app.use('/api/trees', trees);
app.use('/api/graphs', graphs);
app.use('/api/recursions', recursions);
app.use('/api/users', users);
app.use('/api/auth', auth);
    
    // Serve static assets if in production 
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
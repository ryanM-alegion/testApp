const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const pageRouter = require('./src/routes/router');


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/', pageRouter);
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/tasks', pageRouter);
app.get('/', (req, res) => {
	res.render('tasks');
});


app.listen(port, () => {
	debug(`listening at port ${chalk.green(port)}`);
});
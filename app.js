const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);

app.set('views', './src/views');
app.set('view engine', 'ejs');

const port = process.env.Port || 5050;

app.get('/', (req, res) => {
  res.render('index', { title: 'Jamiiu' });
});
app.listen(port, debug(`app running at port ${port}.`));

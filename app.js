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

// Array of Books

const books = [
  {
    title: 'War and peace',
    genre: 'Historical fiction',
    author: 'Mr. Fatai Balogun (fattylee)',
    read: false,
  },
  {
    title: 'Ottomon Empire',
    genre: 'Turkish History',
    author: 'Ismail Jamiy Babatunde',
    read: false,
  },
  {
    title: 'Ressurection of Ertugru',
    genre: 'Turkish History',
    author: 'Ismail Jamiy Babatunde',
    read: false,
  },
];

app.get('/', (req, res) => {
  res.render('index', {
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/author', title: 'Author' },
    ],
    title: 'Library',
  });
});

app.get('/books', (req, res) => {
  res.render('books', {
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/author', title: 'Author' },
    ],
    title: 'Library',
    books,
  });
});
app.listen(port, debug(`app running at port ${port}.`));

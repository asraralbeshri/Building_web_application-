const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');//The views setting is used to tell Express what directory it should use as the source of view template files.
app.set('view engine', 'ejs');//The view engine setting is used to tell Express what template engine to use

app.get('/', (req, res) => {
  res.render('index', {
    nav: [{
    link: '/books',
    title:'Books'
    },{
      link: '/authors',
      title:'Authors'
    }], 
    title: 'Library' 
  });
});

app.listen(port, () => {
  debug(`listening at port ${chalk.green(port)}`);
});

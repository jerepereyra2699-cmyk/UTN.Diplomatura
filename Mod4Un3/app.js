var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


/*genero una variable para la ruta 4 y manejadores*/
/*paso 1*/ 

var nosotrosRouter = require('./routes/nosotros'); //nosotros.js


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*esta es mi primer rura*/
app.get('/prueba' , function(req,res,next) {

  res.send('Hola soy la pagina de prueba')

})

/*Ruta 2*/

app.get('/precios' , function(req,res,next) {

  res.send('Hola soy la pagina de precios')

})

/*Ruta 3*/

app.get('/productos' , function(req,res,next) {

  res.send('Hola soy la pagina de Productos')

})

/*ruta 5*/ 

app.get('/contacto' , function(req,res,next) {

  res.send('Hola soy la pagina de contacto')
})





app.use('/', indexRouter);
app.use('/users', usersRouter);

/*paso 2*/

app.use('/nosotros', nosotrosRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

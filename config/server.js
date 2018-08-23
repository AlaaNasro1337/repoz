/*   Importar o módulo do framework Express */

var express = require('express');
var path = require('path');

/*   Importar o módulo do consign  */

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

/*   Inicia o objeto do Express */

var app = express();

/*  Setar as variavéis 'view engine' e 'views' do express */

app.set('view engine', 'ejs');
app.set('views', './app/views');

/*   Configurar o middleware Express.static */
app.use(express.static('./app/public'));

/*   Configurar o middleware  bodyP-arser*/
app.use(bodyParser.urlencoded({extended : true}));

/*   Configurar o middleware  express-validator*/
app.use(expressValidator());

consign()
    .include(path.join('/app/routes'))
    .then(path.join('/app/controllers'))
    .into(app);

module.exports = app;
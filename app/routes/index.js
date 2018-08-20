module.exports = function(application){
    application.get('/', function(req, res){
        //application.app.controllers.index.home(application, req, res);
        //res.render('index', {validacao : {}});
        var index = require('.app/controllers/index');
        index();
    });
};


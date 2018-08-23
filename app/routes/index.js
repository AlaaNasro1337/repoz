module.exports = function(application){
    application.get('/', function(req, res){
        //application.app.controllers.index.home(application, req, res);
        var ind = application.app.controllers.index;
        ind.home(application, req, res);
        console.log('eehr');
    });
};


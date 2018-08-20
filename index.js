/*   Importar as configurações do servidor*/
var app = require('./config/server');
var PORT = process.env.PORT || 5000;

/*   Parametrizar a porta de escuta*/

/*var server = app.listen(80, function () {
    console.log('Bem vindo!');
});*/
var server = app.listen(PORT);

var io = require('socket.io').listen(server);


/*  Criar uma variável 'io' dentro do express  */
app.set('io', io);

/*  Criar a conexão por websocket  */

io.on('connection', function (socket) {
    console.log('Usuário conectou');

    socket.on('disconnect', function () {
        console.log('Usuário desconectou');
    });
    
    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {apelido : data.apelido, mensagem : data.mensagem});
        
        socket.broadcast.emit('msgParaCliente', {apelido : data.apelido, mensagem : data.mensagem});   
        
        
         /*  Participantes*/
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit('participantesParaCliente',
                    {apelido : data.apelido});
        
            socket.broadcast.emit('participantesParaCliente',
                    {apelido : data.apelido});    
        }
          
    
    });
    
    
    
    
   
});

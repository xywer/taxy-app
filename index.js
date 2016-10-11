//PUERTO DONDE VA A CORRER EL SERVIDOR 
//WEB SERVICES
////
//****************CORS **************
//https://github.com/expressjs/cors
// ES UN MODULO PARA PODER DAR PERMISOS
//DE ACCESO AL SERVIDOR
//Y PODER 
//***********************EXPRESS*****************
//En esta introducci�n a la programaci�n as�ncrona con Node.js 
//vamos a introducirnos en el desarrollo web con express.js. 
//  Express est� construido sobre Connect un framework extensible de 
//  manejo de servidores HTTP que provee de
//plugins de alto rendimiento conocidos como middleware.
//---------VARIABLES GLOBALES----------
//----------ASIGNAR LA CONFIGURACION DE LA BDD(NOMBRE Y PUERTO Y PASS)---------
var params_bdd = {user: "pekesc5_meetclic", password: "meetclic@", host: "creativeweb.com.ec", port: port_mysql, database: "pekesc5_xywer"};
//var params_bdd = {user: "pekesc5_meetclic", password: "meetclic@", host: "creativeweb.com.ec", port: port_mysql, database: "pekesc5_lady"};
//*********************MYSQL*****************
//-------------------INIT MODULOS A UTILIZAR-------------
//MODULO DE NODE JS PARA LA CONECCION DE LA BDD DE MYSQL
var port_listen = 6969;
var port_mysql = 3306;
var puerto_io = 3000;
var mysql = require('mysql');//para la comunicacion con la bdd 
var express = require('express');//EL ESL L ENCARGADO DE LA COMUNCION DE URLS 
var cors = require('cors');//EL NOS FACILITA LA COMUNICACION A ESAS URLS  ACCESO A ESA URL
var app = express();
//app.use(cors());
//var io = require('socket.io').listen(puerto_io);//REALIZA UN PUENTE ENTRE TU APP-SISTEMA DE GESTION ---COMUNICACION ENTRE LOS DOS HACIA TU SERVIDOR
//-------------------END MODULOS A UTILIZAR-------------

//--------PERSONA----
//--------VARIABLES GLOBALES DE TABLAS--
var entidad_data_id = 1;//dond s almacenara la informacion dlos usuaiors 
//    ----TABLAS A GESTIONAR---
var cuenta_persona = "cuenta_persona";//children
var persona = "persona";//parent

var port_procesa = process.env.PORT;
console.log("---------------------------");
app.set('port', port_procesa);
console.log("---------------------------", port_procesa)

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

//---------INIT METODOS DL SISTEMA--
app.get('/createPersonaInformacion', function (req, res, next) {
    var result = [];


});

app.get('/personaInformacionAll', function (req, res, next) {

});

//---END PERSONA--
app.get('/api', function (req, res) {
    res.send('Admin Homepage');
});

//---------END METODOS DL SISTEMA--
//------------ init SOCKETS CONFIGURACION--//-------NEWS--------
var server_user = [];
var clients = [];
var group_leader = [];
//------------ END SOCKETS CONFIGURACION--//-------NEWS--------
//io.on('connection', function (socket) {
//    console.log("ntro al sokec");
////    ---persona agregada--
//    socket.on("persona_informacion", function (data) {
//        console.log("agregar personas");
//        io.emit("persona_informacion_add", data);
//    });
//
////  -----------------NEW--------------
//    //esto sirve para emitir
//    io.emit('user_connection', socket.id);
//    io.emit("server_user", server_user);
//
//    socket.on("set_data", function (data) {
//        console.log("usuario enviando front", data);
//    });
//
//
//});
function getDataModel($params, callback) {
    var result;
    var query_string = $params.query_string;
    var objec_conection_bdd = $params.objec_conection_bdd;
    objec_conection_bdd.query(query_string, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        // Pass the message list to the view
        else {
            console.log("primero informacion");
            result = rows;
            callback(result);
        }
    });
    return result;
}
function initBdd() {

//--------CONECCCION DE LA BDD--------
    var connection = mysql.createConnection(params_bdd);
    connection.connect(function (err) {
        if (err) {
            console.log('Error connecting to Db');
            return;
        } else {

            console.log('Connection established');
        }

    });
}
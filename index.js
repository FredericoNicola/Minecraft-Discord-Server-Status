// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
var net = require('net');
var Promise = require('bluebird');
const { EventEmitter } = require('stream');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);


        client.on('ready', () => {
            client.user.setActivity('Getting info, wait', { type:"PLAYING" })
        })



function checkConnection(host, port, timeout) {
    return new Promise(function(resolve, reject) {
        timeout = timeout || 1000;     // default of 10 seconds
        var timer = setTimeout(function() {
            reject("timeout");
            socket.destroy();
        }, timeout);
        var socket = net.createConnection(port, host, function() {
            clearTimeout(timer);
            resolve();
            socket.destroy();
        });
        socket.on('error', function(err) {
            clearTimeout(timer);
            reject(err);
        });
    });
}

pirocas();

   var help = 0;
   var helper = 0;

function pirocas(){
setInterval(function() {

    checkConnection("2.81.90.12", 25565).then(function() {
        help = 1
        
        
    }, function(err) {
        help = 2
    })

if (help == 1 && helper !== help) {

        helper=help
        console.log(help)
        foda()
    
    }
        

if (help == 2 && helper !== help) {
    helper = help
    console.log("cheguei")    
    fodaa()


        }    

}, 60000) }

function foda() {    
        client.user.setActivity('Server Online ✅', { type:"PLAYING" })
}

function fodaa() {    
        client.user.setActivity('Server Down ❌', { type:"PLAYING" })
}







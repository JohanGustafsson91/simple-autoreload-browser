var exec = require('child_process').exec;
const WebSocket = require('ws');

const folderToWatch =
    '~/Projects/myFolder/js/ | grep -Eo "[0-9].:[0-9].:[0-9]."'

const watchCommand = `ls -all --full-time ${folderToWatch}`;

var previous = null;

const wss = new WebSocket.Server({
    perMessageDeflate: false,
    port: 8080
});

// wss.on('connection', ws => {
//     console.log('Connection!')
// })

function checkFiles() {
    child = exec(watchCommand, (error, stdout, stderr) => {
        previous !== stdout ? updateClients() : null;
        previous = stdout;
    });
}

function updateClients() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            console.log('Sending reload browser signal to client');
            client.send('reload');
        }
    });
}

setInterval(() => {
    checkFiles();
}, 500);

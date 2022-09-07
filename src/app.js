import client from './client'

const express = require('express')

require('dotenv').config()

const app = express()
const port = 3000

client.on("connect", function() {
    console.log("connected  " + client.connected);
})

client.on("error", function(error) {
    console.log("Can't connect" + error);
    process.exit(1);
})

client.subscribe(process.env.MQTT_TOPIC)


client.on('message', (topic, message) => {
    // console.log(topic, JSON.parse(message))
    getStream(JSON.parse(message))
})

function getStream(data) {
    var sendAndSleep = function(response, counter) {
        if (counter > 10) {
            response.end();
        } else {
            response.write(" ;i=" + counter);
            counter++;
            setTimeout(function() {
                sendAndSleep(response, counter);
            }, 1000)
        };
    };

    app.get('/stream', function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
        // sendAndSleep(res, 1);
    });

    app.listen(port, () => {
        console.log(`Exporter listening on port ${port}`)
    })
}
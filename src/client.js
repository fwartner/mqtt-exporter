var mqtt = require('mqtt');
require('dotenv').config()

var mqtt_host = process.env.MQTT_HOST;
var mqtt_port = process.env.MQTT_PORT;
var mqtt_topic = process.env.MQTT_TOPIC;

var options = {
    clientId: process.env.MQTT_CLIENT_ID,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    clean: true
};

const client = new mqtt.connect(`mqtt://${mqtt_host}:${mqtt_port}`, options)

export default client
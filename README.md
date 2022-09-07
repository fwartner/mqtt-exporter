
# mqtt-exporter

Docker based MQTT Stream Exporter

## What it does

This image streams the MQTT output of a specified topic to an JSON-Endpoint (`http://my-docker-host:3000/stream`) so you can use it for Grafana or something else.
## Deployment

To deploy this container run the following steps:

Configure:

```yaml
version: "3.7"
services:
  exporter:
    container_name: exporter
    image: ghcr.io/fwartner/mqtt-exporter:latest
    ports:
      - 3000:3000
    environment:
      MQTT_HOST: my.mqtt-host.tld
      MQTT_PORT: 1883
      MQTT_USERNAME: mqtt_username
      MQTT_PASSWORD: mqtt_password
      MQTT_TOPIC: "zigbee2mqtt/bridge/devices"
      #MQTT_CLIENT_ID: // Optional
    restart: always
```

Run:

```bash
docker compose up -d
```

## Support

For support, email florian@wartner.io or join my Discord channel.


## Authors

- [@fwartner](https://www.github.com/fwartner)


## License

[MIT](https://choosealicense.com/licenses/mit/)

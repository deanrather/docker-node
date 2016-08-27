#!/usr/bin/env node
const cli = require('../lib/docker-cli');
cli.exec('docker-compose exec $serviceName npm "$args"');
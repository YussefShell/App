// File: apps/eco-pilot-server/docker-compose.ts

import { DockerComposeFile, Service } from 'docker-compose-typescript';

const ecoPilotServerService: Service = {
    image: 'eco-pilot-server:latest',
    ports: [
        '3000:3000'
    ],
    environment: {
        NODE_ENV: 'production',
        PORT: '3000'
    },
    volumes: [
        './data:/data'
    ]
};

const dockerComposeFile: DockerComposeFile = {
    version: '3.8',
    services: {
        'eco-pilot-server': ecoPilotServerService
    }
};

export default dockerComposeFile;

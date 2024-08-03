const path = require('path');
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Analytics Dashboard API',
    description: 'API documentation for the Analytics Dashboard project',
  },
  host: 'localhost:4000',
  basePath: '/api',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/data.ts']; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('ts-node').register();
  require(path.join(__dirname, 'server.ts'));
});

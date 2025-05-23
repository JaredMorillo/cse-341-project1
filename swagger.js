const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// to generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Simple Todo API',
    version: '1.0.0',
    description: 'API documentation for the Simple Todo API',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8000}`,
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './controllers/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

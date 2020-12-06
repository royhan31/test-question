
const swaggerDoc = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Question CRUD',
    description: 'Project Application API'
  },
  host: process.env.APP_URL,
  basePath: '/',
  tags: [
    {
      name: 'Question',
      description: 'API for quetion in the system'
    }
  ],
  schemes: [
    [process.env.APP_URL || process.env.APP_URL == 'local' ? 'http' : 'https'].join()
  ],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  paths: {
    '/question': {
      get: {
        tags: [
          'All quetion and pagination'
        ],
        summary: 'Get all question using pagination (default json data size = 5 and page = 1)',
        parameters: [
          {
            name: 'size',
            'in': 'query',
            required: false,
            description: 'size to the amount of data in json (min: 5, max: 100)',
            type: 'integer',
            minimum: 5,
            maximum: 100
          },
          {
            name: 'page',
            'in': 'query',
            required: false,
            description: 'page to the amount of page in pagination',
            type: 'integer',
            minimum: 1
          }
        ],
        responses: {
          '200': {
            description: 'OK'
          }
        }
      },
      post: {
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        tags: [
          'Create the quetion'
        ],
        summary: 'Create the question',
        parameters: [
          {
            name: 'question',
            type: 'string',
            required: true,
            description: 'Name the question',
            'in': 'formData'
          },
          {
            name: 'author',
            type: 'string',
            required: true,
            description: 'Name the author',
            'in': 'formData'
          }
        ],
        responses: {
          '201': {
            description: 'Question is created'
          }
        }
      }
    },
    '/question/{uuid}': {
      put: {
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        tags: [
          'Update the question'
        ],
        summary: 'Update the question using UUID',
        parameters: [
          {
            name: 'uuid',
            type: 'string',
            required: true,
            description: 'UUID the question',
            'in': 'path'
          },
          {
            name: 'question',
            type: 'string',
            required: true,
            description: 'Name the question',
            'in': 'formData'
          },
          {
            name: 'author',
            type: 'string',
            required: true,
            description: 'Name the author',
            'in': 'formData'
          }
        ],
        responses: {
          '200': {
            description: 'Question is updated'
          }
        }
      },
      'delete': {
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        tags: [
          'Delete the question'
        ],
        summary: 'Delete the question using UUID',
        parameters: [
          {
            name: 'uuid',
            type: 'string',
            required: true,
            description: 'UUID the question',
            'in': 'path'
          }
        ],
        responses: {
          '200': {
            description: 'Question is deleted'
          }
        }
      },
      get: {
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        tags: [
          'Details the question'
        ],
        summary: 'Details the question using UUID',
        parameters: [
          {
            name: 'uuid',
            type: 'string',
            required: true,
            description: 'UUID the question',
            'in': 'path'
          }
        ],
        responses: {
          '200': {
            description: 'Question is details'
          }
        }
      }
    }
  }
}
module.exports = swaggerDoc;

const image = require('./api/routes/image');

const routes = [
  {
    path: '/api/image',
    api: image,
  }
];

module.exports = routes;
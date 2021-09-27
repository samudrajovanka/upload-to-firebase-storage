const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

routes.forEach((route) => {
  app.use(route.path, route.api);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running');
});

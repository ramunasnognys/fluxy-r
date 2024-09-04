const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

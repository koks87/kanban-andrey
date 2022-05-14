const express = require('express');
const routes = require('./routes');
const bodyParser = require('./BodyParser');

const app = express();
const PORT = process.env.PORT || 5000;

bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
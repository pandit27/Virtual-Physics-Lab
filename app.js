const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const pathfile = path.join(__dirname);

app.get('/', (req, res) => {
    res.send(`${pathfile}/index.html`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

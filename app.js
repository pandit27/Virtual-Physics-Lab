const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`${__dirname}/index.html`);
});

const port = process.env.PORT 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

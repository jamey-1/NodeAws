const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('It Worked!');
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listen at port 5000.');
});

module.exports = app;
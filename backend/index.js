const express = require("express");

const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(8080, () => {
    console.log('123');
});

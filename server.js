const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index.html');
});


app.listen(process.env.PORT|| 8080, () => console.log('Running on port 3000'));
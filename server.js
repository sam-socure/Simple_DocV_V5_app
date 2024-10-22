require('dotenv').config()
const express = require('express')
const cors = require('cors')

const path = require('path')
const app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',  (req, res) => {
  res.render('docVv5');
});


const PORT = 3000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
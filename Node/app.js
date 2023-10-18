const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('index.ejs')
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
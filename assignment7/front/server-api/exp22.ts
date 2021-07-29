var express =require("express");
const app = express();
const path=require('path');
//var cors = require('cors');

//app.use(cors());

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const PORT = 9000; 

// define a route handler for the default home page
app.use(express.static(path.join(__dirname,'/start')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/start/index1.html'))
});
//app.use('/exp11', require('./api/exp11.js'));

// start the Express server
app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
});
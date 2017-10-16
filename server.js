import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import config from './server/config/config';
import routes from './server/routers';


let app = express();

var port     = process.env.PORT || 3000;
// connect mongoose to database
mongoose.connect(config.database);
app.use(cors());

app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.use(express.static(__dirname + '/'));
app.use('/bower_components',  express.static(path.join(__dirname, '../bower_components')));
app.use(express.static(path.join(__dirname,'./dist')));
app.use(express.static(path.join(__dirname,'./uploads')));
app.use('/',routes);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})


// catch 404
app.use((req, res, next) =>{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
// error handler
// app.use((err, req, res, next) =>{
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
 
app.listen(port,() => console.log('running on port',port));
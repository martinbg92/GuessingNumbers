const express = require('express');
const app = express();
const openApiValidator= require('express-openapi-validator');
const cors= require('cors')


//Routes
const guesserRoute = require('./routes/guesserRoute')();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(openApiValidator.middleware({
  apiSpec:'../api-spec/guesserNumber.yml',
  validateRequests:true
}))


app.use('/api', guesserRoute);

app.get('/',(req,res)=>{
  res.send("Welcome to the server")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.status(err.status || 500).json({
    message:err.message,
    errors:err.errors
  })
});

//assign port to server
app.server= app.listen(5000,()=>
{
  console.log("Runing on port 5000")
  
}) 

module.exports = app;

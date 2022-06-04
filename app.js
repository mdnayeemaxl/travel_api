const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


//MiddleWares
app.use(morgan(''))
app.use(express.json());// This is called middleware which is basically a function that modify the incomming request data. It stands between request and response.The calling of express.json() return a function which is added in midlere stack
app.use((req, res, next) => {
    console.log('Hello from the middlewere');
    next();
});
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
//There is total 4 middlewere whic is work for all type of route request 




//2)Route handeler


//app.get('/api/v1/tours', alltour);
//app.post('/api/v1/tours', createTour);
//app.get('/api/v1/tours/:id', gettour);
//app.patch('/api/v1/tours/:id', updatetour);
//app.delete('/api/v1/tours/:id', deletetour);

//3)Route

app.use('/api/v1/tours', tourRouter);//for (/api/v1/tours) this route tourRoute work
app.use('/api/v1/users', userRouter);////for (/api/v1/users) this route userRoute work
//4)start server
module.exports = app;

/* app.post('/api/v1/tours', createTour);

const createTour = (req, res) => {
    const newId = x[x.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    x.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(x),
        err => {
            res.status(201).json({ status: 'success', data: { tour: newTour } });
        });
}
  

here (/api/v1/tours) is route
createTour function is called Route handeler, which will be called controller in frame work architechture.
*/


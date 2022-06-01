const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());// This is called middleware which is basically a function that modify the incomming request data. It stands between request and response.The calling of express.json() return a function which is added in midlere stack
const port = 3000;
const x = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));// tours is an array
const alltour = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: x.length,
        data: { x }
    });
}
const gettour = (req, res) => {
    const id = req.params.id * 1;
    const tour = x.find(el => el.id == id);//This is bassically a loop where el=each object of array, el variable value change iteratively
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        });
    }
    res.status(200).json({
        status: 'Success',
        data: {
            tour
        }
    });
}

const updatetour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<update tour....'
        }
    });
}
const deletetour = (req, res) => {//when we perform delete operation there is no res is besically 204. 204 means no content
    res.status(200).json({
        status: 'success',
        data: null
    });
}
const createTour = (req, res) => {
    const newId = x[x.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    x.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(x),
        err => {
            res.status(201).json({ status: 'success', data: { tour: newTour } });
        });
}

//app.get('/api/v1/tours', alltour);
//app.post('/api/v1/tours', createTour);
//app.get('/api/v1/tours/:id', gettour);
//app.patch('/api/v1/tours/:id', updatetour);
//app.delete('/api/v1/tours/:id', deletetour);

app
    .route('/api/v1/tours')
    .get(alltour)
    .post(createTour);
app
    .route('/api/v1/tours/:id')
    .get(gettour)
    .patch(updatetour)
    .delete(deletetour);



app.listen(port, () => {
    console.log(`App russing on port ${port}..`);
});



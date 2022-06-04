const fs = require('fs');
const x = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));// tours is an array


exports.alltour = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: x.length,
        data: { x }
    });
}
exports.gettour = (req, res) => {
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

exports.updatetour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<update tour....'
        }
    });
}
exports.deletetour = (req, res) => {//when we perform delete operation there is no res is besically 204. 204 means no content
    res.status(200).json({
        status: 'success',
        data: null
    });
}
exports.createTour = (req, res) => {
    const newId = x[x.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    x.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(x),
        err => {
            res.status(201).json({ status: 'success', data: { tour: newTour } });
        });
}


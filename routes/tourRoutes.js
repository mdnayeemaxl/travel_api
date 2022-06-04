const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();
router
    .route('/')
    .get(tourController.alltour)
    .post(tourController.createTour);
router
    .route('/:id')
    .get(tourController.gettour)
    .patch(tourController.updatetour)
    .delete(tourController.deletetour);
module.exports = router;
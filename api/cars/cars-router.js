const router = require('express').Router();
const Car = require('./cars-model');
const mw = require('./cars-middleware');

//`[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).

router.get('/', (req, res) => {

    Car.getAll()
    .then(cars => {
        res.status(201).json(cars)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Request failed.'
        })
    })

})

//`[GET] /api/cars/:id` returns a car by the given id.

router.get('/:id', mw.checkCarId, (req, res) => {

    res.json(req.car);

})

//`[POST] /api/cars` returns the created car.

router.post(
    '/', 
    mw.checkCarPayload,
    mw.checkVinNumberUnique, 
    mw.checkVinNumberValid, 
    async (req, res, next) => {

    try {
        const newCar = await Car.create(req.body)
        res.json(newCar)
    } catch (err) {
        next(err)
    }

})

module.exports = router;
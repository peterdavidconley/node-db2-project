const router = require('express').Router();
const Car = require('./cars-model');

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

router.get('/:id', (req, res) => {

    Car.getById(req.params.id)
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Request failed.'
        })
    })

})

//`[POST] /api/cars` returns the created car.

router.post('/', (req, res) => {

    Car.create(req.body)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;
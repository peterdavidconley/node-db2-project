const Car = require('./cars-model');
const vin = require('vin-validator');

const checkCarId = async (req, res, next) => {
  
    try {
      const { id } = req.params
      const car = await Car.getById(id)
      if (!car) {
        res.status(404).json({
          message: `Car with id ${id} is not found`
        })
      } else {
        req.car = car
        next()
      }

    } catch (err) {
      next(err)
    }

}

const checkCarPayload = (req, res, next) => {

  if (!req.body.vin) return next({
      status: 400,
      message: 'vin is missing'
  }) 
  if (!req.body.make) return next({
      status: 400,
      message: 'make is missing'
  }) 
  if (!req.body.model) return next({
    status: 400,
    message: 'model is missing'
  }) 
  if (!req.body.mileage) return next({
    status: 400,
    message: 'mileage is missing'
  }) 
  next()

}

const checkVinNumberValid = (req, res, next) => {

  if (vin.validate(req.body.vin)) {
    next()
  } else {
    next({ 
      status: 400, 
      message: `vin ${req.body.vin} is invalid`,
    })
  }
}

const checkVinNumberUnique = (req, res, next) => {

    next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
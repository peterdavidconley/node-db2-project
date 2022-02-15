const Car = require('./cars-model')

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

  const error = { status: 400 }
  if (vin === undefined) {
      error.message = "vin is missing"
  } else if (make === undefined) {
      error.message = "make is missing"
  } else if (model === undefined) {
    error.message = "model is missing"
  } else if (mileage === undefined) {
    error.message = "mileage is missing"
  } 
  if (error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {



}

const checkVinNumberUnique = (req, res, next) => {



}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
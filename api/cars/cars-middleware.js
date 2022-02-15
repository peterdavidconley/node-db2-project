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
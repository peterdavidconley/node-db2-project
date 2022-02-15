const db = require('../../data/db-config');

async function getAll () {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first();
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

function create (car){
  return db('cars').insert(car)
  .then(([id]) => {
    return getById(id)
  })
}

module.exports = {

  getAll,
  getById,
  getByVin,
  create,

}
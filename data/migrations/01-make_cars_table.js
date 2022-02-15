exports.up = function (knex) {

  tbl.increments();
  tbl.string('vin').unique().notNullable;
  tbl.string('make').notNullable;
  tbl.string('model').notNullable;
  tbl.numeric('mileage').notNullable;
  tbl.string('title');
  tbl.string('transmission');
  
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};

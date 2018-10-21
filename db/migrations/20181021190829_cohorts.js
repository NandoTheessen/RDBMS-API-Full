exports.up = function(knex, Promise) {
  // implement the change we want in our db
  return knex.schema.createTable('cohorts', cohorts => {
    // generates autoincrementing PK
    cohorts.increments();
    cohorts.string('cohort', 128);
  });
};

exports.down = function(knex, Promise) {
  // undo changes to our db
  return knex.schema.dropTable('cohorts');
};

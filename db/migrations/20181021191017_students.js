exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', students => {
    students
      .integer('cohort')
      .unsigned()
      .notNullable();
    students.increments('id');
    students.string('name', 128);

    students
      .foreign('cohort')
      .references('id')
      .inTable('cohorts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};

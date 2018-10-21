exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Klaus', cohort: 1 },
        { id: 2, name: 'Peter', cohort: 2 },
        { id: 3, name: 'Heidi', cohort: 3 },
      ]);
    });
};

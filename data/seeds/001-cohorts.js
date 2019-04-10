
exports.seed = function(knex, Promise) {
  // 00-cleanup.js seed already deleted records
  // we just worry about seeding records and other seeds
        return knex('cohorts').insert([
          {name: 'student'},
          {name: 'pm'},
          {name: 'ta'}
        ]);
      }
  
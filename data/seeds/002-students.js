
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('students').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('students').insert([
//         {id: 1, name: 'rowValue1'},
//         {id: 2, name: 'rowValue2'},
//         {id: 3, name: 'rowValue3'}
//       ]);
//     });
// };
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Rosa', cohort_id: 3},
        {name: 'Phil', cohort_id: 2},
        {name: 'Mark', cohort_id: 1}
      ]);
    });
};
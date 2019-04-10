// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
      // primary key called id, integer, auto-increment
      tbl.increments();
  
      tbl.string('name', 128).notNullable();
  //role = cohort
  //users = students
      tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohort')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  
      tbl.timestamps(true, true);
    });
  };
  
  // how can I undo the changes
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };
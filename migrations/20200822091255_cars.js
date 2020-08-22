
exports.up = async function(knex) {
                      //`CREATE TABLE for cars`
    await knex.schema.createTableIfNotExists("cars", (table)=>{
      table.increments("id")
      table.text("make").notNull().unique()
      table.text("model").notNull().unique()
      table.float("mileage").notNull()
      table.text("transmissionType")
      table.boolean("cleanTitle").defaultTo(true)
    })
  
};

exports.down = async function(knex) {
  
  await knex.schema.dropTableIfExists("cars")
};

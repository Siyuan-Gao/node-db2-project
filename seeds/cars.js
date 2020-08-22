
exports.seed = async function(knex) {
	// clear out all the rows in the table and reset it
  await knex('cars').truncate()


      await knex("cars").insert([
              // Inserts seed entries
        { make: "Acura", model: "CL Type-S" , mileage:8000, transmissionType: "Automated-Manual Transmission", cleanTitle: true,},
        { make: "Alfa Romeo", model: "4C" , mileage:20000, transmissionType: "Automated-Manual Transmission", cleanTitle: false,},
        { make: "Bugatti", model: "Type 252" , mileage:50, transmissionType: "DSG (Direct Shift Gearbox)", cleanTitle: true,},
        { make: "Toyota", model: "AE86" , mileage:1500, transmissionType: "Dual-Clutch Transmission", cleanTitle: false,},
        { make: "Aston Martin", model: "V8 Zagato" , mileage:12000, transmissionType: "Continuously Variable Transmission (CVT)", cleanTitle: true,},
 
      ])
    }
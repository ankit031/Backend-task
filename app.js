const csv = require('csv-parser');
const fs = require('fs');
var totalFixedPrice = 0;
var totalActualHrs = 0;

fs.createReadStream('JavaProject.csv')
  .pipe(csv())
  .on("data", function(data) {
    console.log('Status : ',data.STATUS,', Priority : ',data.PRIORITY,', Fixed Cost : ',data.FIXED_COST,', Actual Hrs ',data.ACTUAL_HRS);
    var cost = data.FIXED_COST.replace(/[$,]/g,'');
    var num = Number(cost);
    totalFixedPrice = totalFixedPrice + num;
    totalActualHrs = totalActualHrs + data.ACTUAL_HRS;

 })
  .on('end', () => {
    console.log("The total of Fixed Cost is " + totalFixedPrice);
    console.log("The total of Actual Hrs is " + totalActualHrs);

    console.log('CSV file successfully processed');
  });

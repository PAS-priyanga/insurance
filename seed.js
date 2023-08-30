require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Health', sortOrder: 10},
    {name: 'House', sortOrder: 20},
    {name: 'Vehicle', sortOrder: 30},
    {name: 'Travel', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Basic', category: categories[0], deductible: 5.95,PolicyCoverage:"1 million" },
    {name: 'Premium',category: categories[0], deductible: 8.95,PolicyCoverage:"1.5 million" },
    {name: 'Premium plus', category: categories[0], deductible: 15.95,PolicyCoverage:"2.5 million"},
    {name: 'Basic', category: categories[1], deductible: 15.95,PolicyCoverage:"1 million" },
    {name: 'Premium',category: categories[1], deductible: 25.95,PolicyCoverage:"2 million" },
    {name: 'Premium plus', category: categories[1], deductible: 35.95,PolicyCoverage:"3 million"},
    {name: 'Basic', category: categories[2], deductible: 5.95,PolicyCoverage:"1.3 million" },
    {name: 'Premium',category: categories[2], deductible: 15.95,PolicyCoverage:"1.5 million" },
    {name: 'Premium plus', category: categories[2], deductible: 18.95,PolicyCoverage:"1.9 million"},
    {name: 'Basic', category: categories[3], deductible: 5.95,PolicyCoverage:"1.6 million" },
    {name: 'Premium',category: categories[3], deductible: 10.95,PolicyCoverage:"1.9 million" },
    {name: 'Premium plus', category: categories[3], deductible: 15.95,PolicyCoverage:"2.5 million"},
  ]);

  console.log(items)

  process.exit();

})();

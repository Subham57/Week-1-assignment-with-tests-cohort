/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  result = [];
  temp_cat = {};
  for(let i = 0; i <transactions.length; i++){
    if (transactions[i].category in temp_cat){
      temp_cat[transactions[i].category] += transactions[i].price;
    }else{
      temp_cat[transactions[i].category] = transactions[i].price;
    }
  }
  for (const [key, value] of Object.entries(temp_cat)) {
    temp_res = { category: key, totalSpent: value};
    result.push(temp_res)
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;

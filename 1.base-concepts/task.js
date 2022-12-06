"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) { // если дискриминант = 0
    arr.push(-b / (2 * a));
  } 
  if (discriminant > 0) {   // если дискриминант > 0
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (isNaN(percent) ||
      isNaN(contribution) ||
      isNaN(amount) ||
      isNaN(countMonths)) {
    console.log('Один из параметров содержит неверное значение')
    return false;
  }
  let percentPerMonth = percent / 100 / 12;
  let bodyKredit = amount - contribution;
  let paymentPerMonth = bodyKredit * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  let totalPayment = +(paymentPerMonth * countMonths).toFixed(2);
  return totalPayment;
}


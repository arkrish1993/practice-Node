function tax(item, price, taxRate) {
  const totalCost = price * (1 + taxRate);
  console.log(`The cost of ${item.item} is ${totalCost}`);
}

function customCall(item, price, taxRate) {
  this(item, price, taxRate);
}

Function.prototype.customCall = customCall;
tax.customCall({ item: "coffee" }, 100, 2);

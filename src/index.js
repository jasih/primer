export function calculateTotal(items, tax) {
  let total = 0;
  for (let item of items) {
    const { price, taxable } = item;
    if (taxable) {
      total += price + price * Math.abs(tax);
    } else {
      total += price;
    }
  }
  return total;
}

// currency format function
export function currencyFormat(val) {
  val = Math.abs(Math.round(parseInt(val)));
  return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// 4 decimal point function
export function Decimal(val) {
  val = Math.abs(val).toFixed(4);
  return val;
}

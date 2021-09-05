// function to fetch ticker data
export function fetchTickerData() {
  return new Promise((resolve) => {
    fetch("https://api-pub.bitfinex.com/v2/ticker/tBTCUSD")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

// function to fetch order book data
export function fetchOrderBookData() {
  return new Promise((resolve) => {
    fetch("https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

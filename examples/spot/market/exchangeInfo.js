const Spot = require('../../../src/spot')

const client = new Spot()

client.exchangeInfo().then(response => {
  console.log(response.headers["x-mbx-used-weight"]);
  console.log(response.headers["x-mbx-used-weight-1m"]);
  console.log(response.data);
})
// client.exchangeInfo({ symbol: 'btcusdt' }).then(response => client.logger.log(response.data))
// client.exchangeInfo({ symbols: ['btcusdt', 'BNBUSDT'] }).then(response => client.logger.log(response.data))

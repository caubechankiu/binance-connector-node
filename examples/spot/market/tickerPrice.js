const Spot = require('../../../src/spot')

const client = new Spot()

client.tickerPrice().then(response => {
  console.log(response.headers["x-mbx-used-weight"]);
  console.log(response.headers["x-mbx-used-weight-1m"]);
  console.log(response.data);
})

// client.tickerPrice('BTCUSDT').then(response => client.logger.log(response.data))

// client.tickerPrice('', ['BTCUSDT', 'BNBUSDT']).then(response => client.logger.log(response.data))

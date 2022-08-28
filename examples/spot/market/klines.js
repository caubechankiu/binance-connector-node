const Spot = require('../../../src/spot')

const client = new Spot()

// client.klines('BTCUSDT', '1m', { limit: 5 }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error.message))

console.log(Math.floor(new Date().getTime() / 1000 / 60) * 60 * 1000)
client.klines('LUNCUSDT', '1m', { startTime: Math.floor(new Date().getTime() / 1000 / 60) * 60 * 1000, endTime: Math.floor(new Date().getTime() / 1000 / 60) * 60 * 1000, limit: 10 }).then(response => {
  console.log(response.data)

})
  .catch(error => client.logger.error(error.message))

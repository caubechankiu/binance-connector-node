const Spot = require('../../../src/spot')

const apiKey = '5mcxpU3tEnXsjQiAn1oIRL8IjJOdxX77oy0u42eFEOpsBjudKmxqaFiP2jBykSIz'
const apiSecret = 'qNaAZxgyUrzXIFK6MBg4d1WztNEh5KQJY6otHrWqSkozhiZ1ctpi8FciNNR0dFKZ'
const client = new Spot(apiKey, apiSecret)

client.allOrders('XRPUSDT', { orderId: 0, limit: 1000 })
  .then(response => {
    const orders = response.data.filter(order => order.status === "FILLED" || order.status === "PARTIALLY_FILLED");
    console.log(orders);
    console.log(orders.length);
  })
  .catch(error => client.logger.error(error))

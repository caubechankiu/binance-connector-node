const Spot = require('../../../src/spot')

const apiKey = '5mcxpU3tEnXsjQiAn1oIRL8IjJOdxX77oy0u42eFEOpsBjudKmxqaFiP2jBykSIz'
const apiSecret = 'qNaAZxgyUrzXIFK6MBg4d1WztNEh5KQJY6otHrWqSkozhiZ1ctpi8FciNNR0dFKZ'
const client = new Spot(apiKey, apiSecret)

client.savingsAccount().then(response => {
  const positionAmountVos = response.data.positionAmountVos.filter(({ amount }) => Number(amount));
  console.log(positionAmountVos);
})
  .catch(error => client.logger.error(error))

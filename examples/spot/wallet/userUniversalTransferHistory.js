const Spot = require('../../../src/spot')

const apiKey = '5mcxpU3tEnXsjQiAn1oIRL8IjJOdxX77oy0u42eFEOpsBjudKmxqaFiP2jBykSIz'
const apiSecret = 'qNaAZxgyUrzXIFK6MBg4d1WztNEh5KQJY6otHrWqSkozhiZ1ctpi8FciNNR0dFKZ'
const client = new Spot(apiKey, apiSecret)

const main = async () => {
  let endTime = new Date().getTime();
  const response = await client.userUniversalTransferHistory('FUNDING_MAIN', {
    startTime: endTime - 6 * 30 * 24 * 60 * 60 * 1000,
    endTime,
    current: 1,
    size: 100,
  })
  console.log(response.data);
}

main()
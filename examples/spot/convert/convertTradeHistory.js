const Spot = require('../../../src/spot')

const apiKey = '5mcxpU3tEnXsjQiAn1oIRL8IjJOdxX77oy0u42eFEOpsBjudKmxqaFiP2jBykSIz'
const apiSecret = 'qNaAZxgyUrzXIFK6MBg4d1WztNEh5KQJY6otHrWqSkozhiZ1ctpi8FciNNR0dFKZ'
const client = new Spot(apiKey, apiSecret)

const main = async () => {
  let endTime = new Date().getTime();
  while (true) {
    const response = await client.convertTradeHistory(endTime - 30 * 24 * 60 * 60 * 1000 + 1, endTime, { limit: 1000 })
    console.log(response.data);
    if (!response.data.moreData) {
      break;
    }
    endTime = endTime - 30 * 24 * 60 * 60 * 1000
    await new Promise(r => setTimeout(r, 1000));
  }
}

main()

const Spot = require('../../../src/spot')

const apiKey = '5mcxpU3tEnXsjQiAn1oIRL8IjJOdxX77oy0u42eFEOpsBjudKmxqaFiP2jBykSIz'
const apiSecret = 'qNaAZxgyUrzXIFK6MBg4d1WztNEh5KQJY6otHrWqSkozhiZ1ctpi8FciNNR0dFKZ'
const client = new Spot(apiKey, apiSecret)

const main = async () => {
  let endTime = new Date().getTime();
  for (let i = 0; i < 10; i++) {
    const response = await client.savingsPurchaseRecord('DAILY', {
      startTime: endTime - 30 * 24 * 60 * 60 * 1000 + 1,
      endTime,
      current: 1,
      size: 100,
    })
    console.log(response.data);
    endTime = endTime - 30 * 24 * 60 * 60 * 1000
    await new Promise(r => setTimeout(r, 1000));
  }
  // client.savingsPurchaseRecord('ACTIVITY', {
  //   startTime,
  //   endTime: startTime + 30 * 24 * 60 * 60 * 1000,
  //   current: 1,
  //   size: 100,
  // }).then(response => client.logger.log(response.data))
  //   .catch(error => client.logger.error(error))

  // client.savingsPurchaseRecord('CUSTOMIZED_FIXED', {
  //   startTime,
  //   endTime: startTime + 30 * 24 * 60 * 60 * 1000,
  //   current: 1,
  //   size: 100,
  // }).then(response => client.logger.log(response.data))
  //   .catch(error => client.logger.error(error))
}

main()

const Spot = require('../../../src/spot')

const apiKey = '3zMooRt9yt6u7b4HcA16YDk8U8tv2UVge01L0L5v7FL02446nvbxbebZ2KGDZcDy'
const apiSecret = 'Lig4lMOL3SDStqam8acPg74ocoTsXIMFvG0NAuYaWj8pPisuYf3noLznSAY24Wuf'
const client = new Spot(apiKey, apiSecret)

const main = async () => {
  let endTime = new Date().getTime();
  while (true) {
    const response = await client.userUniversalTransferHistory('FUNDING_MAIN', {
      startTime: endTime - 6 * 30 * 24 * 60 * 60 * 1000,
      endTime,
      current: 1,
      size: 100,
    })
    console.log(response.data);
    endTime = endTime - 6 * 30 * 24 * 60 * 60 * 1000;
  }
}

main()
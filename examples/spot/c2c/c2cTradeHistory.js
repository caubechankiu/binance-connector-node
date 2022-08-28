const Spot = require('../../../src/spot')

const apiKey = '3zMooRt9yt6u7b4HcA16YDk8U8tv2UVge01L0L5v7FL02446nvbxbebZ2KGDZcDy'
const apiSecret = 'Lig4lMOL3SDStqam8acPg74ocoTsXIMFvG0NAuYaWj8pPisuYf3noLznSAY24Wuf'
const client = new Spot(apiKey, apiSecret)


const main = async () => {
  let endTimestamp = new Date().getTime();
  while (true) {
    const startTimestamp = endTimestamp - 30 * 24 * 60 * 60 * 1000;
    // console.log({ startTimestamp: new Date(startTimestamp), endTimestamp: new Date(endTimestamp) });
    const response = await client.c2cTradeHistory('BUY', {
      startTimestamp,
      endTimestamp,
      page: 1,
      rows: 100,
    })
    if (response.data.data.length) {
      console.log(response.data.data);
    }
    // endTimestamp = startTimestamp;
  }
}

main()

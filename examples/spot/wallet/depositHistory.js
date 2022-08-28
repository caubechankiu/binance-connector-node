const Spot = require('../../../src/spot')

const apiKey = '3zMooRt9yt6u7b4HcA16YDk8U8tv2UVge01L0L5v7FL02446nvbxbebZ2KGDZcDy'
const apiSecret = 'Lig4lMOL3SDStqam8acPg74ocoTsXIMFvG0NAuYaWj8pPisuYf3noLznSAY24Wuf'
const client = new Spot(apiKey, apiSecret)

client.depositHistory().then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))

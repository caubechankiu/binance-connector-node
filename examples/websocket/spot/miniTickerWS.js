const { Console } = require('console')
const fs = require('fs')
const Spot = require('../../../src/spot')

const output = fs.createWriteStream('./stdout.log')
const errorOutput = fs.createWriteStream('./stderr.log')
const logger = new Console({
  stdout: output,
  stderr: errorOutput
})

const client = new Spot('', '', {
  logger: console
})

const callbacks = {
  open: () => client.logger.debug('open'),
  close: () => client.logger.debug('closed'),
  message: data => client.logger.log(data)
}

// all pairs
const wsRef = client.miniTickerWS(null, callbacks)

// single pair
// const wsRef = client.miniTickerWS('bnbusdt', callbacks)

// setTimeout(() => client.unsubscribe(wsRef), 5000)
// check the output file

/*
 * Copyright (c) 2022.
 * Author: Mateusz "Z4NR34L" Janota
 * Author URI: https://www.zanreal.pl/
 * Author email: software@zanreal.pl
 */

import { SnmpAdapter } from "ever-ups-adapter"
import {Transform} from "node:stream"
import {Console} from "node:console"
import logUpdate from "log-update"

const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
const logger = new Console({ stdout: ts })

const getTable = (data) => {
  logger.table(data)
  return (ts.read() || '').toString()
}

const session = new SnmpAdapter({
  address: "<YOUR_DEVICE_IP_ADDRESS>"
}, {
  verbose: true
})

setInterval(async () => {

  await session.getAllData().then(data => {
    logUpdate(getTable(data))
  }).catch(error => logUpdate(error))
}, 160)

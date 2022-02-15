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

const _status = {
  1: "other",
  2: "none",
  3: "normal",
  4: "bypass",
  5: "battery",
  6: "booster",
  7: "reducer",
}

const getTable = (data) => {
  logger.table(data)
  return (ts.read() || '').toString()
}

const session = new SnmpAdapter({
  address: "10.0.0.222",
  community: "public"
})

setInterval(async () => {

  await session.getAllData().then(data => {

    /**
     * Adding string typed status for better visual check
     * @type {*&{status: {value: *}}}
     */
    data = {
      ...data,
      status: { value: _status[data.output_source.value] }
    }

    logUpdate(getTable(data))

  }).catch(error => logUpdate(error))
}, 160)

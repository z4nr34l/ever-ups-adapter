/*
 * Copyright (c) 2022.
 * Author: Mateusz "Z4NR34L" Janota
 * Author URI: https://www.zanreal.pl/
 * Author email: software@zanreal.pl
 */
const adapter = require('ever-ups-adapter')

async function Main() {
  const session = adapter.createSession({
    address: "10.0.0.222"
  }, {
    verbose: false
  })

  await session.getAllData().then(data => console.table(data)).catch(error => console.error(error))
}

Main()

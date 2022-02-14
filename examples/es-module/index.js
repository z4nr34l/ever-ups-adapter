/*
 * Copyright (c) 2022.
 * Author: Mateusz "Z4NR34L" Janota
 * Author URI: https://www.zanreal.pl/
 * Author email: software@zanreal.pl
 */
import { SnmpAdapter } from "ever-ups-adapter"

async function Main() {
  const session = new SnmpAdapter({
    address: "10.0.0.222",
    community: "public"
  })

  await session.getAllData().then(data => console.table(data)).catch(error => console.error(error))
}

Main()

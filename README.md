# EVER UPS Adapter

---
This module implements modified version of [net-snmp](https://github.com/markabrahams/node-net-snmp) as EVER is adding \x00 (NULL char) at the end of every response line. 

---
## Support matrix

| Device    | Supported protocols |
|-----------|---------------------|
| RT3000 XL | SNMP (v1)           |

If you tested this adapter on another device, and it worked as should, please add PR with updated table above.

---
## SNMP OID & variables list

| OID                      | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| `1.3.6.1.2.1.33.1.1.1.0` | Manufacturer name                                             |
| `1.3.6.1.2.1.33.1.1.2.0` | Model name                                                    |
| `1.3.6.1.2.1.33.1.1.3.0` | Device firmware version                                       | 
| `1.3.6.1.2.1.33.1.1.4.0` | Agent firmware version                                        |
| `1.3.6.1.2.1.33.1.1.5.0` | Identification name                                           |
| `1.3.6.1.2.1.33.1.1.6.0` | Output devices identification                                 |
| `1.3.6.1.2.1.33.1.2.1.0` | Battery status                                                |
| `1.3.6.1.2.1.33.1.2.2.0` | Seconds on battery                                            |
| `1.3.6.1.2.1.33.1.2.3.0` | Estimated minutes remaining                                   |
| `1.3.6.1.2.1.33.1.2.4.0` | Estimated battery percentage                                  |
| `1.3.6.1.2.1.33.1.2.5.0` | Battery voltage                                               |
| `1.3.6.1.2.1.33.1.2.6.0` | Battery current                                               |
| `1.3.6.1.2.1.33.1.2.7.0` | Battery temperature                                           |
| `1.3.6.1.2.1.33.1.3.1.0` | Count of time the input entered an out-of-tolerance condition |
| `1.3.6.1.2.1.33.1.3.2.0` | Utilized input lines number                                   |
| `1.3.6.1.2.1.33.1.4.1.0` | Output source                                                 |
| `1.3.6.1.2.1.33.1.4.2.0` | Output frequency                                              |
| `1.3.6.1.2.1.33.1.4.3.0` | Output lines number                                           |
| `1.3.6.1.2.1.33.1.5.1.0` | Bypass frequency                                              |
| `1.3.6.1.2.1.33.1.5.2.0` | Bypass lines number                                           |
| `1.3.6.1.2.1.33.1.6.1.0` | Number of active alarm conditions                             |
| `1.3.6.1.2.1.33.1.7.1.0` | UPS test name                                                 |
| `1.3.6.1.2.1.33.1.7.2.0` | UPS test spin lock                                            |
| `1.3.6.1.2.1.33.1.7.3.0` | UPS test diagnostics result                                   |
| `1.3.6.1.2.1.33.1.7.4.0` | UPS test result detail                                        |
| `1.3.6.1.2.1.33.1.7.5.0` | UPS test start time                                           |
| `1.3.6.1.2.1.33.1.7.6.0` | UPS test elapsed time                                         |

### Example input line table

| OID                                 | Description              |
|-------------------------------------|--------------------------|
| `1.3.6.1.2.1.33.1.3.3.1.<index>.1`  | Input index              |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.2`  | Current input frequency  |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.3`  | Current input voltage    |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.4`  | Current input current    |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.5`  | Current input true power |


---
## HTTP API Attributes List
 Feature will come in future releases

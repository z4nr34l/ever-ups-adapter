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

| OID                       | Description                                                   |
|---------------------------|---------------------------------------------------------------|
| `1.3.6.1.2.1.33.1.1.1.0`  | Manufacturer name                                             |
| `1.3.6.1.2.1.33.1.1.2.0`  | Model name                                                    |
| `1.3.6.1.2.1.33.1.1.3.0`  | Device firmware version                                       | 
| `1.3.6.1.2.1.33.1.1.4.0`  | Agent firmware version                                        |
| `1.3.6.1.2.1.33.1.1.5.0`  | Identification name                                           |
| `1.3.6.1.2.1.33.1.1.6.0`  | Output devices identification                                 |
| `1.3.6.1.2.1.33.1.2.1.0`  | Battery status                                                |
| `1.3.6.1.2.1.33.1.2.2.0`  | Seconds on battery                                            |
| `1.3.6.1.2.1.33.1.2.3.0`  | Estimated minutes remaining                                   |
| `1.3.6.1.2.1.33.1.2.4.0`  | Estimated battery percentage                                  |
| `1.3.6.1.2.1.33.1.2.5.0`  | Battery voltage                                               |
| `1.3.6.1.2.1.33.1.2.6.0`  | Battery current                                               |
| `1.3.6.1.2.1.33.1.2.7.0`  | Battery temperature                                           |
| `1.3.6.1.2.1.33.1.3.1.0`  | Count of time the input entered an out-of-tolerance condition |
| `1.3.6.1.2.1.33.1.3.2.0`  | Utilized input lines number                                   |
| `1.3.6.1.2.1.33.1.4.1.0`  | Output source                                                 |
| `1.3.6.1.2.1.33.1.4.2.0`  | Output frequency                                              |
| `1.3.6.1.2.1.33.1.4.3.0`  | Output lines number                                           |
| `1.3.6.1.2.1.33.1.5.1.0`  | Bypass frequency                                              |
| `1.3.6.1.2.1.33.1.5.2.0`  | Bypass lines number                                           |
| `1.3.6.1.2.1.33.1.6.1.0`  | Number of active alarm conditions                             |
| `1.3.6.1.2.1.33.1.7.1.0`  | UPS test name                                                 |
| `1.3.6.1.2.1.33.1.7.2.0`  | UPS test spin lock                                            |
| `1.3.6.1.2.1.33.1.7.3.0`  | UPS test diagnostics result                                   |
| `1.3.6.1.2.1.33.1.7.4.0`  | UPS test result detail                                        |
| `1.3.6.1.2.1.33.1.7.5.0`  | UPS test start time                                           |
| `1.3.6.1.2.1.33.1.7.6.0`  | UPS test elapsed time                                         |
| `1.3.6.1.2.1.33.1.8.1.0`  | UPS shutdown type                                             |
| `1.3.6.1.2.1.33.1.8.2.0`  | UPS shutdown after delay                                      |
| `1.3.6.1.2.1.33.1.8.3.0`  | UPS startup after delay                                       |
| `1.3.6.1.2.1.33.1.8.4.0`  | UPS reboot with duration                                      |
| `1.3.6.1.2.1.33.1.8.5.0`  | UPS auto restart                                              |
| `1.3.6.1.2.1.33.1.9.1.0`  | Nominal input voltage                                         |
| `1.3.6.1.2.1.33.1.9.2.0`  | Nominal input frequency                                       |
| `1.3.6.1.2.1.33.1.9.3.0`  | Nominal output voltage                                        |
| `1.3.6.1.2.1.33.1.9.4.0`  | Nominal output frequency                                      |
| `1.3.6.1.2.1.33.1.9.5.0`  | Nominal Volt-Amp rating                                       |
| `1.3.6.1.2.1.33.1.9.6.0`  | Nominal output power rating                                   |
| `1.3.6.1.2.1.33.1.9.7.0`  | Low battery alert condition of estimated minutes remaining    |
| `1.3.6.1.2.1.33.1.9.8.0`  | Status of audible alarm                                       |
| `1.3.6.1.2.1.33.1.9.9.0`  | Minimum input line voltage allowed to transfer to backup      |
| `1.3.6.1.2.1.33.1.9.10.0` | Maximum input line voltage allowed to transfer to backup      |

### Example input line table

| OID                                 | Description      |
|-------------------------------------|------------------|
| `1.3.6.1.2.1.33.1.3.3.1.<index>.1`  | Input index      |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.2`  | Input frequency  |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.3`  | Input voltage    |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.4`  | Input current    |
| `1.3.6.1.2.1.33.1.3.3.1.<index>.5`  | Input true power |

### Example output line table

| OID                                | Description            |
|------------------------------------|------------------------|
| `1.3.6.1.2.1.33.1.4.4.1.<index>.1` | Output index           |
| `1.3.6.1.2.1.33.1.4.4.1.<index>.2` | Output voltage         |
| `1.3.6.1.2.1.33.1.4.4.1.<index>.3` | Output current         |
| `1.3.6.1.2.1.33.1.4.4.1.<index>.4` | Output true power      |
| `1.3.6.1.2.1.33.1.4.4.1.<index>.5` | Output load percentage |


---
## HTTP API Attributes List
 Feature will come in future releases

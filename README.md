# EVER UPS Adapter

---
This module implements modified version of [net-snmp](https://github.com/markabrahams/node-net-snmp) as EVER is adding \x00 (NULL char) at the end of every response line. 

---
## Support matrix

| Device    | Supported protocols |
|-----------|---------------------|
| RT3000 XL | SNMP (v1)           |

If you tested this adapter on another device and it worked as should, please add PR with updated table above.

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
| `1.3.6.1.2.1.33.1.3.2.0` | Number of input lines utilized in device                      |

### Example input line table
Input index: `1`

| OID                          | Description              |
|------------------------------|--------------------------|
| `1.3.6.1.2.1.33.1.3.3.1.1.1` | Input index              |
| `1.3.6.1.2.1.33.1.3.3.1.1.2` | Current input frequency  |
| `1.3.6.1.2.1.33.1.3.3.1.1.3` | Current input voltage    |
| `1.3.6.1.2.1.33.1.3.3.1.1.4` | Current input current    |
| `1.3.6.1.2.1.33.1.3.3.1.1.5` | Current input true power |


---
## HTTP API Attributes List
 Feature will come in future releases

/*
 * Copyright (c) 2022.
 * Author: Mateusz "Z4NR34L" Janota
 * Author URI: https://www.zanreal.pl/
 * Author email: software@zanreal.pl
 */

/**
 * Dependencies
 */
const snmp = require('net-snmp')

/**
 * Default OID for SNMP walk
 * @type {string}
 * @private
 */
const _defaultOid = "1.3.6.1.2.1.33.1"

/**
 * Max repetitions it will be ignored unless using SNMP version 2c
 * @type {number}
 * @private
 */
const _maxRepetitions = 20

/**
 * Supported OIDs list
 * @private
 */
const _oids = [
  _defaultOid+".1.1.0",
  _defaultOid+".1.2.0",
  _defaultOid+".1.3.0",
  _defaultOid+".1.4.0",
  _defaultOid+".1.5.0",
  _defaultOid+".1.6.0",
  _defaultOid+".2.1.0",
  _defaultOid+".2.2.0",
  _defaultOid+".2.3.0",
  _defaultOid+".2.4.0",
  _defaultOid+".2.5.0",
  _defaultOid+".2.6.0",
  _defaultOid+".2.7.0",
  _defaultOid+".3.1.0",
  _defaultOid+".3.2.0",
];

/**
 * Enum data mapping
 * @type {{"1.3.6.1.2.1.33.1.3.2.0": string, "1.3.6.1.2.1.33.1.3.1.0": string, "1.3.6.1.2.1.33.1.1.3.0": string, "1.3.6.1.2.1.33.1.1.2.0": string, "1.3.6.1.2.1.33.1.1.1.0": string, "1.3.6.1.2.1.33.1.1.6.0": string, "1.3.6.1.2.1.33.1.1.5.0": string, "1.3.6.1.2.1.33.1.1.4.0": string, "1.3.6.1.2.1.33.1.2.7.0": string, "1.3.6.1.2.1.33.1.2.2.0": string, "1.3.6.1.2.1.33.1.2.1.0": string, "1.3.6.1.2.1.33.1.2.4.0": string, "1.3.6.1.2.1.33.1.2.3.0": string, "1.3.6.1.2.1.33.1.2.6.0": string, "1.3.6.1.2.1.33.1.2.5.0": string}}
 * @private
 */
const _snmpOidDataMapping = {
  '1.3.6.1.2.1.33.1.1.1.0': "manufacturer_name",
  '1.3.6.1.2.1.33.1.1.2.0': "model_name",
  '1.3.6.1.2.1.33.1.1.3.0': "device_firmware_version",
  '1.3.6.1.2.1.33.1.1.4.0': "agent_firmware_version",
  '1.3.6.1.2.1.33.1.1.5.0': "device_identification",
  '1.3.6.1.2.1.33.1.1.6.0': "output_device_identification",
  '1.3.6.1.2.1.33.1.2.1.0': "battery_status",
  '1.3.6.1.2.1.33.1.2.2.0': "seconds_on_battery",
  '1.3.6.1.2.1.33.1.2.3.0': "estimated_minutes_remaining",
  '1.3.6.1.2.1.33.1.2.4.0': "estimated_battery_percentage",
  '1.3.6.1.2.1.33.1.2.5.0': "battery_voltage",
  '1.3.6.1.2.1.33.1.2.6.0': "battery_current",
  '1.3.6.1.2.1.33.1.2.7.0': "battery_temperature",
  '1.3.6.1.2.1.33.1.3.1.0': "oot_count",
  '1.3.6.1.2.1.33.1.3.2.0': "lines_utilized_count",
};

/**
 * Internal SNMP ObjectTypes
 * @type {{"66": string, "67": string, "68": string, "130": string, "1": string, "2": string, "4": string, "5": string, "6": string, "128": string, "129": string, "70": string, "64": string, "65": string}}
 */
const _objectType = {
  1: "Boolean",
  2: "Integer",
  4: "OctetString",
  5: "Null",
  6: "OID",
  64: "IpAddress",
  65: "Counter",
  66: "Gauge",
  67: "TimeTicks",
  68: "Opaque",
  70: "Counter64",
  128: "NoSuchObject",
  129: "NoSuchInstance",
  130: "EndOfMibView"
};

/**
 * SnmpAdapter class definition
 */
const SnmpAdapter = function({ address, community }) {

  if(!address) {
    console.error(`Please set SNMP device address`)
    throw new Error(`Please set SNMP device address`)
  }
  if(!community) {
    console.log(`Community name is not set, setting to default ("public")`)
  }

  if(!this.session) {
    this.session = snmp.createSession(address, community);
  }
  if(!this.oids) {
    this.oids = _oids;
  }
  if(!this.snmpOidDataMapping) {
    this.snmpOidDataMapping = _snmpOidDataMapping;
  }
  if(!this.objectType) {
    this.objectType = _objectType
  }

}

SnmpAdapter.createSession = function({ address, community }) {
  this.session = new SnmpAdapter({ address, community})
  return this.session
}

SnmpAdapter.prototype.getSnmpData = function(responseCb) {
  this.session.get(this.oids, responseCb);
  return this
}

SnmpAdapter.prototype.getAllData = function() {
  return new Promise(async (resolve, reject) => {
    let _data = [];

    await this.session.walk(_defaultOid, _maxRepetitions, function(varbinds) {

      for (var i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError(varbinds[i])) {
          console.error(snmp.varbindError(varbinds[i]));
        } else {
          _data.push({ oid: varbinds[i].oid, name: _snmpOidDataMapping[varbinds[i].oid], type: _objectType[varbinds[i].type], value: varbinds[i].value.toString() })
        }
      }

    }, function(error) {

      if(error) {
        reject(error)
      } else {
        resolve(_data)
      }

    });
  })
}

/**
 * Exports
 */
exports.SnmpAdapter = SnmpAdapter;
exports.createSession = SnmpAdapter.createSession

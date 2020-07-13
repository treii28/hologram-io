# Hologram.Device

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique device identifier or device ID | [optional] 
**orgid** | **Number** | ID of the organization that owns the device (may be a personal organization) | [optional] 
**name** | **String** | User-configurable device name | [optional] 
**type** | **String** | for internal use | [optional] 
**whencreated** | **String** | Timestamp when the device record was created | [optional] 
**phonenumber** | **String** | Phone number associated with device. You can purchase a phone number on the Dashboard. | [optional] 
**phonenumberCost** | **String** | Monthly cost of phone number | [optional] 
**tunnelable** | **Number** | Indicates if tunneling is enabled for the device  See the [guide](https://hologram.io/docs/guide/cloud/spacebridge-tunnel) for details | [optional] 
**imei** | **String** | sv: 9575200740240801 (string) - Last IMEI-SV seen for this device. This is the same as IMEI but instead of check digit has two digits at end for software version. | [optional] 
**hidden** | **Number** | For internal Hologram use | [optional] 
**tags** | [**[Tags]**](Tags.md) | User-configurable categories that you can use to classify your devices | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 
**lastsession** | [**Lastsession**](Lastsession.md) |  | [optional] 
**model** | **String** | Model of modem based on IMEI value | [optional] 
**manufacturer** | **String** | Manufacturer of modem based on IMEI value | [optional] 



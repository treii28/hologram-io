# Hologram.UpdateSIMsDataThresholdClosedBetaresponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique link identifier or link ID | [optional] 
**deviceid** | **Number** | Device ID corresponding to the link | [optional] 
**devicename** | **String** | Name of device corresponding to the link | [optional] 
**orgid** | **Number** | Organization ID of the organization that owns the link/device | [optional] 
**tunnelable** | **Number** | Is tunneling enabled for the link? 1 = true, 0 = false | [optional] 
**partnerid** | **Number** |  | [optional] 
**sim** | **String** | SIM number or ICCID | [optional] 
**msisdn** | **String** | MSISDN corresponding to the link | [optional] 
**imsi** | **Number** | IMSI corresponding to the link | [optional] 
**dataplansubscriptionid** | **Number** | Data plan ID | [optional] 
**zone** | **Number** | Geographical zone of the data plan | [optional] 
**carrier** | **Number** | ID of the carrier that the link last connected to | [optional] 
**state** | **String** | State of the link. LIVE, PAUSED, DEACTIVATE | [optional] 
**whenclaimed** | **String** | UTC timestamp when the SIM was activated | [optional] 
**whenexpires** | **String** | UTC timestamp when the current billing period ends or when the data plan was canceled | [optional] 
**whencreated** | **String** | UTC timestamp when the link's record was first created | [optional] 
**overagelimit** | **Number** | SIM data limit in Bytes. If there is no limit, `overagelimit` is -1. See the | [optional] 
**apn** | **String** | APN to use when connecting with this SIM card | [optional] 



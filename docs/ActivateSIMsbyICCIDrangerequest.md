# Hologram.ActivateSIMsbyICCIDrangerequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**simrange** | **String** | Range of SIM numbers to activate | [optional] 
**plan** | **Number** | Device data plan. Look up plan IDs with  [List Data Plans](#reference/device-management/data-plans/list-data-plans). | [optional] 
**zone** | **String** | The default value is 'global'. Reference /plans endpoint for valid zones available with each plan. | [optional] 
**orgid** | **Number** | Specify the organization to activate the plan on. Your API key must have activation role privileges on the target organization | [optional] 
**tagid** | **Number** | Add a tag specified by the tag ID | [optional] 



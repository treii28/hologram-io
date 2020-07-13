# Hologram.DataPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier for the data plan or plan ID | [optional] 
**name** | **String** | Data plan name | [optional] 
**description** | **String** |  | [optional] 
**data** | **Number** | Monthly data included in the plan in Bytes | [optional] 
**enabled** | **Number** | Indicates if the plan is available for new subscriptions. 1 = true, 0 = false | [optional] 
**developerplan** | **Number** | Indicates if the plan is a developer plan.  This is equivalent to Pilot Plan. Only one Pilot/developer plan allowed per account. There is no monthly fee for the Pilot/developer plan. | [optional] 
**tiers** | [**Tiers**](Tiers.md) |  | [optional] 
**currentTier** | **String** | The current tier that the plan is on | [optional] 
**zones** | [**Zones1**](Zones1.md) |  | [optional] 



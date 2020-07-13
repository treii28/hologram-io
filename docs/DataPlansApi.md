# Hologram.DataPlansApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getaDataPlan**](DataPlansApi.md#getaDataPlan) | **GET** /api/1/plans/{planid} | Get a Data Plan
[**listAllDataPlans**](DataPlansApi.md#listAllDataPlans) | **GET** /api/1/plans | List All Data Plans
[**updateaSIMsDataPlan**](DataPlansApi.md#updateaSIMsDataPlan) | **POST** /api/1/links/cellular/{linkid}/changeplan | Update a SIM's Data Plan


<a name="getaDataPlan"></a>
# **getaDataPlan**
> GetaDataPlanresponse getaDataPlan(planid)

Get a Data Plan

`GET https://dashboard.hologram.io/api/1/plans/{planid}`  Retrieves the details of a specific data plan.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DataPlansApi();

var planid = 1.2; // Number | Return the data plan with the specified plan ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getaDataPlan(planid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planid** | **Number**| Return the data plan with the specified plan ID | 

### Return type

[**GetaDataPlanresponse**](GetaDataPlanresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllDataPlans"></a>
# **listAllDataPlans**
> ListAllDataPlansresponse listAllDataPlans(opts)

List All Data Plans

`GET https://dashboard.hologram.io/api/1/plans`  Returns all data plans matching the specified parameters.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DataPlansApi();

var opts = { 
  'orgid': 1.2, // Number | Only return plans that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many plans.
  'id': 1.2, // Number | Only return results for the given plan ID
  'ids': ["ids_example"], // [String] | Only return results for the given plan IDs
  'startafter': 1.2 // Number | Return the plans whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllDataPlans(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return plans that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many plans. | [optional] 
 **id** | **Number**| Only return results for the given plan ID | [optional] 
 **ids** | [**[String]**](String.md)| Only return results for the given plan IDs | [optional] 
 **startafter** | **Number**| Return the plans whose IDs come after the given ID | [optional] 

### Return type

[**ListAllDataPlansresponse**](ListAllDataPlansresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateaSIMsDataPlan"></a>
# **updateaSIMsDataPlan**
> UpdateaSIM27sDataPlanresponse updateaSIMsDataPlan(linkid, contentType, body)

Update a SIM's Data Plan

`POST https://dashboard.hologram.io/api/1/links/cellular/{linkid}/changeplan`  Updates a SIM's cellular plan by setting the values of the parameters passed. Any parameters not provided are left unchanged.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DataPlansApi();

var linkid = 1.2; // Number | Integer ID of the link to change

var contentType = "contentType_example"; // String | 

var body = new Hologram.UpdateaSIM27sDataPlanrequest(); // UpdateaSIM27sDataPlanrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateaSIMsDataPlan(linkid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Integer ID of the link to change | 
 **contentType** | **String**|  | 
 **body** | [**UpdateaSIM27sDataPlanrequest**](UpdateaSIM27sDataPlanrequest.md)|  | 

### Return type

[**UpdateaSIM27sDataPlanresponse**](UpdateaSIM27sDataPlanresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


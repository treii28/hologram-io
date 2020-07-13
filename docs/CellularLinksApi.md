# Hologram.CellularLinksApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateMultipleSIMsbyICCID**](CellularLinksApi.md#activateMultipleSIMsbyICCID) | **POST** /api/1/links/cellular/bulkclaim | Activate Multiple SIMs by ICCID
[**activateSingleSIMbyICCID**](CellularLinksApi.md#activateSingleSIMbyICCID) | **POST** /api/1/links/cellular/sim_{ICCID}/claim | Activate Single SIM by ICCID
[**listAllCellularLinks**](CellularLinksApi.md#listAllCellularLinks) | **GET** /api/1/links/cellular | List All Cellular Links
[**pauseorUnpauseData**](CellularLinksApi.md#pauseorUnpauseData) | **POST** /api/1/links/cellular/{linkid}/state | Pause or Unpause Data
[**retrieveSIMsStateHistory**](CellularLinksApi.md#retrieveSIMsStateHistory) | **GET** /api/1/links/cellular/{linkid}/history | Retrieve SIM's State History
[**retrieveaCellularLink**](CellularLinksApi.md#retrieveaCellularLink) | **GET** /api/1/links/cellular/{linkid} | Retrieve a Cellular Link
[**updateSIMsDataThresholdClosedBeta**](CellularLinksApi.md#updateSIMsDataThresholdClosedBeta) | **PUT** /api/1/links/cellular/{linkid}/ | Update SIM's Data Threshold - Closed Beta
[**updateSIMsOverageLimit**](CellularLinksApi.md#updateSIMsOverageLimit) | **POST** /api/1/links/cellular/{linkid}/overagelimit | Update SIM's Overage Limit


<a name="activateMultipleSIMsbyICCID"></a>
# **activateMultipleSIMsbyICCID**
> ActivateMultipleSIMsbyICCIDresponse activateMultipleSIMsbyICCID(contentType, body)

Activate Multiple SIMs by ICCID

`POST https://dashboard.hologram.io/api/1/links/cellular/bulkclaim`  Include all ICCIDs to be activated separated by commas in array.  Activates multiple SIMs on the cellular network. Once a SIM is activated, you can begin to pass data. Any monthly charges and data usage charges will take effect.  If you are activating SIMs on a plan that has a monthly fee, your account will be immediately charged the monthly fee for all devices you are activating. If your account does not have enough balance to cover these charges, the request will fail.  Activating SIMs creates new devices and corresponding cellular links.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.ActivateMultipleSIMsbyICCIDrequest(); // ActivateMultipleSIMsbyICCIDrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateMultipleSIMsbyICCID(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**ActivateMultipleSIMsbyICCIDrequest**](ActivateMultipleSIMsbyICCIDrequest.md)|  | 

### Return type

[**ActivateMultipleSIMsbyICCIDresponse**](ActivateMultipleSIMsbyICCIDresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="activateSingleSIMbyICCID"></a>
# **activateSingleSIMbyICCID**
> ActivateSingleSIMbyICCIDresponse activateSingleSIMbyICCID(ICCID, contentType, body)

Activate Single SIM by ICCID

`POST https://dashboard.hologram.io/api/1/links/cellular/sim_{ICCID}/claim`  Replace \"ICCID\" in request URL with ICCID of SIM to activate.  Activates single SIM on the cellular network. Once a SIM is activated, you can begin to pass data. Any monthly charges and data usage charges will take effect.  If you are activating a SIM on a plan that has a monthly fee, your account will be immediately charged the monthly fee for all devices you are activating. If your account does not have enough balance to cover these charges, the request will fail.  Activating a SIM creates a new device and corresponding cellular link.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var ICCID = "ICCID_example"; // String | 

var contentType = "contentType_example"; // String | 

var body = new Hologram.ActivateSingleSIMbyICCIDrequest(); // ActivateSingleSIMbyICCIDrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateSingleSIMbyICCID(ICCID, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ICCID** | **String**|  | 
 **contentType** | **String**|  | 
 **body** | [**ActivateSingleSIMbyICCIDrequest**](ActivateSingleSIMbyICCIDrequest.md)|  | 

### Return type

[**ActivateSingleSIMbyICCIDresponse**](ActivateSingleSIMbyICCIDresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllCellularLinks"></a>
# **listAllCellularLinks**
> ListAllCellularLinksresponse listAllCellularLinks(simrange, opts)

List All Cellular Links

`GET https://dashboard.hologram.io/api/1/links/cellular`  Returns a list of your SIM cards. However, we recommend using the /devices endpoint instead, which returns the cellular link information for each device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var simrange = "simrange_example"; // String | 9990005 (string, optional) Only return results for the given SIM/ICCID range

var opts = { 
  'orgid': 1.2, // Number | Only return results for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many links.
  'id': 1.2, // Number | Only return results for the given Link ID
  'ids': ["ids_example"], // [String] | Only return results for the given Link IDs
  'sim': "sim_example", // String | Only return results for the given SIM number/ICCID
  'sims': ["sims_example"], // [String] | Only return results for the given SIMs/ICCIDs
  'msisdn': "msisdn_example", // String | Only return results for the given MSISDN
  'tunnelable': true, // Boolean | Return the devices that are/n't tunnelable through Spacebridge
  'imsi': 1.2, // Number | Only return results for the given IMSI
  'imsis': ["imsis_example"], // [String] | Only return results for the given IMSIs
  'deviceid': 1.2, // Number | Only return results for the given device ID
  'deviceids': ["deviceids_example"], // [String] | Only return results for the given device IDs
  'claimedafter': 1.2, // Number | Only return results for the links claimed after the given time (Unix timestamp)
  'claimedbefore': 1.2, // Number | Only return results for the links claimed before the given time (Unix timestamp)
  'tagid': 1.2, // Number | Only return devices with the given tag ID
  'tagids': ["tagids_example"], // [String] | Only return results for the given device IDs
  'tagname': "tagname_example", // String | Only return devices with the given tag name
  'startafter': 1.2, // Number | Return the SIMs with link IDs that come after the given ID
  'showip': "showip_example", // String | 
  'carrierid': "carrierid_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllCellularLinks(simrange, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simrange** | **String**| 9990005 (string, optional) Only return results for the given SIM/ICCID range | 
 **orgid** | **Number**| Only return results for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many links. | [optional] 
 **id** | **Number**| Only return results for the given Link ID | [optional] 
 **ids** | [**[String]**](String.md)| Only return results for the given Link IDs | [optional] 
 **sim** | **String**| Only return results for the given SIM number/ICCID | [optional] 
 **sims** | [**[String]**](String.md)| Only return results for the given SIMs/ICCIDs | [optional] 
 **msisdn** | **String**| Only return results for the given MSISDN | [optional] 
 **tunnelable** | **Boolean**| Return the devices that are/n't tunnelable through Spacebridge | [optional] 
 **imsi** | **Number**| Only return results for the given IMSI | [optional] 
 **imsis** | [**[String]**](String.md)| Only return results for the given IMSIs | [optional] 
 **deviceid** | **Number**| Only return results for the given device ID | [optional] 
 **deviceids** | [**[String]**](String.md)| Only return results for the given device IDs | [optional] 
 **claimedafter** | **Number**| Only return results for the links claimed after the given time (Unix timestamp) | [optional] 
 **claimedbefore** | **Number**| Only return results for the links claimed before the given time (Unix timestamp) | [optional] 
 **tagid** | **Number**| Only return devices with the given tag ID | [optional] 
 **tagids** | [**[String]**](String.md)| Only return results for the given device IDs | [optional] 
 **tagname** | **String**| Only return devices with the given tag name | [optional] 
 **startafter** | **Number**| Return the SIMs with link IDs that come after the given ID | [optional] 
 **showip** | **String**|  | [optional] 
 **carrierid** | **String**|  | [optional] 

### Return type

[**ListAllCellularLinksresponse**](ListAllCellularLinksresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pauseorUnpauseData"></a>
# **pauseorUnpauseData**
> PauseorUnpauseDataresponse pauseorUnpauseData(linkid, contentType, body)

Pause or Unpause Data

`POST https://dashboard.hologram.io/api/1/links/cellular/{linkid}/state`  Pause or unpause your SIM. Pausing the SIM will prevent your device from passing any data. Paused SIMs still incur any applicable monthly reactivation fees.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var linkid = 1.2; // Number | Link ID of the link to modify

var contentType = "contentType_example"; // String | 

var body = new Hologram.PauseorUnpauseDatarequest(); // PauseorUnpauseDatarequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pauseorUnpauseData(linkid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Link ID of the link to modify | 
 **contentType** | **String**|  | 
 **body** | [**PauseorUnpauseDatarequest**](PauseorUnpauseDatarequest.md)|  | 

### Return type

[**PauseorUnpauseDataresponse**](PauseorUnpauseDataresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveSIMsStateHistory"></a>
# **retrieveSIMsStateHistory**
> RetrieveSIM27sStateHistoryresponse retrieveSIMsStateHistory(linkid)

Retrieve SIM's State History

Retrieve a list of your SIM's state changes. This includes activations, Preflight activations, pauses, unpauses, and deactivations.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var linkid = 1.2; // Number | Integer ID of the link to change


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveSIMsStateHistory(linkid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Integer ID of the link to change | 

### Return type

[**RetrieveSIM27sStateHistoryresponse**](RetrieveSIM27sStateHistoryresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveaCellularLink"></a>
# **retrieveaCellularLink**
> RetrieveaCellularLinkresponse retrieveaCellularLink(linkid)

Retrieve a Cellular Link

`GET https://dashboard.hologram.io/api/1/links/cellular/{linkid}`  Retrieves the details of an existing cellular link. You need only supply the unique link identifier (link ID), which you can find on the Dashboard or in the response of a /devices request.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var linkid = 1.2; // Number | Return the SIM with the given link ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveaCellularLink(linkid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Return the SIM with the given link ID | 

### Return type

[**RetrieveaCellularLinkresponse**](RetrieveaCellularLinkresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSIMsDataThresholdClosedBeta"></a>
# **updateSIMsDataThresholdClosedBeta**
> UpdateSIM27sDataThresholdClosedBetaresponse updateSIMsDataThresholdClosedBeta(linkid, contentType, body)

Update SIM's Data Threshold - Closed Beta

`PUT https://dashboard.hologram.io/api/1/links/cellular/{linkid}/` Update the data threshold of your device. This endpoint is available to users in our Closed Beta.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var linkid = 1.2; // Number | Unique link identifier or link ID

var contentType = "contentType_example"; // String | 

var body = new Hologram.UpdateSIM27sDataThresholdClosedBetarequest(); // UpdateSIM27sDataThresholdClosedBetarequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSIMsDataThresholdClosedBeta(linkid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Unique link identifier or link ID | 
 **contentType** | **String**|  | 
 **body** | [**UpdateSIM27sDataThresholdClosedBetarequest**](UpdateSIM27sDataThresholdClosedBetarequest.md)|  | 

### Return type

[**UpdateSIM27sDataThresholdClosedBetaresponse**](UpdateSIM27sDataThresholdClosedBetaresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSIMsOverageLimit"></a>
# **updateSIMsOverageLimit**
> UpdateSIM27sOverageLimitresponse updateSIMsOverageLimit(linkid, contentType, body)

Update SIM's Overage Limit

`POST https://dashboard.hologram.io/api/1/links/cellular/{linkid}/overagelimit`  Restrict the amount of data your device can use in a given billing period. Once your device reaches the data limit, the SIM will automatically pause. In order to unpause your device, you will need to increase the data limit.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CellularLinksApi();

var linkid = 1.2; // Number | Integer ID of the link to change

var contentType = "contentType_example"; // String | 

var body = new Hologram.UpdateSIM27sOverageLimitrequest(); // UpdateSIM27sOverageLimitrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSIMsOverageLimit(linkid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkid** | **Number**| Integer ID of the link to change | 
 **contentType** | **String**|  | 
 **body** | [**UpdateSIM27sOverageLimitrequest**](UpdateSIM27sOverageLimitrequest.md)|  | 

### Return type

[**UpdateSIM27sOverageLimitresponse**](UpdateSIM27sOverageLimitresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# Hologram.UsageDataApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAllRecentDataSessions**](UsageDataApi.md#listAllRecentDataSessions) | **GET** /api/1/usage/data | List All Recent Data Sessions
[**listDeviceOriginatedSMSUsage**](UsageDataApi.md#listDeviceOriginatedSMSUsage) | **GET** /api/1/usage/sms? | List Device-Originated SMS Usage
[**listUsageDatabyBillingPeriod**](UsageDataApi.md#listUsageDatabyBillingPeriod) | **GET** /api/1/usage/data/billing | List Usage Data by Billing Period
[**listUsageDatabyDay**](UsageDataApi.md#listUsageDatabyDay) | **GET** /api/1/usage/data/daily | List Usage Data by Day
[**listUsageDatabyMonth**](UsageDataApi.md#listUsageDatabyMonth) | **GET** /api/1/usage/data/monthly | List Usage Data by Month


<a name="listAllRecentDataSessions"></a>
# **listAllRecentDataSessions**
> ListAllRecentDataSessionsresponse listAllRecentDataSessions(opts)

List All Recent Data Sessions

`GET https://dashboard.hologram.io/api/1/usage/data`  Returns individual sessions and their data usage for the last three months. Use the linkid parameter to retrieve data sessions for a specific device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.UsageDataApi();

var opts = { 
  'orgid': 1.2, // Number | Return data sessions for devices owned by the specified organization
  'orgids': ["orgids_example"], // [String] | Return data sessions for devices owned by the specified organizations
  'startafter': 1.2, // Number | Return usage data for records whose ID come after the specified ID
  'linkid': 1.2, // Number | Return data sessions for a device specified by link ID
  'linkids': ["linkids_example"], // [String] | Return data sessions for devices specified by link IDs
  'tagid': 1.2, // Number | Return data sessions with specified tag ID
  'tagids': ["tagids_example"], // [String] | Return data sessions with specified tag IDs
  'timestart': 1.2, // Number | Return data sessions received after this time (Unix timestamp)
  'timeend': 1.2, // Number | Return data sessions received before this time (Unix timestamp)
  'tagname': "tagname_example", // String | Return data sessions with specified tags
  'islive': true, // Boolean | Return data sessions for live devices. Does not include data sessions for devices that are currently paused or inactive.
  'limit': 1.2 // Number | Return a maximum of this many usage sessions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllRecentDataSessions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Return data sessions for devices owned by the specified organization | [optional] 
 **orgids** | [**[String]**](String.md)| Return data sessions for devices owned by the specified organizations | [optional] 
 **startafter** | **Number**| Return usage data for records whose ID come after the specified ID | [optional] 
 **linkid** | **Number**| Return data sessions for a device specified by link ID | [optional] 
 **linkids** | [**[String]**](String.md)| Return data sessions for devices specified by link IDs | [optional] 
 **tagid** | **Number**| Return data sessions with specified tag ID | [optional] 
 **tagids** | [**[String]**](String.md)| Return data sessions with specified tag IDs | [optional] 
 **timestart** | **Number**| Return data sessions received after this time (Unix timestamp) | [optional] 
 **timeend** | **Number**| Return data sessions received before this time (Unix timestamp) | [optional] 
 **tagname** | **String**| Return data sessions with specified tags | [optional] 
 **islive** | **Boolean**| Return data sessions for live devices. Does not include data sessions for devices that are currently paused or inactive. | [optional] 
 **limit** | **Number**| Return a maximum of this many usage sessions | [optional] 

### Return type

[**ListAllRecentDataSessionsresponse**](ListAllRecentDataSessionsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDeviceOriginatedSMSUsage"></a>
# **listDeviceOriginatedSMSUsage**
> Object listDeviceOriginatedSMSUsage(opts)

List Device-Originated SMS Usage

`GET https://dashboard.hologram.io/api/1/usage/sms`  Returns individual device-originated SMS for the last three months. Use the linkid parameter to retrieve SMS for a specific device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.UsageDataApi();

var opts = { 
  'orgid': 1.2, // Number | Return SMS for devices owned by the specified organization
  'orgids': ["orgids_example"], // [String] | Return SMS for devices owned by the specified organizations
  'startafter': 1.2, // Number | Return SMS for devices whose linkid ID come after the specified ID
  'linkid': 1.2, // Number | Return SMS for a device specified by link ID
  'linkids': ["linkids_example"], // [String] | Return SMS for devices specified by link IDs
  'tagid': 1.2, // Number | Return SMS with specified tag ID
  'tagids': ["tagids_example"], // [String] | Return SMS with specified tag IDs
  'timestart': 1.2, // Number | Return SMS after this time (Unix timestamp)
  'timeend': 1.2, // Number | Return SMS before this time (Unix timestamp)
  'tagname': "tagname_example", // String | Return SMS with specified tags
  'islive': true, // Boolean | Return SMS for live devices. Does not include SMS for devices that are currently paused or inactive.
  'limit': 1.2 // Number | Return a maximum of this many SMS
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeviceOriginatedSMSUsage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Return SMS for devices owned by the specified organization | [optional] 
 **orgids** | [**[String]**](String.md)| Return SMS for devices owned by the specified organizations | [optional] 
 **startafter** | **Number**| Return SMS for devices whose linkid ID come after the specified ID | [optional] 
 **linkid** | **Number**| Return SMS for a device specified by link ID | [optional] 
 **linkids** | [**[String]**](String.md)| Return SMS for devices specified by link IDs | [optional] 
 **tagid** | **Number**| Return SMS with specified tag ID | [optional] 
 **tagids** | [**[String]**](String.md)| Return SMS with specified tag IDs | [optional] 
 **timestart** | **Number**| Return SMS after this time (Unix timestamp) | [optional] 
 **timeend** | **Number**| Return SMS before this time (Unix timestamp) | [optional] 
 **tagname** | **String**| Return SMS with specified tags | [optional] 
 **islive** | **Boolean**| Return SMS for live devices. Does not include SMS for devices that are currently paused or inactive. | [optional] 
 **limit** | **Number**| Return a maximum of this many SMS | [optional] 

### Return type

**Object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsageDatabyBillingPeriod"></a>
# **listUsageDatabyBillingPeriod**
> ListUsageDatabyBillingPeriodresponse listUsageDatabyBillingPeriod(opts)

List Usage Data by Billing Period

`GET https://dashboard.hologram.io/api/1/usage/data/billing`  Returns total data usage for each device summarized by billing period. Data is available for the last three months.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.UsageDataApi();

var opts = { 
  'orgid': 1.2, // Number | Return usage data for devices owned by organization specified by org ID
  'linkid': 1.2, // Number | Return usage data for device specified by link ID
  'tagid': 1.2, // Number | Return usage data for devices with tag specified by tag ID
  'limit': 1.2 // Number | Return a maximum of this many records
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsageDatabyBillingPeriod(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Return usage data for devices owned by organization specified by org ID | [optional] 
 **linkid** | **Number**| Return usage data for device specified by link ID | [optional] 
 **tagid** | **Number**| Return usage data for devices with tag specified by tag ID | [optional] 
 **limit** | **Number**| Return a maximum of this many records | [optional] 

### Return type

[**ListUsageDatabyBillingPeriodresponse**](ListUsageDatabyBillingPeriodresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsageDatabyDay"></a>
# **listUsageDatabyDay**
> ListUsageDatabyDayresponse listUsageDatabyDay(opts)

List Usage Data by Day

`GET https://dashboard.hologram.io/api/1/usage/data/daily`  Returns total data usage for each device summarized by day in UTC

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.UsageDataApi();

var opts = { 
  'orgid': 1.2, // Number | Return usage data for devices owned by organization specified by org ID
  'linkid': 1.2, // Number | Return usage data for a device specified by link ID
  'linkids': ["linkids_example"], // [String] | Return usage data for devices specified by link IDs
  'tagid': 1.2, // Number | Return usage data for devices with tag specified by tag ID
  'tagids': ["tagids_example"], // [String] | Return usage data for devices with tags specified by tag IDs
  'tagname': "tagname_example", // String | Return usage data for devices with tags specified by tag name
  'timestart': 1.2, // Number | Return usage data received after this time (Unix timestamp)
  'timeend': 1.2, // Number | Return usage data received before this time (Unix timestamp)
  'islive': true, // Boolean | Return data sessions for devices in Live status. Does not include data sessions for devices that are currently paused or inactive.
  'startafter': 1.2, // Number | Return usage data for records whose ID come after the specified ID
  'limit': 1.2 // Number | Return a maximum of this many usage records
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsageDatabyDay(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Return usage data for devices owned by organization specified by org ID | [optional] 
 **linkid** | **Number**| Return usage data for a device specified by link ID | [optional] 
 **linkids** | [**[String]**](String.md)| Return usage data for devices specified by link IDs | [optional] 
 **tagid** | **Number**| Return usage data for devices with tag specified by tag ID | [optional] 
 **tagids** | [**[String]**](String.md)| Return usage data for devices with tags specified by tag IDs | [optional] 
 **tagname** | **String**| Return usage data for devices with tags specified by tag name | [optional] 
 **timestart** | **Number**| Return usage data received after this time (Unix timestamp) | [optional] 
 **timeend** | **Number**| Return usage data received before this time (Unix timestamp) | [optional] 
 **islive** | **Boolean**| Return data sessions for devices in Live status. Does not include data sessions for devices that are currently paused or inactive. | [optional] 
 **startafter** | **Number**| Return usage data for records whose ID come after the specified ID | [optional] 
 **limit** | **Number**| Return a maximum of this many usage records | [optional] 

### Return type

[**ListUsageDatabyDayresponse**](ListUsageDatabyDayresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsageDatabyMonth"></a>
# **listUsageDatabyMonth**
> ListUsageDatabyMonthresponse listUsageDatabyMonth(opts)

List Usage Data by Month

`GET https://dashboard.hologram.io/api/1/usage/data/monthly`  Returns total data usage for each device summarized by month

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.UsageDataApi();

var opts = { 
  'orgid': 1.2, // Number | Return usage data for devices owned by organization specified by org ID
  'linkid': 1.2, // Number | Return usage data for device specified by link ID
  'tagid': 1.2, // Number | Return usage data for devices with tag specified by tag ID
  'mintime': "mintime_example", // String | Return usage data after specified date
  'maxtime': "maxtime_example", // String | Return usage data before specified date
  'limit': 1.2 // Number | Return a maximum of this many records
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsageDatabyMonth(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Return usage data for devices owned by organization specified by org ID | [optional] 
 **linkid** | **Number**| Return usage data for device specified by link ID | [optional] 
 **tagid** | **Number**| Return usage data for devices with tag specified by tag ID | [optional] 
 **mintime** | **String**| Return usage data after specified date | [optional] 
 **maxtime** | **String**| Return usage data before specified date | [optional] 
 **limit** | **Number**| Return a maximum of this many records | [optional] 

### Return type

[**ListUsageDatabyMonthresponse**](ListUsageDatabyMonthresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


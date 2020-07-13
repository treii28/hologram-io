# Hologram.AlertsClosedBetaApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeAlertbyAlertid**](AlertsClosedBetaApi.md#acknowledgeAlertbyAlertid) | **PUT** /api/1/alerts/{id}/acknowledge | Acknowledge Alert by Alert id
[**acknowledgeAlertsbyAlertids**](AlertsClosedBetaApi.md#acknowledgeAlertsbyAlertids) | **PUT** /api/1/alerts/acknowledge | Acknowledge Alerts by Alert ids
[**acknowledgeAllAlerts**](AlertsClosedBetaApi.md#acknowledgeAllAlerts) | **PUT** /api/1/alerts/acknowledgeall | Acknowledge All Alerts
[**getAlertCountbyType**](AlertsClosedBetaApi.md#getAlertCountbyType) | **GET** /api/1/alerts/count | Get Alert Count by Type
[**listAllCustomalerts**](AlertsClosedBetaApi.md#listAllCustomalerts) | **GET** /api/1/alerts/custom | List All Custom alerts
[**listAllDeviceDataLimitalerts**](AlertsClosedBetaApi.md#listAllDeviceDataLimitalerts) | **GET** /api/1/alerts/device_data_limit | List All Device Data Limit alerts
[**listAllTACchangealerts**](AlertsClosedBetaApi.md#listAllTACchangealerts) | **GET** /api/1/alerts/tac_changes | List All TAC change alerts
[**listAllUsagealerts**](AlertsClosedBetaApi.md#listAllUsagealerts) | **GET** /api/1/alerts/usage | List All Usage alerts
[**listAllalerts**](AlertsClosedBetaApi.md#listAllalerts) | **GET** /api/1/alerts | List All alerts
[**unacknowledgeAlertbyAlertid**](AlertsClosedBetaApi.md#unacknowledgeAlertbyAlertid) | **PUT** /api/1/alerts/{id}/unacknowledge | Unacknowledge Alert by Alert id


<a name="acknowledgeAlertbyAlertid"></a>
# **acknowledgeAlertbyAlertid**
> AcknowledgeAlertbyAlertidresponse acknowledgeAlertbyAlertid(orgid, id)

Acknowledge Alert by Alert id

Acknowledge alert by alert id. `PUT https://dashboard.hologram.io/api/1/alerts/{id}/acknowledge`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var orgid = 1.2; // Number | Only acknowledges alert that are usable for the given organization ID

var id = 1.2; // Number | Id for the alert being acknowledged


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acknowledgeAlertbyAlertid(orgid, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only acknowledges alert that are usable for the given organization ID | 
 **id** | **Number**| Id for the alert being acknowledged | 

### Return type

[**AcknowledgeAlertbyAlertidresponse**](AcknowledgeAlertbyAlertidresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="acknowledgeAlertsbyAlertids"></a>
# **acknowledgeAlertsbyAlertids**
> AcknowledgeAlertsbyAlertidsresponse acknowledgeAlertsbyAlertids(orgid, contentType, body)

Acknowledge Alerts by Alert ids

Acknowledge alerts by alert ids. `PUT https://dashboard.hologram.io/api/1/alerts/acknowledge`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var orgid = 1.2; // Number | 

var contentType = "contentType_example"; // String | 

var body = new Hologram.AcknowledgeAlertsbyAlertidsrequest(); // AcknowledgeAlertsbyAlertidsrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acknowledgeAlertsbyAlertids(orgid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**|  | 
 **contentType** | **String**|  | 
 **body** | [**AcknowledgeAlertsbyAlertidsrequest**](AcknowledgeAlertsbyAlertidsrequest.md)|  | 

### Return type

[**AcknowledgeAlertsbyAlertidsresponse**](AcknowledgeAlertsbyAlertidsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="acknowledgeAllAlerts"></a>
# **acknowledgeAllAlerts**
> AcknowledgeAllAlertsresponse acknowledgeAllAlerts(orgid)

Acknowledge All Alerts

Acknowledge all alerts. `PUT https://dashboard.hologram.io/api/1/alerts/acknowledgeall`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var orgid = 1.2; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acknowledgeAllAlerts(orgid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**|  | 

### Return type

[**AcknowledgeAllAlertsresponse**](AcknowledgeAllAlertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAlertCountbyType"></a>
# **getAlertCountbyType**
> GetAlertCountbyTyperesponse getAlertCountbyType(orgid, type)

Get Alert Count by Type

Get alert count by type. `GET https://dashboard.hologram.io/api/1/alerts/count` Returns the number of alerts by type.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var orgid = 1.2; // Number | Only returns alert count that are usable for the given organization ID

var type = "type_example"; // String | Type of alert to get the count of


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlertCountbyType(orgid, type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only returns alert count that are usable for the given organization ID | 
 **type** | **String**| Type of alert to get the count of | 

### Return type

[**GetAlertCountbyTyperesponse**](GetAlertCountbyTyperesponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllCustomalerts"></a>
# **listAllCustomalerts**
> ListAllCustomalertsresponse listAllCustomalerts(opts)

List All Custom alerts

Return any custom alerts created for an organization's devices `GET https://dashboard.hologram.io/api/1/alerts/custom`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var opts = { 
  'orgid': 1.2, // Number | Only return alerts that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many alerts.
  'startafter': 1.2 // Number | Return the alerts whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllCustomalerts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return alerts that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many alerts. | [optional] 
 **startafter** | **Number**| Return the alerts whose IDs come after the given ID | [optional] 

### Return type

[**ListAllCustomalertsresponse**](ListAllCustomalertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllDeviceDataLimitalerts"></a>
# **listAllDeviceDataLimitalerts**
> ListAllDeviceDataLimitalertsresponse listAllDeviceDataLimitalerts(opts)

List All Device Data Limit alerts

List alerts created by devices reaching a limit of data usage. `GET https://dashboard.hologram.io/api/1/alerts/device_data_limit`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var opts = { 
  'orgid': 1.2, // Number | Only return alerts that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many alerts.
  'startafter': 1.2 // Number | Return the alerts whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllDeviceDataLimitalerts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return alerts that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many alerts. | [optional] 
 **startafter** | **Number**| Return the alerts whose IDs come after the given ID | [optional] 

### Return type

[**ListAllDeviceDataLimitalertsresponse**](ListAllDeviceDataLimitalertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllTACchangealerts"></a>
# **listAllTACchangealerts**
> ListAllTACchangealertsresponse listAllTACchangealerts(opts)

List All TAC change alerts

List all TAC change alerts. `GET https://dashboard.hologram.io/api/1/alerts/tac_changes` Returns all TAC change alerts for a given organization, organized by deviceid.  Alert data lists old TAC and new TAC for each deviceid returned in the list.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var opts = { 
  'orgid': 1.2, // Number | Only return alerts that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many alerts.
  'startafter': 1.2 // Number | Return the alerts whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllTACchangealerts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return alerts that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many alerts. | [optional] 
 **startafter** | **Number**| Return the alerts whose IDs come after the given ID | [optional] 

### Return type

[**ListAllTACchangealertsresponse**](ListAllTACchangealertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllUsagealerts"></a>
# **listAllUsagealerts**
> ListAllUsagealertsresponse listAllUsagealerts(opts)

List All Usage alerts

List all alerts related to usage.  `GET https://dashboard.hologram.io/api/1/alerts/usage` Returns all usage alerts for a given organization, organized by deviceid.  Alerts are created when a given device exceeds a pre-selected threshold of data usage for a billing period.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var opts = { 
  'orgid': 1.2, // Number | Only return alerts that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many alerts.
  'startafter': 1.2 // Number | Return the alerts whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllUsagealerts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return alerts that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many alerts. | [optional] 
 **startafter** | **Number**| Return the alerts whose IDs come after the given ID | [optional] 

### Return type

[**ListAllUsagealertsresponse**](ListAllUsagealertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllalerts"></a>
# **listAllalerts**
> ListAllalertsresponse listAllalerts(opts)

List All alerts

List all alerts. `GET https://dashboard.hologram.io/api/1/alerts` Returns all alerts for a given organization, organized by deviceid.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var opts = { 
  'orgid': 1.2, // Number | Only return alerts that are usable for the given organization ID
  'limit': "limit_example", // String | Return a maximum of this many alerts.
  'startafter': 1.2 // Number | Return the alerts whose IDs come after the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllalerts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return alerts that are usable for the given organization ID | [optional] 
 **limit** | **String**| Return a maximum of this many alerts. | [optional] 
 **startafter** | **Number**| Return the alerts whose IDs come after the given ID | [optional] 

### Return type

[**ListAllalertsresponse**](ListAllalertsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unacknowledgeAlertbyAlertid"></a>
# **unacknowledgeAlertbyAlertid**
> UnacknowledgeAlertbyAlertidresponse unacknowledgeAlertbyAlertid(orgid, id)

Unacknowledge Alert by Alert id

Unacknowledge alert by alert id. `PUT https://dashboard.hologram.io/api/1/alerts/{id}/unacknowledge`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AlertsClosedBetaApi();

var orgid = 1.2; // Number | Only unacknowledges alert that are usable for the given organization ID

var id = 1.2; // Number | Id for the alert being unacknowledged


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unacknowledgeAlertbyAlertid(orgid, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only unacknowledges alert that are usable for the given organization ID | 
 **id** | **Number**| Id for the alert being unacknowledged | 

### Return type

[**UnacknowledgeAlertbyAlertidresponse**](UnacknowledgeAlertbyAlertidresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


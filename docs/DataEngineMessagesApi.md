# Hologram.DataEngineMessagesApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataEngineMessages**](DataEngineMessagesApi.md#listDataEngineMessages) | **GET** /api/1/csr/rdm | List Data Engine Messages
[**sendaDataEngineMessage**](DataEngineMessagesApi.md#sendaDataEngineMessage) | **POST** /api/1/csr/rdm | Send a Data Engine Message


<a name="listDataEngineMessages"></a>
# **listDataEngineMessages**
> Object listDataEngineMessages(opts)

List Data Engine Messages

`GET https://dashboard.hologram.io/api/1/csr/rdm`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DataEngineMessagesApi();

var opts = { 
  'deviceid': 1.2, // Number | Only return messages originating from device specified by device ID
  'deviceids': ["deviceids_example"], // [String] | Return messages originating from a list of devices specified by device ID
  'limit': 1.2, // Number | Return a maximum of this many messages. Default is 25
  'orgid': 1.2, // Number | Only return messages from devices belonging to the organization specified by org ID
  'orgids': ["orgids_example"], // [String] | Return  messages from devices belonging to the organizations specified by org IDs
  'id': 1.2, // Number | Return message specified by message ID
  'startafter': 1.2, // Number | Return messages with message IDs that start after the specified ID
  'devicetagid': 1.2, // Number | Return a message specified by tag ID
  'topicname': "topicname_example", // String | Return messages with a given topic
  'topicnames': ["topicnames_example"], // [String] | Return messages with given topics
  'timestart': 1.2, // Number | Return messages received after this time (Unix timestamp)
  'timeend': 1.2, // Number | Return messages received before this time (Unix timestamp)
  'error': true, // Boolean | Return error messages
  'tagname': "tagname_example", // String | 
  'tagnames': "tagnames_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDataEngineMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceid** | **Number**| Only return messages originating from device specified by device ID | [optional] 
 **deviceids** | [**[String]**](String.md)| Return messages originating from a list of devices specified by device ID | [optional] 
 **limit** | **Number**| Return a maximum of this many messages. Default is 25 | [optional] 
 **orgid** | **Number**| Only return messages from devices belonging to the organization specified by org ID | [optional] 
 **orgids** | [**[String]**](String.md)| Return  messages from devices belonging to the organizations specified by org IDs | [optional] 
 **id** | **Number**| Return message specified by message ID | [optional] 
 **startafter** | **Number**| Return messages with message IDs that start after the specified ID | [optional] 
 **devicetagid** | **Number**| Return a message specified by tag ID | [optional] 
 **topicname** | **String**| Return messages with a given topic | [optional] 
 **topicnames** | [**[String]**](String.md)| Return messages with given topics | [optional] 
 **timestart** | **Number**| Return messages received after this time (Unix timestamp) | [optional] 
 **timeend** | **Number**| Return messages received before this time (Unix timestamp) | [optional] 
 **error** | **Boolean**| Return error messages | [optional] 
 **tagname** | **String**|  | [optional] 
 **tagnames** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendaDataEngineMessage"></a>
# **sendaDataEngineMessage**
> SendaDataEngineMessageresponse sendaDataEngineMessage(contentType, body)

Send a Data Engine Message

`POST https://dashboard.hologram.io/api/1/csr/rdm`  This endpoint can be used to send a message into the Hologram Data Engine on behalf of your Hologram device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DataEngineMessagesApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.SendaDataEngineMessagerequest(); // SendaDataEngineMessagerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendaDataEngineMessage(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**SendaDataEngineMessagerequest**](SendaDataEngineMessagerequest.md)|  | 

### Return type

[**SendaDataEngineMessageresponse**](SendaDataEngineMessageresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


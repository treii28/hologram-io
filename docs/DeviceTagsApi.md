# Hologram.DeviceTagsApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTagtoDevice**](DeviceTagsApi.md#addTagtoDevice) | **POST** /api/1/devices/tags/{tagid}/link | Add Tag to Device
[**createaDeviceTag**](DeviceTagsApi.md#createaDeviceTag) | **POST** /api/1/devices/tags | Create a Device Tag
[**deleteDeviceTag**](DeviceTagsApi.md#deleteDeviceTag) | **DELETE** /api/1/devices/tags/{tagid} | Delete Device Tag
[**listDeviceTags**](DeviceTagsApi.md#listDeviceTags) | **GET** /api/1/devices/tags | List Device Tags
[**removeTagfromDevice**](DeviceTagsApi.md#removeTagfromDevice) | **POST** /api/1/devices/tags/{tagid}/unlink | Remove Tag from Device


<a name="addTagtoDevice"></a>
# **addTagtoDevice**
> AddTagtoDeviceresponse addTagtoDevice(tagid, contentType, body)

Add Tag to Device

`POST https://dashboard.hologram.io/api/1/devices/tags/{tagid}/link`  Adds a device tag to specified device or devices.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTagsApi();

var tagid = 1.2; // Number | The ID of the tag

var contentType = "contentType_example"; // String | 

var body = new Hologram.AddTagtoDevicerequest(); // AddTagtoDevicerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTagtoDevice(tagid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagid** | **Number**| The ID of the tag | 
 **contentType** | **String**|  | 
 **body** | [**AddTagtoDevicerequest**](AddTagtoDevicerequest.md)|  | 

### Return type

[**AddTagtoDeviceresponse**](AddTagtoDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createaDeviceTag"></a>
# **createaDeviceTag**
> CreateaDeviceTagresponse createaDeviceTag(contentType, body)

Create a Device Tag

`POST https://dashboard.hologram.io/api/1/devices/tags`  Creates a new device tag. If you are creating the tag to be used for devices in a custom organization (not your personal organization), the `orgid` URL parameter is required.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTagsApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.CreateaDeviceTagrequest(); // CreateaDeviceTagrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createaDeviceTag(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**CreateaDeviceTagrequest**](CreateaDeviceTagrequest.md)|  | 

### Return type

[**CreateaDeviceTagresponse**](CreateaDeviceTagresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceTag"></a>
# **deleteDeviceTag**
> DeleteDeviceTagresponse deleteDeviceTag(tagid)

Delete Device Tag

`DELETE https://dashboard.hologram.io/api/1/tags/{tagid}`  Deletes a device tag. If the tag is associated with any devices, the tag is removed from those devices.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTagsApi();

var tagid = 1.2; // Number | The ID of the tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDeviceTag(tagid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagid** | **Number**| The ID of the tag to delete | 

### Return type

[**DeleteDeviceTagresponse**](DeleteDeviceTagresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDeviceTags"></a>
# **listDeviceTags**
> ListDeviceTagsresponse listDeviceTags(opts)

List Device Tags

`GET https://dashboard.hologram.io/api/1/tags`  Returns all device tags associated with your devices.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTagsApi();

var opts = { 
  'orgid': 1.2, // Number | Only return results for the given organization ID
  'id': 1.2, // Number | Only return results for the given device tag ID
  'deviceids': ["deviceids_example"], // [String] | Only return results for the given device IDs
  'limit': 1.2 // Number | Number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeviceTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return results for the given organization ID | [optional] 
 **id** | **Number**| Only return results for the given device tag ID | [optional] 
 **deviceids** | [**[String]**](String.md)| Only return results for the given device IDs | [optional] 
 **limit** | **Number**| Number of records to return | [optional] 

### Return type

[**ListDeviceTagsresponse**](ListDeviceTagsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTagfromDevice"></a>
# **removeTagfromDevice**
> RemoveTagfromDeviceresponse removeTagfromDevice(tagid, contentType, body)

Remove Tag from Device

`POST https://dashboard.hologram.io/api/1/devices/{tagid}/unlink`  Removes a device tag from specified device or devices.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTagsApi();

var tagid = 1.2; // Number | The ID of the tag

var contentType = "contentType_example"; // String | 

var body = new Hologram.RemoveTagfromDevicerequest(); // RemoveTagfromDevicerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeTagfromDevice(tagid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagid** | **Number**| The ID of the tag | 
 **contentType** | **String**|  | 
 **body** | [**RemoveTagfromDevicerequest**](RemoveTagfromDevicerequest.md)|  | 

### Return type

[**RemoveTagfromDeviceresponse**](RemoveTagfromDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


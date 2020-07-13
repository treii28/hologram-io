# Hologram.CloudToDeviceMessagingApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendCloudMessagetoDevice**](CloudToDeviceMessagingApi.md#sendCloudMessagetoDevice) | **POST** /api/1/devices/messages | Send Cloud Message to Device
[**sendCloudMessagetoDeviceviaWebhook**](CloudToDeviceMessagingApi.md#sendCloudMessagetoDeviceviaWebhook) | **POST** /api/1/devices/messages/{deviceid}/{webhookguid} | Send Cloud Message to Device via Webhook


<a name="sendCloudMessagetoDevice"></a>
# **sendCloudMessagetoDevice**
> SendCloudMessagetoDeviceresponse sendCloudMessagetoDevice(contentType, body)

Send Cloud Message to Device

`POST https://dashboard.hologram.io/api/1/devices/messages`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CloudToDeviceMessagingApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.SendCloudMessagetoDevicerequest(); // SendCloudMessagetoDevicerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendCloudMessagetoDevice(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**SendCloudMessagetoDevicerequest**](SendCloudMessagetoDevicerequest.md)|  | 

### Return type

[**SendCloudMessagetoDeviceresponse**](SendCloudMessagetoDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendCloudMessagetoDeviceviaWebhook"></a>
# **sendCloudMessagetoDeviceviaWebhook**
> SendCloudMessagetoDeviceviaWebhookresponse sendCloudMessagetoDeviceviaWebhook(deviceid, webhookguid, contentType, body)

Send Cloud Message to Device via Webhook

`POST https://dashboard.hologram.io/api/1/devices/messages/{deviceid}/{webhookguid}`  This endpoint does not require authentication with your API key, as the webhook GUID serves as an authentication token. In order to generate a webhook URL, please visit the cloud configuration page for your device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.CloudToDeviceMessagingApi();

var deviceid = 1.2; // Number | Device ID of recipient device

var webhookguid = "webhookguid_example"; // String | generated UUID for the webhook URL

var contentType = "contentType_example"; // String | 

var body = new Hologram.SendCloudMessagetoDeviceviaWebhookrequest(); // SendCloudMessagetoDeviceviaWebhookrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendCloudMessagetoDeviceviaWebhook(deviceid, webhookguid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceid** | **Number**| Device ID of recipient device | 
 **webhookguid** | **String**| generated UUID for the webhook URL | 
 **contentType** | **String**|  | 
 **body** | [**SendCloudMessagetoDeviceviaWebhookrequest**](SendCloudMessagetoDeviceviaWebhookrequest.md)|  | 

### Return type

[**SendCloudMessagetoDeviceviaWebhookresponse**](SendCloudMessagetoDeviceviaWebhookresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


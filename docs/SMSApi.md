# Hologram.SMSApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendSMStoDevice**](SMSApi.md#sendSMStoDevice) | **POST** /api/1/sms/incoming | Send SMS to Device


<a name="sendSMStoDevice"></a>
# **sendSMStoDevice**
> SendSMStoDeviceresponse sendSMStoDevice(contentType, body)

Send SMS to Device

`POST https://dashboard.hologram.io/api/1/sms/incoming`  Send an inbound device-terminated SMS to your Hologram device. There is no cost incurred for incoming SMS to your Hologram device. You can send an SMS to one device using `deviceid` or send the same SMS to multiple devices at once using `deviceids`.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.SMSApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.SendSMStoDevicerequest(); // SendSMStoDevicerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendSMStoDevice(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**SendSMStoDevicerequest**](SendSMStoDevicerequest.md)|  | 

### Return type

[**SendSMStoDeviceresponse**](SendSMStoDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


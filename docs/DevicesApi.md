# Hologram.DevicesApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAllDevices**](DevicesApi.md#listAllDevices) | **GET** /api/1/devices | List All Devices
[**retrieveaDevice**](DevicesApi.md#retrieveaDevice) | **GET** /api/1/devices/{deviceid} | Retrieve a Device
[**updateaDevice**](DevicesApi.md#updateaDevice) | **PUT** /api/1/devices/{deviceid}?orgid={{orgid}} | Update a Device


<a name="listAllDevices"></a>
# **listAllDevices**
> ListAllDevicesresponse listAllDevices(opts)

List All Devices

`GET https://dashboard.hologram.io/api/1/devices`  Returns a list of your devices. The devices are returned sorted by creation date, with the most recent devices appearing first.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DevicesApi();

var opts = { 
  'orgid': 1.2, // Number | Only return results for the given organization ID
  'orgids': ["orgids_example"], // [String] | Only return results for the given organization IDs
  'tagid': 1.2, // Number | Only return devices with the given tag ID
  'tagname': "tagname_example", // String | Only return devices with the given tag name
  'sim': "sim_example", // String | Show device with specific SIM number
  'limit': "limit_example", // String | Return a maximum of this many devices
  'startafter': 1.2, // Number | Return the devices whose IDs come after the given device ID
  'id': 1.2, // Number | Return the device with the given device ID
  'ids': ["ids_example"], // [String] | Return any device ids that match those given in the array
  'linkid': 1.2, // Number | Return the device with the given Link ID
  'phone': "phone_example", // String | Return the device with the given phone number
  'tunnelable': true, // Boolean | Return the devices that are/n't tunnelable through Spacebridge
  'name': "name_example", // String | Return the device with the given name
  'type': "type_example", // String | Return devices with the given type name
  'withlocation': true, // Boolean | Include location data on all devices where we have enough information to determine that. Requires professional plan.
  'imei': "imei_example", // String | Filter for devices that had the given IMEI on their last session. This searches for standard IMEI which should match what is on the label for the device.
  'imei2Dsv': "imei2Dsv_example" // String | Filter for devices that had the given IMEI-SV on their last session. This searches for IMEI-SV which is the normal IMEI but instead of a check digit at the end it has a two digit software version. This is what the network usually sees.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllDevices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| Only return results for the given organization ID | [optional] 
 **orgids** | [**[String]**](String.md)| Only return results for the given organization IDs | [optional] 
 **tagid** | **Number**| Only return devices with the given tag ID | [optional] 
 **tagname** | **String**| Only return devices with the given tag name | [optional] 
 **sim** | **String**| Show device with specific SIM number | [optional] 
 **limit** | **String**| Return a maximum of this many devices | [optional] 
 **startafter** | **Number**| Return the devices whose IDs come after the given device ID | [optional] 
 **id** | **Number**| Return the device with the given device ID | [optional] 
 **ids** | [**[String]**](String.md)| Return any device ids that match those given in the array | [optional] 
 **linkid** | **Number**| Return the device with the given Link ID | [optional] 
 **phone** | **String**| Return the device with the given phone number | [optional] 
 **tunnelable** | **Boolean**| Return the devices that are/n't tunnelable through Spacebridge | [optional] 
 **name** | **String**| Return the device with the given name | [optional] 
 **type** | **String**| Return devices with the given type name | [optional] 
 **withlocation** | **Boolean**| Include location data on all devices where we have enough information to determine that. Requires professional plan. | [optional] 
 **imei** | **String**| Filter for devices that had the given IMEI on their last session. This searches for standard IMEI which should match what is on the label for the device. | [optional] 
 **imei2Dsv** | **String**| Filter for devices that had the given IMEI-SV on their last session. This searches for IMEI-SV which is the normal IMEI but instead of a check digit at the end it has a two digit software version. This is what the network usually sees. | [optional] 

### Return type

[**ListAllDevicesresponse**](ListAllDevicesresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveaDevice"></a>
# **retrieveaDevice**
> RetrieveaDeviceresponse retrieveaDevice(deviceid)

Retrieve a Device

`GET https://dashboard.hologram.io/api/1/devices/{deviceid}`  Retrieves the details of an existing device. Specify the unique device identifier (device ID) in the request URL, which you can find on the Dashboard.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DevicesApi();

var deviceid = 1.2; // Number | Return the device with the given device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveaDevice(deviceid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceid** | **Number**| Return the device with the given device ID | 

### Return type

[**RetrieveaDeviceresponse**](RetrieveaDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateaDevice"></a>
# **updateaDevice**
> UpdateaDeviceresponse updateaDevice(deviceid, orgid, contentType, body)

Update a Device

`PUT https://dashboard.hologram.io/api/1/devices/{deviceid}?orgid={{orgid}}`  Updates the specified device by setting the values of the parameters passed. Any parameters not provided will be left unchanged.  You can change the device's name displayed on the Dashboard. You can also transfer ownership of the device to a different organizaton. You must be an Admin of the recipient organization in order to transfer the device.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DevicesApi();

var deviceid = 1.2; // Number | Update device with the given device ID

var orgid = 1.2; // Number | Current organization device is under

var contentType = "contentType_example"; // String | 

var body = new Hologram.UpdateaDevicerequest(); // UpdateaDevicerequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateaDevice(deviceid, orgid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceid** | **Number**| Update device with the given device ID | 
 **orgid** | **Number**| Current organization device is under | 
 **contentType** | **String**|  | 
 **body** | [**UpdateaDevicerequest**](UpdateaDevicerequest.md)|  | 

### Return type

[**UpdateaDeviceresponse**](UpdateaDeviceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


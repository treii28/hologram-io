# Hologram.DeviceTunnelingApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createaPublicKey**](DeviceTunnelingApi.md#createaPublicKey) | **POST** /api/1/tunnelkeys | Create a Public Key
[**disableaPublicKey**](DeviceTunnelingApi.md#disableaPublicKey) | **POST** /api/1/tunnelkeys/{id}/disable | Disable a Public Key
[**enableaPublicKey**](DeviceTunnelingApi.md#enableaPublicKey) | **POST** /api/1/tunnelkeys/{id}/enable | Enable a Public Key
[**listAllPublicKeys**](DeviceTunnelingApi.md#listAllPublicKeys) | **GET** /api/1/tunnelkeys | List All Public Keys


<a name="createaPublicKey"></a>
# **createaPublicKey**
> CreateaPublicKeyresponse createaPublicKey(contentType, body)

Create a Public Key

`POST https://dashboard.hologram.io/api/1/tunnelkeys`  Associate an SSH key with your user. This key can then be used to tunnel to devices that you control. There is a 5 key limit per user.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTunnelingApi();

var contentType = "contentType_example"; // String | 

var body = new Hologram.CreateaPublicKeyrequest(); // CreateaPublicKeyrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createaPublicKey(contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **body** | [**CreateaPublicKeyrequest**](CreateaPublicKeyrequest.md)|  | 

### Return type

[**CreateaPublicKeyresponse**](CreateaPublicKeyresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="disableaPublicKey"></a>
# **disableaPublicKey**
> DisableaPublicKeyresponse disableaPublicKey(id)

Disable a Public Key

`POST https://dashboard.hologram.io/api/1/tunnelkeys/{id}/disable`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTunnelingApi();

var id = 1.2; // Number | ID of the tunnel key to disable


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.disableaPublicKey(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the tunnel key to disable | 

### Return type

[**DisableaPublicKeyresponse**](DisableaPublicKeyresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enableaPublicKey"></a>
# **enableaPublicKey**
> EnableaPublicKeyresponse enableaPublicKey(id)

Enable a Public Key

`POST https://dashboard.hologram.io/api/1/tunnelkeys/{id}/enable`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTunnelingApi();

var id = 1.2; // Number | ID of the tunnel key to enable


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.enableaPublicKey(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the tunnel key to enable | 

### Return type

[**EnableaPublicKeyresponse**](EnableaPublicKeyresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllPublicKeys"></a>
# **listAllPublicKeys**
> ListAllPublicKeysresponse listAllPublicKeys(opts)

List All Public Keys

`GET https://dashboard.hologram.io/api/1/tunnelkeys`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.DeviceTunnelingApi();

var opts = { 
  'withdisabled': 1.2, // Number | Set to `1` to include disabled keys
  'id': 1.2 // Number | Get the public key with the given ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllPublicKeys(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withdisabled** | **Number**| Set to `1` to include disabled keys | [optional] 
 **id** | **Number**| Get the public key with the given ID | [optional] 

### Return type

[**ListAllPublicKeysresponse**](ListAllPublicKeysresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


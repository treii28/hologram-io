# Hologram.AccountManagementApi

All URIs are relative to *https://dashboard.hologram.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBalancetoOrganization**](AccountManagementApi.md#addBalancetoOrganization) | **POST** /api/1/organizations/{orgid}/balance | Add Balance to Organization
[**listOrganizations**](AccountManagementApi.md#listOrganizations) | **GET** /api/1/organizations | List Organizations
[**listOrganizationsBalanceHistory**](AccountManagementApi.md#listOrganizationsBalanceHistory) | **GET** /api/1/organizations/{orgid}/balancehistory | List Organization's Balance History
[**retrieveOrganizationBalance**](AccountManagementApi.md#retrieveOrganizationBalance) | **GET** /api/1/organizations/{orgid}/balance | Retrieve Organization Balance
[**retrieveaUser**](AccountManagementApi.md#retrieveaUser) | **GET** /api/1/users/me | Retrieve a User
[**retrieveanOrganization**](AccountManagementApi.md#retrieveanOrganization) | **GET** /api/1/organizations/{orgid} | Retrieve an Organization


<a name="addBalancetoOrganization"></a>
# **addBalancetoOrganization**
> AddBalancetoOrganizationresponse addBalancetoOrganization(orgid, contentType, body)

Add Balance to Organization

`POST https://dashboard.hologram.io/api/1/organizations/{orgid}/balance`  Charge to the organization's configured billing source (credit card on file) and add that amount to your account balance. You must be at least an Admin for this organization to add balance.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var orgid = "orgid_example"; // String | 

var contentType = "contentType_example"; // String | 

var body = new Hologram.AddBalancetoOrganizationrequest(); // AddBalancetoOrganizationrequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBalancetoOrganization(orgid, contentType, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **String**|  | 
 **contentType** | **String**|  | 
 **body** | [**AddBalancetoOrganizationrequest**](AddBalancetoOrganizationrequest.md)|  | 

### Return type

[**AddBalancetoOrganizationresponse**](AddBalancetoOrganizationresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOrganizations"></a>
# **listOrganizations**
> ListOrganizationsresponse listOrganizations(opts)

List Organizations

`GET https://dashboard.hologram.io/api/1/organizations`  Returns all organizations that you are a member of. This includes the personal organization tied to your user. When you create your Hologram account, an organization associated solely with your account is also created. This org is named after you. You cannot add other users to this organization.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var opts = { 
  'deleted': true, // Boolean | Return organizations that are or are not deleted
  'id': 1.2, // Number | Return organization specified by org ID
  'personalFor': 1.2, // Number | Return your personal organization
  'limit': 1.2 // Number | Return a maximum of this many organizations
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrganizations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleted** | **Boolean**| Return organizations that are or are not deleted | [optional] 
 **id** | **Number**| Return organization specified by org ID | [optional] 
 **personalFor** | **Number**| Return your personal organization | [optional] 
 **limit** | **Number**| Return a maximum of this many organizations | [optional] 

### Return type

[**ListOrganizationsresponse**](ListOrganizationsresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOrganizationsBalanceHistory"></a>
# **listOrganizationsBalanceHistory**
> ListOrganization27sBalanceHistoryresponse listOrganizationsBalanceHistory(orgid, opts)

List Organization's Balance History

`GET https://dashboard.hologram.io/api/1/organizations/{orgid}/balancehistory`  Returns a list of transactions (both credits and charges) for an organization. You must be an Admin for the organization to request this information.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var orgid = "orgid_example"; // String | 

var opts = { 
  'id': 1.2, // Number | Get balance history that has the given record ID
  'timestart': 1.2, // Number | Only return balance changes that happened after this time (Unix timestamp)
  'timeend': 1.2, // Number | Only return balance changes that happened before this time (Unix timestamp)
  'startafter': 1.2, // Number | Get balance history whose IDs come after the given ID
  'transactionTypeId': 1.2, // Number | Get balance records of the specified type
  'limit': 1.2 // Number | Return a maximum of this many balance records.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrganizationsBalanceHistory(orgid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **String**|  | 
 **id** | **Number**| Get balance history that has the given record ID | [optional] 
 **timestart** | **Number**| Only return balance changes that happened after this time (Unix timestamp) | [optional] 
 **timeend** | **Number**| Only return balance changes that happened before this time (Unix timestamp) | [optional] 
 **startafter** | **Number**| Get balance history whose IDs come after the given ID | [optional] 
 **transactionTypeId** | **Number**| Get balance records of the specified type | [optional] 
 **limit** | **Number**| Return a maximum of this many balance records. | [optional] 

### Return type

[**ListOrganization27sBalanceHistoryresponse**](ListOrganization27sBalanceHistoryresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveOrganizationBalance"></a>
# **retrieveOrganizationBalance**
> RetrieveOrganizationBalanceresponse retrieveOrganizationBalance(orgid)

Retrieve Organization Balance

`GET https://dashboard.hologram.io/api/1/organizations/{orgid}/balance`  Retrieves a specific organization's balance. You must be at least an Admin for the organization to request this information.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var orgid = "orgid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveOrganizationBalance(orgid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **String**|  | 

### Return type

[**RetrieveOrganizationBalanceresponse**](RetrieveOrganizationBalanceresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveaUser"></a>
# **retrieveaUser**
> RetrieveaUserresponse retrieveaUser()

Retrieve a User

`GET https://dashboard.hologram.io/api/1/users/me`  Retrieves user information. You can only request your user information.

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveaUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RetrieveaUserresponse**](RetrieveaUserresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveanOrganization"></a>
# **retrieveanOrganization**
> RetrieveanOrganizationresponse retrieveanOrganization(orgid)

Retrieve an Organization

`GET https://dashboard.hologram.io/api/1/organizations/{orgid}`

### Example
```javascript
var Hologram = require('hologram');
var defaultClient = Hologram.ApiClient.instance;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new Hologram.AccountManagementApi();

var orgid = 1.2; // Number | The organization's unique identifier - Org ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveanOrganization(orgid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **Number**| The organization's unique identifier - Org ID | 

### Return type

[**RetrieveanOrganizationresponse**](RetrieveanOrganizationresponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


/*
 * Hologram
 * The Hologram HTTP API is a REST-style interface for managing Hologram devices, accounts, and cloud data.  Using the Hologram REST API, you can activate SIMs, get your devices approximate location, send SMS to your devices, update a device's usage limit, and much more.  ## Authentication  Hologram supports **HTTP Basic authentication** using API keys. Simply set the username of the request to `apikey`. The password field is the API key itself.  You can find your API key on the Hologram Dashboard under [Account Settings](https://dashboard.hologram.io/account/api):  ![API key screenshot](https://hologram.io/wp-content/uploads/2016/12/apikey.png)  Your API key gives you access to your personal account, as well as any organizations you are a member of. Make sure you don't store your API key in a publicly accessible place like GitHub. If you are a member of multiple organizations, many endpoints accept an `orgid` argument to filter for devices or other objects within a specific organization.  You can find your orgid by following this guide from our Help Center.  ### Header Example  ``` curl --verbose GET \\ 'https://dashboard.hologram.io/api/1/users/me' \\ -u apikey:2rjpYZZNzFAoGxAgEP2SC6moL3emyB ```  You can also base64 encode \"apikey:[YOUR_API_KEY]\" where [YOUR_API_KEY] is your API key and include it directly in the header.  ``` curl --verbose GET \\ 'https://dashboard.hologram.io/api/1/users/me' \\ --header \"Authorization: Basic YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg==\" ```  ## Requests  Request bodies can be provided in either JSON or form-urlencoded formats. Please note that the examples in this documentation will only display JSON bodies.  ### **JSON body**  ``` curl --verbose --request POST \\ --header \"Content-Type: application/json\" \\ --header \"Authorization: Basic YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg==\" --data '{\"deviceid\": 56668, \"body\": \"Hello device!\"}' \\ 'https://dashboard.hologram.io/api/1/sms/incoming' ```  ### **form-urlencoded body**  ``` curl --verbose --request POST \\ --header \"Content-Type: application/x-form-urlencoded\" \\ --header \"Authorization: Basic YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg==\" --data 'deviceid=56668&body=Hello%20device!' \\ 'https://dashboard.hologram.io/api/1/sms/incoming' ```  ## Responses  All API responses are returned as JSON objects with the following fields:  * `success` (boolean) - Indicates whether the request was successful.  * `data` (object or array) - Contains the requested data or information about the operation that was performed. Only present when `success` is true.  * `error` (string) - Information about why the request failed. Only present when `success` is false.  Most GET responses will also include the following fields if a limit is included as part of the query string:  * `limit` (number) - The query limit, some have this value built in and others often have a maximum value that the limit can be  * `size` (number) - The number of values returned by the query  * `continues` (boolean, optional) - This is only returned if there are more values than were returned  * `links` (array) - Contains information related to the query performed     * `path` (string) - The API endpoint path     * `base` (string) - API base URL     * `next` (string) - URL with query string to get the next results  ## Rate Limiting  In order to provide a good quality of service to all of our customers, we enforce a rate limit on all API requests.  If you exceed the rate limit you will receive a HTTP 429 response with a JSON response body like this:  ``` {   \"success\":false,   \"error\":\"API rate limit exceeded\" } ```  If you receive this response, you should refrain from making requests for 5-10 seconds and then retry the request.  Hologram's REST API provides methods to perform many requests in bulk. For example, you can change the plans of multiple SIMs at once using https://dashboard.hologram.io/api/1/links/cellular/changeplan.  If there is request you would like to make in bulk but cannot, please reach out to [success@hologram.io](mailto:success@hologram.io) for assistance.
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AcknowledgeAlertbyAlertidresponse', 'model/AcknowledgeAlertsbyAlertidsrequest', 'model/AcknowledgeAlertsbyAlertidsresponse', 'model/AcknowledgeAllAlertsresponse', 'model/GetAlertCountbyTyperesponse', 'model/ListAllCustomalertsresponse', 'model/ListAllDeviceDataLimitalertsresponse', 'model/ListAllTACchangealertsresponse', 'model/ListAllUsagealertsresponse', 'model/ListAllalertsresponse', 'model/UnacknowledgeAlertbyAlertidresponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcknowledgeAlertbyAlertidresponse'), require('../model/AcknowledgeAlertsbyAlertidsrequest'), require('../model/AcknowledgeAlertsbyAlertidsresponse'), require('../model/AcknowledgeAllAlertsresponse'), require('../model/GetAlertCountbyTyperesponse'), require('../model/ListAllCustomalertsresponse'), require('../model/ListAllDeviceDataLimitalertsresponse'), require('../model/ListAllTACchangealertsresponse'), require('../model/ListAllUsagealertsresponse'), require('../model/ListAllalertsresponse'), require('../model/UnacknowledgeAlertbyAlertidresponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Hologram) {
      root.Hologram = {};
    }
    root.Hologram.AlertsClosedBetaApi = factory(root.Hologram.ApiClient, root.Hologram.AcknowledgeAlertbyAlertidresponse, root.Hologram.AcknowledgeAlertsbyAlertidsrequest, root.Hologram.AcknowledgeAlertsbyAlertidsresponse, root.Hologram.AcknowledgeAllAlertsresponse, root.Hologram.GetAlertCountbyTyperesponse, root.Hologram.ListAllCustomalertsresponse, root.Hologram.ListAllDeviceDataLimitalertsresponse, root.Hologram.ListAllTACchangealertsresponse, root.Hologram.ListAllUsagealertsresponse, root.Hologram.ListAllalertsresponse, root.Hologram.UnacknowledgeAlertbyAlertidresponse);
  }
}(this, function(ApiClient, AcknowledgeAlertbyAlertidresponse, AcknowledgeAlertsbyAlertidsrequest, AcknowledgeAlertsbyAlertidsresponse, AcknowledgeAllAlertsresponse, GetAlertCountbyTyperesponse, ListAllCustomalertsresponse, ListAllDeviceDataLimitalertsresponse, ListAllTACchangealertsresponse, ListAllUsagealertsresponse, ListAllalertsresponse, UnacknowledgeAlertbyAlertidresponse) {
  'use strict';

  /**
   * AlertsClosedBeta service.
   * @module api/AlertsClosedBetaApi
   * @version 1.0
   */

  /**
   * Constructs a new AlertsClosedBetaApi. 
   * @alias module:api/AlertsClosedBetaApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acknowledgeAlertbyAlertid operation.
     * @callback module:api/AlertsClosedBetaApi~acknowledgeAlertbyAlertidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AcknowledgeAlertbyAlertidresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Acknowledge Alert by Alert id
     * Acknowledge alert by alert id. `PUT https://dashboard.hologram.io/api/1/alerts/{id}/acknowledge`
     * @param {Number} orgid Only acknowledges alert that are usable for the given organization ID
     * @param {Number} id Id for the alert being acknowledged
     * @param {module:api/AlertsClosedBetaApi~acknowledgeAlertbyAlertidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AcknowledgeAlertbyAlertidresponse}
     */
    this.acknowledgeAlertbyAlertid = function(orgid, id, callback) {
      var postBody = null;

      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling acknowledgeAlertbyAlertid");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acknowledgeAlertbyAlertid");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'orgid': orgid,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AcknowledgeAlertbyAlertidresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/{id}/acknowledge', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the acknowledgeAlertsbyAlertids operation.
     * @callback module:api/AlertsClosedBetaApi~acknowledgeAlertsbyAlertidsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AcknowledgeAlertsbyAlertidsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Acknowledge Alerts by Alert ids
     * Acknowledge alerts by alert ids. `PUT https://dashboard.hologram.io/api/1/alerts/acknowledge`
     * @param {Number} orgid 
     * @param {String} contentType 
     * @param {module:model/AcknowledgeAlertsbyAlertidsrequest} body 
     * @param {module:api/AlertsClosedBetaApi~acknowledgeAlertsbyAlertidsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AcknowledgeAlertsbyAlertidsresponse}
     */
    this.acknowledgeAlertsbyAlertids = function(orgid, contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling acknowledgeAlertsbyAlertids");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling acknowledgeAlertsbyAlertids");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling acknowledgeAlertsbyAlertids");
      }


      var pathParams = {
      };
      var queryParams = {
        'orgid': orgid,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': contentType
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AcknowledgeAlertsbyAlertidsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/acknowledge', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the acknowledgeAllAlerts operation.
     * @callback module:api/AlertsClosedBetaApi~acknowledgeAllAlertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AcknowledgeAllAlertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Acknowledge All Alerts
     * Acknowledge all alerts. `PUT https://dashboard.hologram.io/api/1/alerts/acknowledgeall`
     * @param {Number} orgid 
     * @param {module:api/AlertsClosedBetaApi~acknowledgeAllAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AcknowledgeAllAlertsresponse}
     */
    this.acknowledgeAllAlerts = function(orgid, callback) {
      var postBody = null;

      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling acknowledgeAllAlerts");
      }


      var pathParams = {
      };
      var queryParams = {
        'orgid': orgid,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AcknowledgeAllAlertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/acknowledgeall', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlertCountbyType operation.
     * @callback module:api/AlertsClosedBetaApi~getAlertCountbyTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAlertCountbyTyperesponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Alert Count by Type
     * Get alert count by type. `GET https://dashboard.hologram.io/api/1/alerts/count` Returns the number of alerts by type.
     * @param {Number} orgid Only returns alert count that are usable for the given organization ID
     * @param {String} type Type of alert to get the count of
     * @param {module:api/AlertsClosedBetaApi~getAlertCountbyTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAlertCountbyTyperesponse}
     */
    this.getAlertCountbyType = function(orgid, type, callback) {
      var postBody = null;

      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling getAlertCountbyType");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getAlertCountbyType");
      }


      var pathParams = {
      };
      var queryParams = {
        'orgid': orgid,
        'type': type,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAlertCountbyTyperesponse;

      return this.apiClient.callApi(
        '/api/1/alerts/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllCustomalerts operation.
     * @callback module:api/AlertsClosedBetaApi~listAllCustomalertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllCustomalertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Custom alerts
     * Return any custom alerts created for an organization's devices `GET https://dashboard.hologram.io/api/1/alerts/custom`
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return alerts that are usable for the given organization ID
     * @param {String} opts.limit Return a maximum of this many alerts.
     * @param {Number} opts.startafter Return the alerts whose IDs come after the given ID
     * @param {module:api/AlertsClosedBetaApi~listAllCustomalertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllCustomalertsresponse}
     */
    this.listAllCustomalerts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'startafter': opts['startafter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllCustomalertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/custom', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllDeviceDataLimitalerts operation.
     * @callback module:api/AlertsClosedBetaApi~listAllDeviceDataLimitalertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllDeviceDataLimitalertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Device Data Limit alerts
     * List alerts created by devices reaching a limit of data usage. `GET https://dashboard.hologram.io/api/1/alerts/device_data_limit`
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return alerts that are usable for the given organization ID
     * @param {String} opts.limit Return a maximum of this many alerts.
     * @param {Number} opts.startafter Return the alerts whose IDs come after the given ID
     * @param {module:api/AlertsClosedBetaApi~listAllDeviceDataLimitalertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllDeviceDataLimitalertsresponse}
     */
    this.listAllDeviceDataLimitalerts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'startafter': opts['startafter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllDeviceDataLimitalertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/device_data_limit', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllTACchangealerts operation.
     * @callback module:api/AlertsClosedBetaApi~listAllTACchangealertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllTACchangealertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All TAC change alerts
     * List all TAC change alerts. `GET https://dashboard.hologram.io/api/1/alerts/tac_changes` Returns all TAC change alerts for a given organization, organized by deviceid.  Alert data lists old TAC and new TAC for each deviceid returned in the list.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return alerts that are usable for the given organization ID
     * @param {String} opts.limit Return a maximum of this many alerts.
     * @param {Number} opts.startafter Return the alerts whose IDs come after the given ID
     * @param {module:api/AlertsClosedBetaApi~listAllTACchangealertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllTACchangealertsresponse}
     */
    this.listAllTACchangealerts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'startafter': opts['startafter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllTACchangealertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/tac_changes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllUsagealerts operation.
     * @callback module:api/AlertsClosedBetaApi~listAllUsagealertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllUsagealertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Usage alerts
     * List all alerts related to usage.  `GET https://dashboard.hologram.io/api/1/alerts/usage` Returns all usage alerts for a given organization, organized by deviceid.  Alerts are created when a given device exceeds a pre-selected threshold of data usage for a billing period.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return alerts that are usable for the given organization ID
     * @param {String} opts.limit Return a maximum of this many alerts.
     * @param {Number} opts.startafter Return the alerts whose IDs come after the given ID
     * @param {module:api/AlertsClosedBetaApi~listAllUsagealertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllUsagealertsresponse}
     */
    this.listAllUsagealerts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'startafter': opts['startafter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllUsagealertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/usage', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllalerts operation.
     * @callback module:api/AlertsClosedBetaApi~listAllalertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllalertsresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All alerts
     * List all alerts. `GET https://dashboard.hologram.io/api/1/alerts` Returns all alerts for a given organization, organized by deviceid.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return alerts that are usable for the given organization ID
     * @param {String} opts.limit Return a maximum of this many alerts.
     * @param {Number} opts.startafter Return the alerts whose IDs come after the given ID
     * @param {module:api/AlertsClosedBetaApi~listAllalertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllalertsresponse}
     */
    this.listAllalerts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'startafter': opts['startafter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllalertsresponse;

      return this.apiClient.callApi(
        '/api/1/alerts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unacknowledgeAlertbyAlertid operation.
     * @callback module:api/AlertsClosedBetaApi~unacknowledgeAlertbyAlertidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnacknowledgeAlertbyAlertidresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unacknowledge Alert by Alert id
     * Unacknowledge alert by alert id. `PUT https://dashboard.hologram.io/api/1/alerts/{id}/unacknowledge`
     * @param {Number} orgid Only unacknowledges alert that are usable for the given organization ID
     * @param {Number} id Id for the alert being unacknowledged
     * @param {module:api/AlertsClosedBetaApi~unacknowledgeAlertbyAlertidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnacknowledgeAlertbyAlertidresponse}
     */
    this.unacknowledgeAlertbyAlertid = function(orgid, id, callback) {
      var postBody = null;

      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling unacknowledgeAlertbyAlertid");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unacknowledgeAlertbyAlertid");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'orgid': orgid,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UnacknowledgeAlertbyAlertidresponse;

      return this.apiClient.callApi(
        '/api/1/alerts/{id}/unacknowledge', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

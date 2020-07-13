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
    define(['ApiClient', 'model/ActivateMultipleSIMsbyICCIDrequest', 'model/ActivateMultipleSIMsbyICCIDresponse', 'model/ActivateSingleSIMbyICCIDrequest', 'model/ActivateSingleSIMbyICCIDresponse', 'model/ListAllCellularLinksresponse', 'model/PauseorUnpauseDatarequest', 'model/PauseorUnpauseDataresponse', 'model/RetrieveSIM27sStateHistoryresponse', 'model/RetrieveaCellularLinkresponse', 'model/UpdateSIM27sDataThresholdClosedBetarequest', 'model/UpdateSIM27sDataThresholdClosedBetaresponse', 'model/UpdateSIM27sOverageLimitrequest', 'model/UpdateSIM27sOverageLimitresponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActivateMultipleSIMsbyICCIDrequest'), require('../model/ActivateMultipleSIMsbyICCIDresponse'), require('../model/ActivateSingleSIMbyICCIDrequest'), require('../model/ActivateSingleSIMbyICCIDresponse'), require('../model/ListAllCellularLinksresponse'), require('../model/PauseorUnpauseDatarequest'), require('../model/PauseorUnpauseDataresponse'), require('../model/RetrieveSIM27sStateHistoryresponse'), require('../model/RetrieveaCellularLinkresponse'), require('../model/UpdateSIM27sDataThresholdClosedBetarequest'), require('../model/UpdateSIM27sDataThresholdClosedBetaresponse'), require('../model/UpdateSIM27sOverageLimitrequest'), require('../model/UpdateSIM27sOverageLimitresponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Hologram) {
      root.Hologram = {};
    }
    root.Hologram.CellularLinksApi = factory(root.Hologram.ApiClient, root.Hologram.ActivateMultipleSIMsbyICCIDrequest, root.Hologram.ActivateMultipleSIMsbyICCIDresponse, root.Hologram.ActivateSingleSIMbyICCIDrequest, root.Hologram.ActivateSingleSIMbyICCIDresponse, root.Hologram.ListAllCellularLinksresponse, root.Hologram.PauseorUnpauseDatarequest, root.Hologram.PauseorUnpauseDataresponse, root.Hologram.RetrieveSIM27sStateHistoryresponse, root.Hologram.RetrieveaCellularLinkresponse, root.Hologram.UpdateSIM27sDataThresholdClosedBetarequest, root.Hologram.UpdateSIM27sDataThresholdClosedBetaresponse, root.Hologram.UpdateSIM27sOverageLimitrequest, root.Hologram.UpdateSIM27sOverageLimitresponse);
  }
}(this, function(ApiClient, ActivateMultipleSIMsbyICCIDrequest, ActivateMultipleSIMsbyICCIDresponse, ActivateSingleSIMbyICCIDrequest, ActivateSingleSIMbyICCIDresponse, ListAllCellularLinksresponse, PauseorUnpauseDatarequest, PauseorUnpauseDataresponse, RetrieveSIM27sStateHistoryresponse, RetrieveaCellularLinkresponse, UpdateSIM27sDataThresholdClosedBetarequest, UpdateSIM27sDataThresholdClosedBetaresponse, UpdateSIM27sOverageLimitrequest, UpdateSIM27sOverageLimitresponse) {
  'use strict';

  /**
   * CellularLinks service.
   * @module api/CellularLinksApi
   * @version 1.0
   */

  /**
   * Constructs a new CellularLinksApi. 
   * @alias module:api/CellularLinksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activateMultipleSIMsbyICCID operation.
     * @callback module:api/CellularLinksApi~activateMultipleSIMsbyICCIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivateMultipleSIMsbyICCIDresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Multiple SIMs by ICCID
     * `POST https://dashboard.hologram.io/api/1/links/cellular/bulkclaim`  Include all ICCIDs to be activated separated by commas in array.  Activates multiple SIMs on the cellular network. Once a SIM is activated, you can begin to pass data. Any monthly charges and data usage charges will take effect.  If you are activating SIMs on a plan that has a monthly fee, your account will be immediately charged the monthly fee for all devices you are activating. If your account does not have enough balance to cover these charges, the request will fail.  Activating SIMs creates new devices and corresponding cellular links.
     * @param {String} contentType 
     * @param {module:model/ActivateMultipleSIMsbyICCIDrequest} body 
     * @param {module:api/CellularLinksApi~activateMultipleSIMsbyICCIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivateMultipleSIMsbyICCIDresponse}
     */
    this.activateMultipleSIMsbyICCID = function(contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling activateMultipleSIMsbyICCID");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling activateMultipleSIMsbyICCID");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = ActivateMultipleSIMsbyICCIDresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/bulkclaim', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the activateSingleSIMbyICCID operation.
     * @callback module:api/CellularLinksApi~activateSingleSIMbyICCIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivateSingleSIMbyICCIDresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Single SIM by ICCID
     * `POST https://dashboard.hologram.io/api/1/links/cellular/sim_{ICCID}/claim`  Replace \"ICCID\" in request URL with ICCID of SIM to activate.  Activates single SIM on the cellular network. Once a SIM is activated, you can begin to pass data. Any monthly charges and data usage charges will take effect.  If you are activating a SIM on a plan that has a monthly fee, your account will be immediately charged the monthly fee for all devices you are activating. If your account does not have enough balance to cover these charges, the request will fail.  Activating a SIM creates a new device and corresponding cellular link.
     * @param {String} ICCID 
     * @param {String} contentType 
     * @param {module:model/ActivateSingleSIMbyICCIDrequest} body 
     * @param {module:api/CellularLinksApi~activateSingleSIMbyICCIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivateSingleSIMbyICCIDresponse}
     */
    this.activateSingleSIMbyICCID = function(ICCID, contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'ICCID' is set
      if (ICCID === undefined || ICCID === null) {
        throw new Error("Missing the required parameter 'ICCID' when calling activateSingleSIMbyICCID");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling activateSingleSIMbyICCID");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling activateSingleSIMbyICCID");
      }


      var pathParams = {
        'ICCID': ICCID
      };
      var queryParams = {
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
      var returnType = ActivateSingleSIMbyICCIDresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/sim_{ICCID}/claim', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllCellularLinks operation.
     * @callback module:api/CellularLinksApi~listAllCellularLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAllCellularLinksresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Cellular Links
     * `GET https://dashboard.hologram.io/api/1/links/cellular`  Returns a list of your SIM cards. However, we recommend using the /devices endpoint instead, which returns the cellular link information for each device.
     * @param {String} simrange 9990005 (string, optional) Only return results for the given SIM/ICCID range
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgid Only return results for the given organization ID
     * @param {String} opts.limit Return a maximum of this many links.
     * @param {Number} opts.id Only return results for the given Link ID
     * @param {Array.<String>} opts.ids Only return results for the given Link IDs
     * @param {String} opts.sim Only return results for the given SIM number/ICCID
     * @param {Array.<String>} opts.sims Only return results for the given SIMs/ICCIDs
     * @param {String} opts.msisdn Only return results for the given MSISDN
     * @param {Boolean} opts.tunnelable Return the devices that are/n't tunnelable through Spacebridge
     * @param {Number} opts.imsi Only return results for the given IMSI
     * @param {Array.<String>} opts.imsis Only return results for the given IMSIs
     * @param {Number} opts.deviceid Only return results for the given device ID
     * @param {Array.<String>} opts.deviceids Only return results for the given device IDs
     * @param {Number} opts.claimedafter Only return results for the links claimed after the given time (Unix timestamp)
     * @param {Number} opts.claimedbefore Only return results for the links claimed before the given time (Unix timestamp)
     * @param {Number} opts.tagid Only return devices with the given tag ID
     * @param {Array.<String>} opts.tagids Only return results for the given device IDs
     * @param {String} opts.tagname Only return devices with the given tag name
     * @param {Number} opts.startafter Return the SIMs with link IDs that come after the given ID
     * @param {String} opts.showip 
     * @param {String} opts.carrierid 
     * @param {module:api/CellularLinksApi~listAllCellularLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAllCellularLinksresponse}
     */
    this.listAllCellularLinks = function(simrange, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'simrange' is set
      if (simrange === undefined || simrange === null) {
        throw new Error("Missing the required parameter 'simrange' when calling listAllCellularLinks");
      }


      var pathParams = {
      };
      var queryParams = {
        'orgid': opts['orgid'],
        'limit': opts['limit'],
        'id': opts['id'],
        'sim': opts['sim'],
        'simrange': simrange,
        'msisdn': opts['msisdn'],
        'tunnelable': opts['tunnelable'],
        'imsi': opts['imsi'],
        'deviceid': opts['deviceid'],
        'claimedafter': opts['claimedafter'],
        'claimedbefore': opts['claimedbefore'],
        'tagid': opts['tagid'],
        'tagname': opts['tagname'],
        'startafter': opts['startafter'],
        'showip': opts['showip'],
        'carrierid': opts['carrierid'],
      };
      var collectionQueryParams = {
        'ids': {
          value: opts['ids'],
          collectionFormat: 'multi'
        },
        'sims': {
          value: opts['sims'],
          collectionFormat: 'multi'
        },
        'imsis': {
          value: opts['imsis'],
          collectionFormat: 'multi'
        },
        'deviceids': {
          value: opts['deviceids'],
          collectionFormat: 'multi'
        },
        'tagids': {
          value: opts['tagids'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListAllCellularLinksresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pauseorUnpauseData operation.
     * @callback module:api/CellularLinksApi~pauseorUnpauseDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PauseorUnpauseDataresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause or Unpause Data
     * `POST https://dashboard.hologram.io/api/1/links/cellular/{linkid}/state`  Pause or unpause your SIM. Pausing the SIM will prevent your device from passing any data. Paused SIMs still incur any applicable monthly reactivation fees.
     * @param {Number} linkid Link ID of the link to modify
     * @param {String} contentType 
     * @param {module:model/PauseorUnpauseDatarequest} body 
     * @param {module:api/CellularLinksApi~pauseorUnpauseDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PauseorUnpauseDataresponse}
     */
    this.pauseorUnpauseData = function(linkid, contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'linkid' is set
      if (linkid === undefined || linkid === null) {
        throw new Error("Missing the required parameter 'linkid' when calling pauseorUnpauseData");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling pauseorUnpauseData");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pauseorUnpauseData");
      }


      var pathParams = {
        'linkid': linkid
      };
      var queryParams = {
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
      var returnType = PauseorUnpauseDataresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/{linkid}/state', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSIMsStateHistory operation.
     * @callback module:api/CellularLinksApi~retrieveSIMsStateHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveSIM27sStateHistoryresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve SIM's State History
     * Retrieve a list of your SIM's state changes. This includes activations, Preflight activations, pauses, unpauses, and deactivations.
     * @param {Number} linkid Integer ID of the link to change
     * @param {module:api/CellularLinksApi~retrieveSIMsStateHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrieveSIM27sStateHistoryresponse}
     */
    this.retrieveSIMsStateHistory = function(linkid, callback) {
      var postBody = null;

      // verify the required parameter 'linkid' is set
      if (linkid === undefined || linkid === null) {
        throw new Error("Missing the required parameter 'linkid' when calling retrieveSIMsStateHistory");
      }


      var pathParams = {
        'linkid': linkid
      };
      var queryParams = {
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
      var returnType = RetrieveSIM27sStateHistoryresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/{linkid}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveaCellularLink operation.
     * @callback module:api/CellularLinksApi~retrieveaCellularLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrieveaCellularLinkresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Cellular Link
     * `GET https://dashboard.hologram.io/api/1/links/cellular/{linkid}`  Retrieves the details of an existing cellular link. You need only supply the unique link identifier (link ID), which you can find on the Dashboard or in the response of a /devices request.
     * @param {Number} linkid Return the SIM with the given link ID
     * @param {module:api/CellularLinksApi~retrieveaCellularLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrieveaCellularLinkresponse}
     */
    this.retrieveaCellularLink = function(linkid, callback) {
      var postBody = null;

      // verify the required parameter 'linkid' is set
      if (linkid === undefined || linkid === null) {
        throw new Error("Missing the required parameter 'linkid' when calling retrieveaCellularLink");
      }


      var pathParams = {
        'linkid': linkid
      };
      var queryParams = {
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
      var returnType = RetrieveaCellularLinkresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/{linkid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSIMsDataThresholdClosedBeta operation.
     * @callback module:api/CellularLinksApi~updateSIMsDataThresholdClosedBetaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSIM27sDataThresholdClosedBetaresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SIM's Data Threshold - Closed Beta
     * `PUT https://dashboard.hologram.io/api/1/links/cellular/{linkid}/` Update the data threshold of your device. This endpoint is available to users in our Closed Beta.
     * @param {Number} linkid Unique link identifier or link ID
     * @param {String} contentType 
     * @param {module:model/UpdateSIM27sDataThresholdClosedBetarequest} body 
     * @param {module:api/CellularLinksApi~updateSIMsDataThresholdClosedBetaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateSIM27sDataThresholdClosedBetaresponse}
     */
    this.updateSIMsDataThresholdClosedBeta = function(linkid, contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'linkid' is set
      if (linkid === undefined || linkid === null) {
        throw new Error("Missing the required parameter 'linkid' when calling updateSIMsDataThresholdClosedBeta");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling updateSIMsDataThresholdClosedBeta");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSIMsDataThresholdClosedBeta");
      }


      var pathParams = {
        'linkid': linkid
      };
      var queryParams = {
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
      var returnType = UpdateSIM27sDataThresholdClosedBetaresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/{linkid}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSIMsOverageLimit operation.
     * @callback module:api/CellularLinksApi~updateSIMsOverageLimitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSIM27sOverageLimitresponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SIM's Overage Limit
     * `POST https://dashboard.hologram.io/api/1/links/cellular/{linkid}/overagelimit`  Restrict the amount of data your device can use in a given billing period. Once your device reaches the data limit, the SIM will automatically pause. In order to unpause your device, you will need to increase the data limit.
     * @param {Number} linkid Integer ID of the link to change
     * @param {String} contentType 
     * @param {module:model/UpdateSIM27sOverageLimitrequest} body 
     * @param {module:api/CellularLinksApi~updateSIMsOverageLimitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateSIM27sOverageLimitresponse}
     */
    this.updateSIMsOverageLimit = function(linkid, contentType, body, callback) {
      var postBody = body;

      // verify the required parameter 'linkid' is set
      if (linkid === undefined || linkid === null) {
        throw new Error("Missing the required parameter 'linkid' when calling updateSIMsOverageLimit");
      }

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling updateSIMsOverageLimit");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSIMsOverageLimit");
      }


      var pathParams = {
        'linkid': linkid
      };
      var queryParams = {
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
      var returnType = UpdateSIM27sOverageLimitresponse;

      return this.apiClient.callApi(
        '/api/1/links/cellular/{linkid}/overagelimit', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Hologram) {
      root.Hologram = {};
    }
    root.Hologram.Data4 = factory(root.Hologram.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Data4 model module.
   * @module model/Data4
   * @version 1.0
   */

  /**
   * Constructs a new <code>Data4</code>.
   * @alias module:model/Data4
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Data4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Data4} obj Optional instance to populate.
   * @return {module:model/Data4} The populated <code>Data4</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('linkid'))
        obj.linkid = ApiClient.convertToType(data['linkid'], 'Number');
      if (data.hasOwnProperty('record_id'))
        obj.recordId = ApiClient.convertToType(data['record_id'], 'Number');
      if (data.hasOwnProperty('session_begin'))
        obj.sessionBegin = ApiClient.convertToType(data['session_begin'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'String');
      if (data.hasOwnProperty('bytes'))
        obj.bytes = ApiClient.convertToType(data['bytes'], 'Number');
      if (data.hasOwnProperty('cellid'))
        obj.cellid = ApiClient.convertToType(data['cellid'], 'Number');
      if (data.hasOwnProperty('lac'))
        obj.lac = ApiClient.convertToType(data['lac'], 'Number');
      if (data.hasOwnProperty('network_name'))
        obj.networkName = ApiClient.convertToType(data['network_name'], 'String');
      if (data.hasOwnProperty('imei'))
        obj.imei = ApiClient.convertToType(data['imei'], 'String');
      if (data.hasOwnProperty('imeisv'))
        obj.imeisv = ApiClient.convertToType(data['imeisv'], 'String');
    }
    return obj;
  }

  /**
   * Link ID of the usage record
   * @member {Number} linkid
   */
  exports.prototype.linkid = undefined;

  /**
   * Unique record ID of the usage data
   * @member {Number} recordId
   */
  exports.prototype.recordId = undefined;

  /**
   * 09-27 16:04:20 (string) - Time session began
   * @member {String} sessionBegin
   */
  exports.prototype.sessionBegin = undefined;

  /**
   * 09-27 16:04:22 (string) - Time session ended
   * @member {String} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * Bytes used during session
   * @member {Number} bytes
   */
  exports.prototype.bytes = undefined;

  /**
   * Base transceiver station identifier
   * @member {Number} cellid
   */
  exports.prototype.cellid = undefined;

  /**
   * Location area code
   * @member {Number} lac
   */
  exports.prototype.lac = undefined;

  /**
   * Name of the network used during the session
   * @member {String} networkName
   */
  exports.prototype.networkName = undefined;

  /**
   * IMEI of the device. For more information see: https://support.hologram.io/hc/en-us/articles/360035696673-What-is-the-difference-between-IMEISV-and-IMEI-
   * @member {String} imei
   */
  exports.prototype.imei = undefined;

  /**
   * IMEI-SV of the device. For more information see: https://support.hologram.io/hc/en-us/articles/360035696673-What-is-the-difference-between-IMEISV-and-IMEI-
   * @member {String} imeisv
   */
  exports.prototype.imeisv = undefined;

  return exports;

}));

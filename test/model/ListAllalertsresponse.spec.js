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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Hologram);
  }
}(this, function(expect, Hologram) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ListAllalertsresponse', function() {
      beforeEach(function() {
        instance = new Hologram.ListAllalertsresponse();
      });

      it('should create an instance of ListAllalertsresponse', function() {
        // TODO: update the code to test ListAllalertsresponse
        expect(instance).to.be.a(Hologram.ListAllalertsresponse);
      });

      it('should have the property success (base name: "success")', function() {
        // TODO: update the code to test the property success
        expect(instance).to.have.property('success');
        // expect(instance.success).to.be(expectedValueLiteral);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property continues (base name: "continues")', function() {
        // TODO: update the code to test the property continues
        expect(instance).to.have.property('continues');
        // expect(instance.continues).to.be(expectedValueLiteral);
      });

      it('should have the property lastid (base name: "lastid")', function() {
        // TODO: update the code to test the property lastid
        expect(instance).to.have.property('lastid');
        // expect(instance.lastid).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));

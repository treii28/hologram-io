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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountBalance', 'model/AcknowledgeAlertbyAlertidresponse', 'model/AcknowledgeAlertsbyAlertidsrequest', 'model/AcknowledgeAlertsbyAlertidsresponse', 'model/AcknowledgeAllAlertsresponse', 'model/ActivateMultipleSIMsbyICCIDrequest', 'model/ActivateMultipleSIMsbyICCIDresponse', 'model/ActivateSIMsbyICCIDrangerequest', 'model/ActivateSIMsbyICCIDrangeresponse', 'model/ActivateSingleSIMbyICCIDrequest', 'model/ActivateSingleSIMbyICCIDresponse', 'model/AddBalancetoOrganizationrequest', 'model/AddBalancetoOrganizationresponse', 'model/AddTagtoDevicerequest', 'model/AddTagtoDeviceresponse', 'model/CellularLink', 'model/CreateaDeviceTagrequest', 'model/CreateaDeviceTagresponse', 'model/CreateaPublicKeyrequest', 'model/CreateaPublicKeyresponse', 'model/Data', 'model/Data10', 'model/Data12', 'model/Data2', 'model/Data3', 'model/Data4', 'model/Data5', 'model/Data6', 'model/Data7', 'model/Data8', 'model/DataPlan', 'model/DeleteDeviceTagresponse', 'model/Device', 'model/DeviceTag', 'model/DisableaPublicKeyresponse', 'model/EnableaPublicKeyresponse', 'model/GetAlertCountbyTyperesponse', 'model/GetaDataPlanresponse', 'model/Lastsession', 'model/Links', 'model/ListAllCellularLinksresponse', 'model/ListAllCustomalertsresponse', 'model/ListAllDataPlansresponse', 'model/ListAllDeviceDataLimitalertsresponse', 'model/ListAllDevicesresponse', 'model/ListAllPublicKeysresponse', 'model/ListAllRecentDataSessionsresponse', 'model/ListAllTACchangealertsresponse', 'model/ListAllUsagealertsresponse', 'model/ListAllalertsresponse', 'model/ListDeviceTagsresponse', 'model/ListOrganizationsBalanceHistoryresponse', 'model/ListOrganizationsresponse', 'model/ListUsageDatabyBillingPeriodresponse', 'model/ListUsageDatabyDayresponse', 'model/ListUsageDatabyMonthresponse', 'model/OrderData', 'model/OrgUser', 'model/Organization', 'model/PauseorUnpauseDatarequest', 'model/PauseorUnpauseDataresponse', 'model/RemoveTagfromDevicerequest', 'model/RemoveTagfromDeviceresponse', 'model/RetrieveOrganizationBalanceresponse', 'model/RetrieveSIMsStateHistoryresponse', 'model/RetrieveaCellularLinkresponse', 'model/RetrieveaDeviceresponse', 'model/RetrieveaUserresponse', 'model/RetrieveanOrganizationresponse', 'model/SendCloudMessagetoDevicerequest', 'model/SendCloudMessagetoDeviceresponse', 'model/SendCloudMessagetoDeviceviaWebhookrequest', 'model/SendCloudMessagetoDeviceviaWebhookresponse', 'model/SendSMStoDevicerequest', 'model/SendSMStoDeviceresponse', 'model/SendaDataEngineMessagerequest', 'model/SendaDataEngineMessageresponse', 'model/SimStateHistory', 'model/TIERNAME', 'model/Tags', 'model/Tiers', 'model/TunnelKey', 'model/UnacknowledgeAlertbyAlertidresponse', 'model/UpdateSIMsDataThresholdClosedBetarequest', 'model/UpdateSIMsDataThresholdClosedBetaresponse', 'model/UpdateSIMsOverageLimitrequest', 'model/UpdateSIMsOverageLimitresponse', 'model/UpdateaDevicerequest', 'model/UpdateaDeviceresponse', 'model/UpdateaSIMsDataPlanrequest', 'model/UpdateaSIMsDataPlanresponse', 'model/User', 'model/ZONENAME', 'model/Zone', 'model/Zones', 'model/Zones1', 'api/AccountManagementApi', 'api/AlertsClosedBetaApi', 'api/CellularLinksApi', 'api/CloudToDeviceMessagingApi', 'api/DataEngineMessagesApi', 'api/DataPlansApi', 'api/DeviceTagsApi', 'api/DeviceTunnelingApi', 'api/DevicesApi', 'api/SMSApi', 'api/UsageDataApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountBalance'), require('./model/AcknowledgeAlertbyAlertidresponse'), require('./model/AcknowledgeAlertsbyAlertidsrequest'), require('./model/AcknowledgeAlertsbyAlertidsresponse'), require('./model/AcknowledgeAllAlertsresponse'), require('./model/ActivateMultipleSIMsbyICCIDrequest'), require('./model/ActivateMultipleSIMsbyICCIDresponse'), require('./model/ActivateSIMsbyICCIDrangerequest'), require('./model/ActivateSIMsbyICCIDrangeresponse'), require('./model/ActivateSingleSIMbyICCIDrequest'), require('./model/ActivateSingleSIMbyICCIDresponse'), require('./model/AddBalancetoOrganizationrequest'), require('./model/AddBalancetoOrganizationresponse'), require('./model/AddTagtoDevicerequest'), require('./model/AddTagtoDeviceresponse'), require('./model/CellularLink'), require('./model/CreateaDeviceTagrequest'), require('./model/CreateaDeviceTagresponse'), require('./model/CreateaPublicKeyrequest'), require('./model/CreateaPublicKeyresponse'), require('./model/Data'), require('./model/Data10'), require('./model/Data12'), require('./model/Data2'), require('./model/Data3'), require('./model/Data4'), require('./model/Data5'), require('./model/Data6'), require('./model/Data7'), require('./model/Data8'), require('./model/DataPlan'), require('./model/DeleteDeviceTagresponse'), require('./model/Device'), require('./model/DeviceTag'), require('./model/DisableaPublicKeyresponse'), require('./model/EnableaPublicKeyresponse'), require('./model/GetAlertCountbyTyperesponse'), require('./model/GetaDataPlanresponse'), require('./model/Lastsession'), require('./model/Links'), require('./model/ListAllCellularLinksresponse'), require('./model/ListAllCustomalertsresponse'), require('./model/ListAllDataPlansresponse'), require('./model/ListAllDeviceDataLimitalertsresponse'), require('./model/ListAllDevicesresponse'), require('./model/ListAllPublicKeysresponse'), require('./model/ListAllRecentDataSessionsresponse'), require('./model/ListAllTACchangealertsresponse'), require('./model/ListAllUsagealertsresponse'), require('./model/ListAllalertsresponse'), require('./model/ListDeviceTagsresponse'), require('./model/ListOrganizationsBalanceHistoryresponse'), require('./model/ListOrganizationsresponse'), require('./model/ListUsageDatabyBillingPeriodresponse'), require('./model/ListUsageDatabyDayresponse'), require('./model/ListUsageDatabyMonthresponse'), require('./model/OrderData'), require('./model/OrgUser'), require('./model/Organization'), require('./model/PauseorUnpauseDatarequest'), require('./model/PauseorUnpauseDataresponse'), require('./model/RemoveTagfromDevicerequest'), require('./model/RemoveTagfromDeviceresponse'), require('./model/RetrieveOrganizationBalanceresponse'), require('./model/RetrieveSIMsStateHistoryresponse'), require('./model/RetrieveaCellularLinkresponse'), require('./model/RetrieveaDeviceresponse'), require('./model/RetrieveaUserresponse'), require('./model/RetrieveanOrganizationresponse'), require('./model/SendCloudMessagetoDevicerequest'), require('./model/SendCloudMessagetoDeviceresponse'), require('./model/SendCloudMessagetoDeviceviaWebhookrequest'), require('./model/SendCloudMessagetoDeviceviaWebhookresponse'), require('./model/SendSMStoDevicerequest'), require('./model/SendSMStoDeviceresponse'), require('./model/SendaDataEngineMessagerequest'), require('./model/SendaDataEngineMessageresponse'), require('./model/SimStateHistory'), require('./model/TIERNAME'), require('./model/Tags'), require('./model/Tiers'), require('./model/TunnelKey'), require('./model/UnacknowledgeAlertbyAlertidresponse'), require('./model/UpdateSIMsDataThresholdClosedBetarequest'), require('./model/UpdateSIMsDataThresholdClosedBetaresponse'), require('./model/UpdateSIMsOverageLimitrequest'), require('./model/UpdateSIMsOverageLimitresponse'), require('./model/UpdateaDevicerequest'), require('./model/UpdateaDeviceresponse'), require('./model/UpdateaSIMsDataPlanrequest'), require('./model/UpdateaSIMsDataPlanresponse'), require('./model/User'), require('./model/ZONENAME'), require('./model/Zone'), require('./model/Zones'), require('./model/Zones1'), require('./api/AccountManagementApi'), require('./api/AlertsClosedBetaApi'), require('./api/CellularLinksApi'), require('./api/CloudToDeviceMessagingApi'), require('./api/DataEngineMessagesApi'), require('./api/DataPlansApi'), require('./api/DeviceTagsApi'), require('./api/DeviceTunnelingApi'), require('./api/DevicesApi'), require('./api/SMSApi'), require('./api/UsageDataApi'));
  }
}(function(ApiClient, AccountBalance, AcknowledgeAlertbyAlertidresponse, AcknowledgeAlertsbyAlertidsrequest, AcknowledgeAlertsbyAlertidsresponse, AcknowledgeAllAlertsresponse, ActivateMultipleSIMsbyICCIDrequest, ActivateMultipleSIMsbyICCIDresponse, ActivateSIMsbyICCIDrangerequest, ActivateSIMsbyICCIDrangeresponse, ActivateSingleSIMbyICCIDrequest, ActivateSingleSIMbyICCIDresponse, AddBalancetoOrganizationrequest, AddBalancetoOrganizationresponse, AddTagtoDevicerequest, AddTagtoDeviceresponse, CellularLink, CreateaDeviceTagrequest, CreateaDeviceTagresponse, CreateaPublicKeyrequest, CreateaPublicKeyresponse, Data, Data10, Data12, Data2, Data3, Data4, Data5, Data6, Data7, Data8, DataPlan, DeleteDeviceTagresponse, Device, DeviceTag, DisableaPublicKeyresponse, EnableaPublicKeyresponse, GetAlertCountbyTyperesponse, GetaDataPlanresponse, Lastsession, Links, ListAllCellularLinksresponse, ListAllCustomalertsresponse, ListAllDataPlansresponse, ListAllDeviceDataLimitalertsresponse, ListAllDevicesresponse, ListAllPublicKeysresponse, ListAllRecentDataSessionsresponse, ListAllTACchangealertsresponse, ListAllUsagealertsresponse, ListAllalertsresponse, ListDeviceTagsresponse, ListOrganizationsBalanceHistoryresponse, ListOrganizationsresponse, ListUsageDatabyBillingPeriodresponse, ListUsageDatabyDayresponse, ListUsageDatabyMonthresponse, OrderData, OrgUser, Organization, PauseorUnpauseDatarequest, PauseorUnpauseDataresponse, RemoveTagfromDevicerequest, RemoveTagfromDeviceresponse, RetrieveOrganizationBalanceresponse, RetrieveSIMsStateHistoryresponse, RetrieveaCellularLinkresponse, RetrieveaDeviceresponse, RetrieveaUserresponse, RetrieveanOrganizationresponse, SendCloudMessagetoDevicerequest, SendCloudMessagetoDeviceresponse, SendCloudMessagetoDeviceviaWebhookrequest, SendCloudMessagetoDeviceviaWebhookresponse, SendSMStoDevicerequest, SendSMStoDeviceresponse, SendaDataEngineMessagerequest, SendaDataEngineMessageresponse, SimStateHistory, TIERNAME, Tags, Tiers, TunnelKey, UnacknowledgeAlertbyAlertidresponse, UpdateSIMsDataThresholdClosedBetarequest, UpdateSIMsDataThresholdClosedBetaresponse, UpdateSIMsOverageLimitrequest, UpdateSIMsOverageLimitresponse, UpdateaDevicerequest, UpdateaDeviceresponse, UpdateaSIMsDataPlanrequest, UpdateaSIMsDataPlanresponse, User, ZONENAME, Zone, Zones, Zones1, AccountManagementApi, AlertsClosedBetaApi, CellularLinksApi, CloudToDeviceMessagingApi, DataEngineMessagesApi, DataPlansApi, DeviceTagsApi, DeviceTunnelingApi, DevicesApi, SMSApi, UsageDataApi) {
  'use strict';

  /**
   * The_Hologram_HTTP_API_is_a_REST_style_interface_for_managing_Hologram_devices_accounts_and_cloud_data_Using_the_Hologram_REST_API_you_can_activate_SIMs_get_your_devices_approximate_location_send_SMS_to_your_devices_update_a_devices_usage_limit_and_much_more__AuthenticationHologram_supports_HTTP_Basic_authentication_using_API_keys__Simply_set_the_username_of_the_request_to_apikey__The_password_field_is_the_API_key_itself_You_can_find_your_API_key_on_the_Hologram_Dashboard_under_Account_Settings_httpsdashboard_hologram_ioaccountapi_API_key_screenshot_httpshologram_iowp_contentuploads201612apikey_pngYour_API_key_gives_you_access_to_your_personal_account_as_well_as_any_organizations_you_are_a_member_of__Make_sure_you_dont_store_your_API_key_in_a_publicly_accessible_place_like_GitHub__If_you_are_a_member_of_multiple_organizations_many_endpoints_accept_an_orgid_argument_to_filter_for_devices_or_other_objects_within_a_specific_organization_You_can_find_your_orgid_by_following_this_guide_from_our_Help_Center__Header_Examplecurl___verbose_GET_httpsdashboard_hologram_ioapi1usersme__u_apikey2rjpYZZNzFAoGxAgEP2SC6moL3emyBYou_can_also_base64_encode_apikey_YOUR_API_KEY_where__YOUR_API_KEY_is_your_API_key_and_include_it_directly_in_the_header_curl___verbose_GET_httpsdashboard_hologram_ioapi1usersme___header_Authorization_Basic_YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg_RequestsRequest_bodies_can_be_provided_in_either_JSON_or_form_urlencoded_formats__Please_note_that_the_examples_in_this_documentation_will_only_display_JSON_bodies__JSON_bodycurl___verbose___request_POST___header_Content_Type_applicationjson___header_Authorization_Basic_YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg__data_deviceid_56668_body_Hello_device_httpsdashboard_hologram_ioapi1smsincoming_form_urlencoded_bodycurl___verbose___request_POST___header_Content_Type_applicationx_form_urlencoded___header_Authorization_Basic_YXBpa2V5OjJyanBZWlpOekZBb0d4QWdFUDJTQzZtb0wzZW15Qg__data_deviceid56668bodyHello20device_httpsdashboard_hologram_ioapi1smsincoming_ResponsesAll_API_responses_are_returned_as_JSON_objects_with_the_following_fields_success__boolean___Indicates_whether_the_request_was_successful__data__object_or_array___Contains_the_requested_data_or_information_about_the_operation_that_was_performed__Only_present_when_success_is_true__error__string___Information_about_why_the_request_failed__Only_present_when_success_is_false_Most_GET_responses_will_also_include_the_following_fields_if_a_limit_is_included_as_part_of_the_query_string_limit__number___The_query_limit_some_have_this_value_built_in_and_others_often_have_a_maximum_value_that_the_limit_can_be_size__number___The_number_of_values_returned_by_the_query_continues__boolean_optional___This_is_only_returned_if_there_are_more_values_than_were_returned_links__array___Contains_information_related_to_the_query_performed_____path__string___The_API_endpoint_path_____base__string___API_base_URL_____next__string___URL_with_query_string_to_get_the_next_results_Rate_LimitingIn_order_to_provide_a_good_quality_of_service_to_all_of_our_customers_we_enforce_a_rate_limit_on_all_API_requests_If_you_exceed_the_rate_limit_you_will_receive_a_HTTP_429_response_with_a_JSON_response_body_like_this__successfalse__errorAPI_rate_limit_exceededIf_you_receive_this_response_you_should_refrain_from_making_requests_for_5_10_seconds_and_then_retry_the_request_Holograms_REST_API_provides_methods_to_perform_many_requests_in_bulk__For_example_you_can_change_the_plans_of_multiple_SIMs_at_once_using_httpsdashboard_hologram_ioapi1linkscellularchangeplan_If_there_is_request_you_would_like_to_make_in_bulk_but_cannot_please_reach_out_to__successhologram_io_mailtosuccesshologram_io_for_assistance_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Hologram = require('index'); // See note below*.
   * var xxxSvc = new Hologram.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Hologram.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Hologram.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Hologram.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountBalance model constructor.
     * @property {module:model/AccountBalance}
     */
    AccountBalance: AccountBalance,
    /**
     * The AcknowledgeAlertbyAlertidresponse model constructor.
     * @property {module:model/AcknowledgeAlertbyAlertidresponse}
     */
    AcknowledgeAlertbyAlertidresponse: AcknowledgeAlertbyAlertidresponse,
    /**
     * The AcknowledgeAlertsbyAlertidsrequest model constructor.
     * @property {module:model/AcknowledgeAlertsbyAlertidsrequest}
     */
    AcknowledgeAlertsbyAlertidsrequest: AcknowledgeAlertsbyAlertidsrequest,
    /**
     * The AcknowledgeAlertsbyAlertidsresponse model constructor.
     * @property {module:model/AcknowledgeAlertsbyAlertidsresponse}
     */
    AcknowledgeAlertsbyAlertidsresponse: AcknowledgeAlertsbyAlertidsresponse,
    /**
     * The AcknowledgeAllAlertsresponse model constructor.
     * @property {module:model/AcknowledgeAllAlertsresponse}
     */
    AcknowledgeAllAlertsresponse: AcknowledgeAllAlertsresponse,
    /**
     * The ActivateMultipleSIMsbyICCIDrequest model constructor.
     * @property {module:model/ActivateMultipleSIMsbyICCIDrequest}
     */
    ActivateMultipleSIMsbyICCIDrequest: ActivateMultipleSIMsbyICCIDrequest,
    /**
     * The ActivateMultipleSIMsbyICCIDresponse model constructor.
     * @property {module:model/ActivateMultipleSIMsbyICCIDresponse}
     */
    ActivateMultipleSIMsbyICCIDresponse: ActivateMultipleSIMsbyICCIDresponse,
    /**
     * The ActivateSIMsbyICCIDrangerequest model constructor.
     * @property {module:model/ActivateSIMsbyICCIDrangerequest}
     */
    ActivateSIMsbyICCIDrangerequest: ActivateSIMsbyICCIDrangerequest,
    /**
     * The ActivateSIMsbyICCIDrangeresponse model constructor.
     * @property {module:model/ActivateSIMsbyICCIDrangeresponse}
     */
    ActivateSIMsbyICCIDrangeresponse: ActivateSIMsbyICCIDrangeresponse,
    /**
     * The ActivateSingleSIMbyICCIDrequest model constructor.
     * @property {module:model/ActivateSingleSIMbyICCIDrequest}
     */
    ActivateSingleSIMbyICCIDrequest: ActivateSingleSIMbyICCIDrequest,
    /**
     * The ActivateSingleSIMbyICCIDresponse model constructor.
     * @property {module:model/ActivateSingleSIMbyICCIDresponse}
     */
    ActivateSingleSIMbyICCIDresponse: ActivateSingleSIMbyICCIDresponse,
    /**
     * The AddBalancetoOrganizationrequest model constructor.
     * @property {module:model/AddBalancetoOrganizationrequest}
     */
    AddBalancetoOrganizationrequest: AddBalancetoOrganizationrequest,
    /**
     * The AddBalancetoOrganizationresponse model constructor.
     * @property {module:model/AddBalancetoOrganizationresponse}
     */
    AddBalancetoOrganizationresponse: AddBalancetoOrganizationresponse,
    /**
     * The AddTagtoDevicerequest model constructor.
     * @property {module:model/AddTagtoDevicerequest}
     */
    AddTagtoDevicerequest: AddTagtoDevicerequest,
    /**
     * The AddTagtoDeviceresponse model constructor.
     * @property {module:model/AddTagtoDeviceresponse}
     */
    AddTagtoDeviceresponse: AddTagtoDeviceresponse,
    /**
     * The CellularLink model constructor.
     * @property {module:model/CellularLink}
     */
    CellularLink: CellularLink,
    /**
     * The CreateaDeviceTagrequest model constructor.
     * @property {module:model/CreateaDeviceTagrequest}
     */
    CreateaDeviceTagrequest: CreateaDeviceTagrequest,
    /**
     * The CreateaDeviceTagresponse model constructor.
     * @property {module:model/CreateaDeviceTagresponse}
     */
    CreateaDeviceTagresponse: CreateaDeviceTagresponse,
    /**
     * The CreateaPublicKeyrequest model constructor.
     * @property {module:model/CreateaPublicKeyrequest}
     */
    CreateaPublicKeyrequest: CreateaPublicKeyrequest,
    /**
     * The CreateaPublicKeyresponse model constructor.
     * @property {module:model/CreateaPublicKeyresponse}
     */
    CreateaPublicKeyresponse: CreateaPublicKeyresponse,
    /**
     * The Data model constructor.
     * @property {module:model/Data}
     */
    Data: Data,
    /**
     * The Data10 model constructor.
     * @property {module:model/Data10}
     */
    Data10: Data10,
    /**
     * The Data12 model constructor.
     * @property {module:model/Data12}
     */
    Data12: Data12,
    /**
     * The Data2 model constructor.
     * @property {module:model/Data2}
     */
    Data2: Data2,
    /**
     * The Data3 model constructor.
     * @property {module:model/Data3}
     */
    Data3: Data3,
    /**
     * The Data4 model constructor.
     * @property {module:model/Data4}
     */
    Data4: Data4,
    /**
     * The Data5 model constructor.
     * @property {module:model/Data5}
     */
    Data5: Data5,
    /**
     * The Data6 model constructor.
     * @property {module:model/Data6}
     */
    Data6: Data6,
    /**
     * The Data7 model constructor.
     * @property {module:model/Data7}
     */
    Data7: Data7,
    /**
     * The Data8 model constructor.
     * @property {module:model/Data8}
     */
    Data8: Data8,
    /**
     * The DataPlan model constructor.
     * @property {module:model/DataPlan}
     */
    DataPlan: DataPlan,
    /**
     * The DeleteDeviceTagresponse model constructor.
     * @property {module:model/DeleteDeviceTagresponse}
     */
    DeleteDeviceTagresponse: DeleteDeviceTagresponse,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The DeviceTag model constructor.
     * @property {module:model/DeviceTag}
     */
    DeviceTag: DeviceTag,
    /**
     * The DisableaPublicKeyresponse model constructor.
     * @property {module:model/DisableaPublicKeyresponse}
     */
    DisableaPublicKeyresponse: DisableaPublicKeyresponse,
    /**
     * The EnableaPublicKeyresponse model constructor.
     * @property {module:model/EnableaPublicKeyresponse}
     */
    EnableaPublicKeyresponse: EnableaPublicKeyresponse,
    /**
     * The GetAlertCountbyTyperesponse model constructor.
     * @property {module:model/GetAlertCountbyTyperesponse}
     */
    GetAlertCountbyTyperesponse: GetAlertCountbyTyperesponse,
    /**
     * The GetaDataPlanresponse model constructor.
     * @property {module:model/GetaDataPlanresponse}
     */
    GetaDataPlanresponse: GetaDataPlanresponse,
    /**
     * The Lastsession model constructor.
     * @property {module:model/Lastsession}
     */
    Lastsession: Lastsession,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The ListAllCellularLinksresponse model constructor.
     * @property {module:model/ListAllCellularLinksresponse}
     */
    ListAllCellularLinksresponse: ListAllCellularLinksresponse,
    /**
     * The ListAllCustomalertsresponse model constructor.
     * @property {module:model/ListAllCustomalertsresponse}
     */
    ListAllCustomalertsresponse: ListAllCustomalertsresponse,
    /**
     * The ListAllDataPlansresponse model constructor.
     * @property {module:model/ListAllDataPlansresponse}
     */
    ListAllDataPlansresponse: ListAllDataPlansresponse,
    /**
     * The ListAllDeviceDataLimitalertsresponse model constructor.
     * @property {module:model/ListAllDeviceDataLimitalertsresponse}
     */
    ListAllDeviceDataLimitalertsresponse: ListAllDeviceDataLimitalertsresponse,
    /**
     * The ListAllDevicesresponse model constructor.
     * @property {module:model/ListAllDevicesresponse}
     */
    ListAllDevicesresponse: ListAllDevicesresponse,
    /**
     * The ListAllPublicKeysresponse model constructor.
     * @property {module:model/ListAllPublicKeysresponse}
     */
    ListAllPublicKeysresponse: ListAllPublicKeysresponse,
    /**
     * The ListAllRecentDataSessionsresponse model constructor.
     * @property {module:model/ListAllRecentDataSessionsresponse}
     */
    ListAllRecentDataSessionsresponse: ListAllRecentDataSessionsresponse,
    /**
     * The ListAllTACchangealertsresponse model constructor.
     * @property {module:model/ListAllTACchangealertsresponse}
     */
    ListAllTACchangealertsresponse: ListAllTACchangealertsresponse,
    /**
     * The ListAllUsagealertsresponse model constructor.
     * @property {module:model/ListAllUsagealertsresponse}
     */
    ListAllUsagealertsresponse: ListAllUsagealertsresponse,
    /**
     * The ListAllalertsresponse model constructor.
     * @property {module:model/ListAllalertsresponse}
     */
    ListAllalertsresponse: ListAllalertsresponse,
    /**
     * The ListDeviceTagsresponse model constructor.
     * @property {module:model/ListDeviceTagsresponse}
     */
    ListDeviceTagsresponse: ListDeviceTagsresponse,
    /**
     * The ListOrganizationsBalanceHistoryresponse model constructor.
     * @property {module:model/ListOrganizationsBalanceHistoryresponse}
     */
    ListOrganizationsBalanceHistoryresponse: ListOrganizationsBalanceHistoryresponse,
    /**
     * The ListOrganizationsresponse model constructor.
     * @property {module:model/ListOrganizationsresponse}
     */
    ListOrganizationsresponse: ListOrganizationsresponse,
    /**
     * The ListUsageDatabyBillingPeriodresponse model constructor.
     * @property {module:model/ListUsageDatabyBillingPeriodresponse}
     */
    ListUsageDatabyBillingPeriodresponse: ListUsageDatabyBillingPeriodresponse,
    /**
     * The ListUsageDatabyDayresponse model constructor.
     * @property {module:model/ListUsageDatabyDayresponse}
     */
    ListUsageDatabyDayresponse: ListUsageDatabyDayresponse,
    /**
     * The ListUsageDatabyMonthresponse model constructor.
     * @property {module:model/ListUsageDatabyMonthresponse}
     */
    ListUsageDatabyMonthresponse: ListUsageDatabyMonthresponse,
    /**
     * The OrderData model constructor.
     * @property {module:model/OrderData}
     */
    OrderData: OrderData,
    /**
     * The OrgUser model constructor.
     * @property {module:model/OrgUser}
     */
    OrgUser: OrgUser,
    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization: Organization,
    /**
     * The PauseorUnpauseDatarequest model constructor.
     * @property {module:model/PauseorUnpauseDatarequest}
     */
    PauseorUnpauseDatarequest: PauseorUnpauseDatarequest,
    /**
     * The PauseorUnpauseDataresponse model constructor.
     * @property {module:model/PauseorUnpauseDataresponse}
     */
    PauseorUnpauseDataresponse: PauseorUnpauseDataresponse,
    /**
     * The RemoveTagfromDevicerequest model constructor.
     * @property {module:model/RemoveTagfromDevicerequest}
     */
    RemoveTagfromDevicerequest: RemoveTagfromDevicerequest,
    /**
     * The RemoveTagfromDeviceresponse model constructor.
     * @property {module:model/RemoveTagfromDeviceresponse}
     */
    RemoveTagfromDeviceresponse: RemoveTagfromDeviceresponse,
    /**
     * The RetrieveOrganizationBalanceresponse model constructor.
     * @property {module:model/RetrieveOrganizationBalanceresponse}
     */
    RetrieveOrganizationBalanceresponse: RetrieveOrganizationBalanceresponse,
    /**
     * The RetrieveSIMsStateHistoryresponse model constructor.
     * @property {module:model/RetrieveSIMsStateHistoryresponse}
     */
    RetrieveSIMsStateHistoryresponse: RetrieveSIMsStateHistoryresponse,
    /**
     * The RetrieveaCellularLinkresponse model constructor.
     * @property {module:model/RetrieveaCellularLinkresponse}
     */
    RetrieveaCellularLinkresponse: RetrieveaCellularLinkresponse,
    /**
     * The RetrieveaDeviceresponse model constructor.
     * @property {module:model/RetrieveaDeviceresponse}
     */
    RetrieveaDeviceresponse: RetrieveaDeviceresponse,
    /**
     * The RetrieveaUserresponse model constructor.
     * @property {module:model/RetrieveaUserresponse}
     */
    RetrieveaUserresponse: RetrieveaUserresponse,
    /**
     * The RetrieveanOrganizationresponse model constructor.
     * @property {module:model/RetrieveanOrganizationresponse}
     */
    RetrieveanOrganizationresponse: RetrieveanOrganizationresponse,
    /**
     * The SendCloudMessagetoDevicerequest model constructor.
     * @property {module:model/SendCloudMessagetoDevicerequest}
     */
    SendCloudMessagetoDevicerequest: SendCloudMessagetoDevicerequest,
    /**
     * The SendCloudMessagetoDeviceresponse model constructor.
     * @property {module:model/SendCloudMessagetoDeviceresponse}
     */
    SendCloudMessagetoDeviceresponse: SendCloudMessagetoDeviceresponse,
    /**
     * The SendCloudMessagetoDeviceviaWebhookrequest model constructor.
     * @property {module:model/SendCloudMessagetoDeviceviaWebhookrequest}
     */
    SendCloudMessagetoDeviceviaWebhookrequest: SendCloudMessagetoDeviceviaWebhookrequest,
    /**
     * The SendCloudMessagetoDeviceviaWebhookresponse model constructor.
     * @property {module:model/SendCloudMessagetoDeviceviaWebhookresponse}
     */
    SendCloudMessagetoDeviceviaWebhookresponse: SendCloudMessagetoDeviceviaWebhookresponse,
    /**
     * The SendSMStoDevicerequest model constructor.
     * @property {module:model/SendSMStoDevicerequest}
     */
    SendSMStoDevicerequest: SendSMStoDevicerequest,
    /**
     * The SendSMStoDeviceresponse model constructor.
     * @property {module:model/SendSMStoDeviceresponse}
     */
    SendSMStoDeviceresponse: SendSMStoDeviceresponse,
    /**
     * The SendaDataEngineMessagerequest model constructor.
     * @property {module:model/SendaDataEngineMessagerequest}
     */
    SendaDataEngineMessagerequest: SendaDataEngineMessagerequest,
    /**
     * The SendaDataEngineMessageresponse model constructor.
     * @property {module:model/SendaDataEngineMessageresponse}
     */
    SendaDataEngineMessageresponse: SendaDataEngineMessageresponse,
    /**
     * The SimStateHistory model constructor.
     * @property {module:model/SimStateHistory}
     */
    SimStateHistory: SimStateHistory,
    /**
     * The TIERNAME model constructor.
     * @property {module:model/TIERNAME}
     */
    TIERNAME: TIERNAME,
    /**
     * The Tags model constructor.
     * @property {module:model/Tags}
     */
    Tags: Tags,
    /**
     * The Tiers model constructor.
     * @property {module:model/Tiers}
     */
    Tiers: Tiers,
    /**
     * The TunnelKey model constructor.
     * @property {module:model/TunnelKey}
     */
    TunnelKey: TunnelKey,
    /**
     * The UnacknowledgeAlertbyAlertidresponse model constructor.
     * @property {module:model/UnacknowledgeAlertbyAlertidresponse}
     */
    UnacknowledgeAlertbyAlertidresponse: UnacknowledgeAlertbyAlertidresponse,
    /**
     * The UpdateSIMsDataThresholdClosedBetarequest model constructor.
     * @property {module:model/UpdateSIMsDataThresholdClosedBetarequest}
     */
    UpdateSIMsDataThresholdClosedBetarequest: UpdateSIMsDataThresholdClosedBetarequest,
    /**
     * The UpdateSIMsDataThresholdClosedBetaresponse model constructor.
     * @property {module:model/UpdateSIMsDataThresholdClosedBetaresponse}
     */
    UpdateSIMsDataThresholdClosedBetaresponse: UpdateSIMsDataThresholdClosedBetaresponse,
    /**
     * The UpdateSIMsOverageLimitrequest model constructor.
     * @property {module:model/UpdateSIMsOverageLimitrequest}
     */
    UpdateSIMsOverageLimitrequest: UpdateSIMsOverageLimitrequest,
    /**
     * The UpdateSIMsOverageLimitresponse model constructor.
     * @property {module:model/UpdateSIMsOverageLimitresponse}
     */
    UpdateSIMsOverageLimitresponse: UpdateSIMsOverageLimitresponse,
    /**
     * The UpdateaDevicerequest model constructor.
     * @property {module:model/UpdateaDevicerequest}
     */
    UpdateaDevicerequest: UpdateaDevicerequest,
    /**
     * The UpdateaDeviceresponse model constructor.
     * @property {module:model/UpdateaDeviceresponse}
     */
    UpdateaDeviceresponse: UpdateaDeviceresponse,
    /**
     * The UpdateaSIMsDataPlanrequest model constructor.
     * @property {module:model/UpdateaSIMsDataPlanrequest}
     */
    UpdateaSIMsDataPlanrequest: UpdateaSIMsDataPlanrequest,
    /**
     * The UpdateaSIMsDataPlanresponse model constructor.
     * @property {module:model/UpdateaSIMsDataPlanresponse}
     */
    UpdateaSIMsDataPlanresponse: UpdateaSIMsDataPlanresponse,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The ZONENAME model constructor.
     * @property {module:model/ZONENAME}
     */
    ZONENAME: ZONENAME,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The Zones model constructor.
     * @property {module:model/Zones}
     */
    Zones: Zones,
    /**
     * The Zones1 model constructor.
     * @property {module:model/Zones1}
     */
    Zones1: Zones1,
    /**
     * The AccountManagementApi service constructor.
     * @property {module:api/AccountManagementApi}
     */
    AccountManagementApi: AccountManagementApi,
    /**
     * The AlertsClosedBetaApi service constructor.
     * @property {module:api/AlertsClosedBetaApi}
     */
    AlertsClosedBetaApi: AlertsClosedBetaApi,
    /**
     * The CellularLinksApi service constructor.
     * @property {module:api/CellularLinksApi}
     */
    CellularLinksApi: CellularLinksApi,
    /**
     * The CloudToDeviceMessagingApi service constructor.
     * @property {module:api/CloudToDeviceMessagingApi}
     */
    CloudToDeviceMessagingApi: CloudToDeviceMessagingApi,
    /**
     * The DataEngineMessagesApi service constructor.
     * @property {module:api/DataEngineMessagesApi}
     */
    DataEngineMessagesApi: DataEngineMessagesApi,
    /**
     * The DataPlansApi service constructor.
     * @property {module:api/DataPlansApi}
     */
    DataPlansApi: DataPlansApi,
    /**
     * The DeviceTagsApi service constructor.
     * @property {module:api/DeviceTagsApi}
     */
    DeviceTagsApi: DeviceTagsApi,
    /**
     * The DeviceTunnelingApi service constructor.
     * @property {module:api/DeviceTunnelingApi}
     */
    DeviceTunnelingApi: DeviceTunnelingApi,
    /**
     * The DevicesApi service constructor.
     * @property {module:api/DevicesApi}
     */
    DevicesApi: DevicesApi,
    /**
     * The SMSApi service constructor.
     * @property {module:api/SMSApi}
     */
    SMSApi: SMSApi,
    /**
     * The UsageDataApi service constructor.
     * @property {module:api/UsageDataApi}
     */
    UsageDataApi: UsageDataApi
  };

  return exports;
}));

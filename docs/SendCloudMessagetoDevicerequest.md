# Hologram.SendCloudMessagetoDevicerequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceids** | **[Number]** | Device IDs of recipient devices | 
**protocol** | **String** | Protocol to use: 'TCP' or 'UDP' | 
**port** | **Number** | Port to use | 
**data** | **String** | Data to send. Max length of 10k bytes. Must send either data or base64data | [optional] 
**base64data** | **String** | The data to send, encoded in base64. Max length of 10k bytes. Must send either data or base64data | [optional] 



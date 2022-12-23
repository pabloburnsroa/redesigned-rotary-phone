# API's

### What is an API?

- Application programming interface
- software to software
- web apis - http based - end points (urls) exposed for code to consume
- portal into a different application / data set...

## AJAX / AJAJ

- AJAJ is Asynchronous javascript and json.

## JSON?

- Java Script Object Notation
- Format for sending data - predictable - based on js objects...

`{"key": "value"}`

## HTTP Verbs

## HTTP Status Codes

200 OK - The requested was succeeded
201 Created
202 Accepted

300

400 Bad_Request
401 Unauthorized
404 Not Found
405 Method Not Allowed

500 Internal Server Error
501 Not Implemented

## HTTP Headers
Meta data
Key-value pairs

## Fetch API

The fetch() method returns a promise which is fulfilled once the response is available

The promise resolves to the Response Object
fetch() promise only rejects when a network error is encountered

`fetch(resource, options)`

options:

- method
- headers
- body
- mode
- ....

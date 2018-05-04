# CS 2018 - API Security 


## How to make this work
1. Clone it :-)
2. Run ``npm install``
3. Run ``npm run start``
4. Enjoy

## How to test it
Once you have it running, use any HTTP Request software (i.e. [Postman](https://www.getpostman.com/)) and, by default, the security enabled is HTTP Bearer, so you will have to send a GET request to ``http://localhost:8080/api/v1/users`` with the header ``Authorization: Bearer HelloIsJohnsToken`` and you'll get the info about John.
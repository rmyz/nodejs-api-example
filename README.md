# NodeJS API

## Getting started

To run:

```cmd
yarn start
```

To run with hot-reload:

```cmd
yarn start:dev
```

To run tests:

```cmd
yarn test
```

To generate documentation:

```cmd
yarn documentation
```

Once you generated the documentation, start the service and head to [http://localhost:8080/documentation](http://localhost:8080/documentation).

## Exposed methods

### authController

- Sign-up
	- Route: localhost:8080/signup
	- Description: Sign up a user
	- Method: **POST**
	- Headers: **email**(string) and **password**(string)

- Login
	- Route: localhost:8080/login
	- Description: Log in a  user
	- Method: **POST**
	- Headers: **email**(string) and **password**(string)

### clientsController

- Get user data by Id
	- Route: localhost:8080/getUserDataById
	- Description: Gets the user data by Id
	- Method: **GET**
	- Headers: **authorization**(string) and **id**(string)

- Get user data by name
	- Route: localhost:8080/getUserDataByName
	- Description: Gets the user data by Name
	- Method: **GET**
	- Headers: **authorization**(string) and **name**(string)

### policiesController

- Get list by User name
	- Route: localhost:8080/getListByUsername
	- Description: Gets the user's policies
	- Method: **GET**
	- Headers: **authorization**(string) and **username**(string)

- Get policy by policy number
	- Route: localhost:8080/getPolicyByPolicyNumber
	- Description: Gets policy by number
	- Method: **GET**
	- Headers: **authorization**(string) and **policynumber**(string)
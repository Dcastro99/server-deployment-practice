# server-deployment-practice

Author: Danny Castro

> Notes

[My Heroku](https://dannys-server-deploy-dev.herokuapp.com)

## Branch: Dev

[Lab 1 - actions](https://github.com/Dcastro99/server-deployment-practice/actions)

[lab 1 dev pull request](https://github.com/Dcastro99/server-deployment-practice/pull/1)

## Branch: Tests

[Lab 2 - actions](https://github.com/Dcastro99/server-deployment-practice/actions)

[lab 2 dev pull request](https://github.com/Dcastro99/server-deployment-practice/pull/6)

> ### Setup

`.env` PORT

`PORT` - 3001

> ### Running the app

`npm start`

Endpoint: `/person`

Returns `{name:bob}`

## Branch: Lab3

[Lab 3 - actions](https://github.com/Dcastro99/server-deployment-practice/actions)

[lab 2 dev pull request](https://github.com/Dcastro99/server-deployment-practice/pull/11)

> ### Setup

`.env` PORT

`PORT` - 3001

> ### Running the app

`npm start`

Endpoint: `/person`

Returns `{name:bob}`

> Models
```
- Golfer: `/golfer`

- Golfer Params: { musicianType: `'string'`, instrument: `'string'`}
```
```
- musician: `/musician`

- Musician Params: {golferName: `'string'`, golferCounrty: `'string'`, worldRank: `'NUMBER'`}
```
> RUN:
```javascript
{
    "domain": "https://dannys-server-deploy-dev.herokuapp.com",
  "status": "running",
  "port": 3001
}
```

> ### Tests

`Unit Tests`: npm run test

# MEAN Boiler

MEAN is a boilerplate utilizing [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/).

Sample App - [Landing Page](https://github.com/mjhea0/node-landing)

## Overall Product Structure

### Server

- Place your traditional node/express application in the `app.js` file.
- The "tests" folder is for unit/integration tests. This folder is then split between "api" and "model". Put your main Node/Express tests in the "api" folder and database tests in the "model" folder. Add your fixtures to the "tests" folder.

### Web

- text goes here

### Run instructions

1. Clone the repo
2. Setup your Mongo config. Run `mongod --dbpath db` to start the Mongo server from the root directory
3. Run `npm install` from the server directory to install node dependencies.
4. Run `npm app.js` or `supervisor app` from the server directory.
5. Navigate to [http://localhost:3000](http://localhost:3000) to see the live site.
6. Run the tests using `npm test` from the server directory.
7. BUILD YOUR APP. :)
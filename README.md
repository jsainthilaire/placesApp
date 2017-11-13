# Places - In Development

Places is a web application where people can save places they want to visit in the future and keep track of it, the places can be added by any visitor and others can save those places and share a review based on their experience, the visitors can also share the places to social networks like Facebook and Twitter.

## Installation

#### Requirements
- NodeJS >= v6.0
- Npm or Yarn

### Instructions
```shell
git clone git@github.com:jsainthilaire/placesApp.git
cd placesApp
yarn install or npm install

yarn start or npm start
```
It will start running at http://localhost:8080

## Todo
- Change the way components/containers are being accessed, right now there is an issue with this webpack configuration + react + router v4 when trying to wrap the components in a container without a body(just to pass down data without creating a container react component).
- Add debounce function to the change events.
- Add missing components/helpers/reducers tests.
- Add a webpack configuration for production.
- Add server side rendering.
- Fix issue with the forebase depencies not being found while testing.
- Add Loading(isFeching, isSaving) flags to the store in order yo provide a better user experience.
- Add Review page and a review component.
- Add searcgh page to look up for all previously added places.
- Add listener from firebase cloud function in order to create a metadata object to be consume and use to optimize the queries.
- Add Share functionality.
- Add Facebook login.

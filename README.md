# weather-app-integration-test-cosmos

The goal of this repository is to try react-cosmos which is a framework to perform integration test. In order to do that, I've created a weather app using react-redux.

### [Demo](https://weather-app-cosmos-rosugscqlj.now.sh/)

![demoImage](./docs/weatherApp.gif)

## How is made?
The project was created using `create-react-app`, and then adding more libraries to the stack. Some of them are on this list; 
- redux: to connect components inside our application and also to make realistic integration testing with react-cosmos.
- redux-thunk: to have Action creator in redux
- styled-components: just to create components 
- weather-styled-components: to show fancy weather icons
- react-cosmos: to do integration tests
- reselect: to have selectors in redux
- redux-object-connect: to create fancy mapStateToProps
- moment: to format dates from the response of the forecast API

The service to fetch the forecast is `https://api.apixu.com`
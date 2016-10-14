# ReduxWeather

Based on ReduxSimpleStarter app from [Stephen Grider](https://github.com/StephenGrider/ReactStarter/)

##Getting Started ##

```node
> npm install
> npm start
```

##Notes ##

###Actions ###
Used a ```const``` (FETCH_WEATHER) for an action type. It allows you to
specifiy the action-type in the action and in the reducer(reducer_weather.js).
Cuts down on typo-related issues.

###Middlewares ####
Specifically 'redux-promise' to handle a promise that you received using
[axios](https://github.com/mzabriskie/axios) to make the AJAX request.
It's especially helpful because it automatically detected that there was a
payload of a promise provided. It stops the action and then waits for the
promised to resolve. Once the promise resolved, it takes the data from the
request, stuck it on the payload property, and sent the action to all of
the reducers in the app. So although there's an AJAX request that inherently
involves asyncronous code, you don't have to think about the asyncrounous
nature of the code. Instead the action is created and flows to the reducers
without having to worry about any promises or callbacks.

###Reducers ###
strive to avoid mutating state. You never want to do ```state.weather.push()```
or state.tomorrowWeather = weather. Never modify state directly. Always return
a new object that takes the place of the existing state.

```...state``` destructures an existing array. Take the existing array and
flattening it out to create a new one.

###[SparkLines](https://github.com/borisyankov/react-sparklines) ###
Nice compontent for making easy-to-use graphs for projects.

###[React GoogleMaps](https://github.com/tomchentw/react-google-maps) ###
Makes using GoogleMaps in your app crazy-easy.

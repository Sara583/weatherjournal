# Weather-Journal App Project

## Description
- This project is divided into two parts server side and client side
- server.js is used as the server side to make post/get routes to fetch data from web API (open weather map)through post requests and send it back to client side through get requests
- app.js is used to makes post and get requests to server side and update the UI
- the server side and client side work together getting required data and display it on screen to the user
## Server Side
- Express framework is used and some other node packages as body-parser and cors
- (env.port) is used to set a dynamic port in case of other external port is used rather than our default
- One get route is set to send data to client side
- One post route is used to save data sent to server side
## Client Side
- First of all I defined the global Variables in order to be readable in the rest of our code
- Async/Await functions used to send post/get requests
- OnClick event listener is used to activate the requests just on clicking the generating button twice
- Ternary operator is used to check validity of the entered numbers
- Updating UI via selecting the target element and changing their innerText
### External Refrences
>StackOverFlow
>Node.js documentations
### Code Writer
>Sara Yousry Mohamed

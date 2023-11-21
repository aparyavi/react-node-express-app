## React Node Express App
This project serves as a template to build more complex applications using React and Node js.

### Setup
The code is divided into two parts; back end and front end. The back end main file can be located in
(`index.js`)
where a new Server object is initialized from the Server class located in 
(`models/server.js`)

Run this code to start the server:
```sh
node index.js
```

You should get the response:
```sh
'Server running on port:  3010'
```

The front end code is located in the (`react_app`) directory.

You can start the React app locally by running:
```sh
npm start
```
<img width="681" alt="Screenshot 2023-11-20 at 7 40 52 PM" src="https://github.com/aparyavi/react-node-express-app/assets/62215723/b5cf9a46-c9a1-419f-8b38-2cb241fa3c27">


### Create API Endpoints
New API endpoints can be created in server.js by adding to the paths object:

```javascript
this.app = express();
this.port = process.env.PORT || 3010;
this.paths = {
   response: "/api/response",
   // add endpoints here
};

this.middlewares();
this.routes();
```
After adding the endpoint to paths, the API endpoint should be routed to a file that can handle the API call.
```javascript
this.app.use(this.paths.response, require("../routes/response"));
// add path to file to handle API call

// Catch all requests that don't match any route
this.app.get("*", (req, res) => {
   res.sendFile(
      path.join(__dirname, "../react_app/build/index.html")
   );
});
```

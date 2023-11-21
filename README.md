## React Node Express App
This project serves as a template to build more complex applications using React and Node js.

### Setup
The code is divided into two parts; back end and front end. The back end main file can be located in
(`index.js file`)
where a new Server object is initialized from the Server class located in 
(`models/server.js file`)


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

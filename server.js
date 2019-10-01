

//require dependencies
const express = require('express')
const app = express()
const router = express.Router();
const routes = require('./routes');
const port = process.env.PORT || 4200;

// //define a route, usually this would be a bunch of routes imported from another file
// router.get('/', function (req, res, next) {
//     res.send('Welcome to the Kushy API');
// });

app.use(express.json())

//add routes to express app
routes(app);

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('Kushy API server started on: ' + port);

/*


const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

*/
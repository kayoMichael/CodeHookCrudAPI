
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js
*/
import {app} from 'codehooks-js'

// test route for https://sampleproject-sigr.api.codehooks.io/dev/
app.get('/', (req, res) => {
  console.log(res)
  res.send('CRUD server ready')
})

// Use Crudlify to create a REST API for any collection
app.crudlify("/")

// bind to serverless runtime
export default app.init();

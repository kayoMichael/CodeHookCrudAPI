
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js
*/
import {app} from 'codehooks-js'

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send([{"name":"崇杉","number":"30231011403396","cardBrand":"diners-club-carte-blanche","expirationDate":2009},
    {"name":"丰逸","number":"3561197638030964","cardBrand":"jcb","expirationDate":2001},
    {"name":"韵寒","number":"676324876957432528","cardBrand":"maestro","expirationDate":2012},
    {"name":"萧然","number":"3565503869644629","cardBrand":"jcb","expirationDate":1993},
    {"name":"培安","number":"3536113344074206","cardBrand":"jcb","expirationDate":2002}])
})

// Use Crudlify to create a REST API for any collection
app.crudlify()

// bind to serverless runtime
export default app.init();

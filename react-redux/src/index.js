import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
/*import Odoo from 'react-native-odoo-promise-based'

const odoo = new Odoo({
  host: 'localhost',
  port: 8069, 
  database: 'devices',
  username: 'admin', 
  password: 'admin' 
})

odoo.connect()
  .then(response => { console.log("RES_ODOO", response) })
  .catch(e => { console.log("RES_ODOO_ERR", e) })
  
const  params = {
  ids: [1,2,3,4,5],
  fields: [ 'name' ],
}
 
odoo.get('res.users', params)
.then(response => { console.log("RES_ODOO", response) })
.catch(e => { console.log("RES_ODOO_ERR", e) })*/


/*********** xmlrpc ***************/
/*var Odoo = require('odoo-xmlrpc');
var odoo = new Odoo({
  url: 'localhost',
  port: 8069,
  db: "device",
  username: 'admin',
  password: 'admin'
});

odoo.connect(function (err) {
  if (err) { return console.log(err); }
  console.log('Connected to Odoo server.');
  var inParams = [];
  inParams.push('read');
  inParams.push(false); //raise_exception
  var params = [];
  params.push(inParams);
  odoo.execute_kw('res.partner', 'check_access_rights', params, function (err, value) {
      if (err) { return console.log(err); }
      console.log('Result: ', value);
  });
});*/

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));

import {SakuraApi}       from 'sakuraapi';
import                   './model/user';
import                   'colors';
import * as bodyParser   from 'body-parser'

(function boot() {
  let sapi = SakuraApi.instance;

  sapi.addMiddleware(bodyParser.json());
  sapi.baseUri = '/api';

  sapi
    .listen()
    .catch((err) => {
      console.log(`Error: ${err}`.red);
    });
})();

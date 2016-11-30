import {
  Routable,
  Route,
  SakuraApi
}                   from 'sakuraapi';
import * as colors  from 'colors';
import * as express from 'express';

@Routable({
  baseUrl: 'api'
})
class Hello {

  @Route({
    path: 'greeting',
    method: 'get'
  })
  getGreeting(req: express.Request, res: express.Response) {
    res.status(200).json({
      greeting: 'Hello World'
    });
  }
}

(function boot() {
  let sapi = SakuraApi.instance;
  sapi
    .listen()
    .catch((err) => {
      console.log(`Error: ${err}`.red);
    });
})();

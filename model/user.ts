import {
  Routable,
  Route
}                   from 'sakuraapi';
import * as express from 'express';

@Routable({
  baseUrl: 'api'
})
class User {
  presidents = [{
    firstName: 'George',
    lastName: 'Washington'
  }, {
    firstName: 'John',
    lastName: 'Adams'
  }];

  constructor() {
  }

  @Route({
    path: 'user',
    method: 'get'
  })
  getUsers(req: express.Request, res: express.Response) {
    res.status(200).json(this.presidents);
  }

  @Route({
    path: 'user/:id',
    method: 'get'
  })
  getUser(req: express.Request, res: express.Response) {
    let id = Number(req.params.id);

    if (id && id - 1 < this.presidents.length && id > 0) {
      res.status(200).json(this.presidents[id - 1]);
    } else {
      res.sendStatus(404);
    }
  }
}

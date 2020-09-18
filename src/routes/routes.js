import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  console.log("test")
  res.send({})
});

export default routes;

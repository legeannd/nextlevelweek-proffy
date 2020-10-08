import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import SessionController from './controllers/SessionController';
import UsersController from './controllers/UsersController';

const routes = express.Router();
const usersController = new UsersController();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const sessionController = new SessionController();

routes.post('/users', usersController.create);
// routes.get('/users', usersController.index);

routes.post('/session', sessionController.create);
routes.get('/session', sessionController.index);

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
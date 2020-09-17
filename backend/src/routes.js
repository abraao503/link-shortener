const { Router } = require('express');

const HitController = require('./controllers/HitController');
const LinkController = require('./controllers/LinkController');
const TopFiveController = require('./controllers/TopFiveController');

const routes = new Router();

routes.get('/links', TopFiveController.index);

routes.post('/links', LinkController.store);

routes.get('/hits', HitController.index);

routes.get('/:urlId', HitController.store);

module.exports = routes;
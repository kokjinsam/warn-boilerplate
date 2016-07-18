import coreModule from './modules/core';

const routes = [{
  childRoutes: [{
    path: '/',
    component: require('./modules/core/components/AppPage').default,
    childRoutes: [
      // Put all module routes here
      ...coreModule.routes,
    ],
  }],
}];

export default routes;

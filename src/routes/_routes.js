const { default: Home } = require('../component/Home');
const { default: Login } = require('../component/Login');

export const routes = [
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

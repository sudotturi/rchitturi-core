import React from 'react';

// /const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Covid19 = React.lazy(() => import('../views/dashboard/covid/Covid19'));
const Home= React.lazy(() => import('../views/home/Home'));

const routes = [
  { path: '/', exact: true, name: "Home", component:Home },
  { path: '/dashboard', name: 'Dashboard', component: Covid19, exact: true },
  { path: '/dashboard/covid19', name: 'Covid 19', component: Covid19 }
  
];

export default routes;

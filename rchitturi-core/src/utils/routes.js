import React from 'react';

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Covid19 = React.lazy(() => import('../views/dashboard/covid/Covid19'));
const Colors = React.lazy(() => import('../views/theme/colors/Colors'));
const Typography = React.lazy(() => import('../views/theme/typography/Typography'));

const Home= React.lazy(() => import('../views/home/Home'));

const routes = [
  { path: "/", exact: true, name: "Home", component:Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/dashboard/covid19', name: 'Covid 19', component: Covid19 },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  
];

export default routes;

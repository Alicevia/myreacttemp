import Home from '../components/Home/Home'
import {renderRoutes} from 'react-router-config'
import Todolist from '../views/Todolist/Todolist'
const routes = [
  {
    path:'/todolist',
    component:Todolist
  },
  {
    path: '/',
    component: Home,
    // routes: [
    //   {
    //     path: '/home',
    //     component: Home,
    //     routes: [],
    //   },
    //   {
    //     path: '/child',
    //     component: Child,
    //     routes: [{
    //       path: '/child/first',
    //       component: First,
    //       routes: []
    //     },
    //     {
    //       path: '/child/second',
    //       component: Second,
    //       routes: []
    //     }
    //     ],
    //   },
    //   {
    //     path: '/other',
    //     component: Other,
    //     routes: [],
    //   },
    //   {
    //     path: '/set',
    //     component: Setting,
    //     routes: [],
    //   },
    // ],
  },
]


export default renderRoutes(routes);



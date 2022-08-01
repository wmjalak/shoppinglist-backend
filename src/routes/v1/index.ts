import express, { Router } from 'express';

import postRoute from './post.route';
import shoppingListRoute from './shoppinglist.route';

const router = express.Router();

interface IRoute {
    path: string;
    route: Router;
}

const defaultIRoute: IRoute[] = [
    {
        path: '/posts',
        route: postRoute,
    },
    {
        path: '/shoppinglist',
        route: shoppingListRoute,
    },
];

defaultIRoute.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;

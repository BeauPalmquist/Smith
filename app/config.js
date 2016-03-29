// IMPORT ROUTE COMPONENTS
import Forge from './containers/forge';
import Hammer from './containers/hammer';
import DarthVader from './components/DarthVader';
import GlobalToolbar from './containers/GlobalToolbar';
import GlobalSearch from './containers/GlobalSearch';

const LOAD_CONFIG = 'CLIENT/LOAD_CONFIG';

const initialState = {
    appName: 'SmithClient',
    boldTitle: 'Smith',
    title: 'Client',
    headerImage: {
        src: 'fa fa-rebel fa-3x text-danger'
    },
    GlobalSearch: GlobalSearch,
    GlobalToolbar: GlobalToolbar,
    routes: [
        {
            path: 'empire',
            default: 'true',
            image: {
                src: 'fa fa-empire',
                type: 'class'
            },
            navTitle: 'Empire',
            component: Forge,
            paramRoutes: [
                {
                    name: 'forgeId',
                    path: 'forge/:id',
                    component: Forge
                }
            ],
            redirects: [
                {
                    from: 'theOldEmpire/:id',
                    to: 'empire/:id'
                }
            ],
            routes: [
                {
                    path: 'empire/DarthVader',
                    navTitle: 'Darth Vader',
                    component: DarthVader
                },
                {
                    path: 'empire/DarthVader2',
                    navTitle: 'Darth Vader 2',
                    component: DarthVader
                },
                {
                    path: 'empire/DarthVader3',
                    navTitle: 'Darth Vader 3',
                    component: DarthVader
                }
            ]
        },
        {
            navTitle: 'Rebels',
            image: {
                src: 'fa fa-rebel fa-3x text-danger'
            },
            path: 'Rebels',
            component: Hammer
        }
    ],
     // routePermissions: [
     //   {
     //       routeName: 'Rebels',
     //       requiredPermissions: ['Forge', 'Apprentice']
     //   }
     // ],
    loginImage: 'src/img/forge_logo_orange.jpg'
};

export default function config(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONFIG:
            return state;
        default:
            return state;
    }
}

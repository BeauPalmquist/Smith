// IMPORT ROUTE COMPONENTS
import Forge from './containers/forge';
import Hammer from './containers/hammer';
import DarthVader from './components/DarthVader';
import GlobalToolbar from './containers/GlobalToolbar';
import GlobalSearch from './containers/GlobalSearch';
import Yoda from './containers/Yoda';
import CustomTitle from './components/CustomTitle';

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
    CustomTitle: CustomTitle,
    routes: [
        {
            path: 'empire',
            default: 'true',
            image: {
                src: 'wwwroot/src/img/chat.png',
                type: 'image'
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
                src: 'fa fa-rebel fa-3x text-danger',
                type: 'image'
            },
            path: 'Rebels',
            component: Hammer,
            feature: 'deathStar'
        },
        {
            navTitle: 'Jedi',
            image: {
                type: 'image',
                src: 'wwwroot/src/img/document_alt4.png'
            },
            path: 'Jedi',
            component: Yoda
        }
    ],
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

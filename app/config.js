﻿// IMPORT ROUTE COMPONENTS
import Forge from './containers/forge';
import Hammer from './containers/hammer';

const LOAD_CONFIG = "CLIENT/LOAD_CONFIG";

const initialState = {
    appName: "SmithClient",
    boldTitle: "Smith",
    title: 'Client',
    headerImage: "src/img/forge_logo_orange.jpg",
    routes: [
        {
            path: 'forge',
            "default": "true",
            navTitle: "Forge",
            selectedImage: "src/img/forge_anvil.png",
            component: Forge,
            paramRoutes: [
                {
                    name: 'forgeId',
                    path: '/forge/:id',
                    component: Forge
                }
            ],
            redirects: [
                {
                    from: '/otherForge/:id',
                    to: '/forge/:id'
                }
            ]
        },
        {
            //navTitle: "Hammer",
            selectedImage: "http://vignette3.wikia.nocookie.net/videogames-fanon/images/5/57/Batman_symbol.png/revision/latest?cb=20140106234647",            
            unselectedImage: "http://www.clipartbest.com/cliparts/aiq/zbL/aiqzbLgyT.gif",
            path: 'hammer',
            component: Hammer
        }
    ],
    routePermissions:[
        {
            routeName: 'hammer',
            requiredPermissions: ["Forge", "Apprentice"]
        }
    ],
    loginImage: "src/img/forge_logo_orange.jpg" 
}

export default function config(state = initialState, action){
    switch(action.type){
        case LOAD_CONFIG:
            return state;
        default:
            return state;
    }
}
var config = {
    appName: "SmithClient",
    boldTitle: "Smith",
    title: 'Client',
    headerImage: "src/img/forge_logo_orange.jpg",
    routes: [
        {
            name: 'forge',
            "default": "true",
            navTitle: "Forge",
            path: '/forge',
            selectedImage: "src/img/forge_anvil.png",
            unselectedImage: "http://www.stockhoffsonline.com/acatalog/Flatland%20forge%20rounding.jpg",
            handler: "forge",
            paramRoutes: [
                {
                    name: 'forgeId',
                    path: '/forge/:id',
                    handler: 'forge'
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
            name: 'hammer',
            //navTitle: "Hammer",
            selectedImage: "http://vignette3.wikia.nocookie.net/videogames-fanon/images/5/57/Batman_symbol.png/revision/latest?cb=20140106234647",            
            unselectedImage: "http://www.clipartbest.com/cliparts/aiq/zbL/aiqzbLgyT.gif",
            path: '/hammer',
            handler: "hammer"
        }
    ],
    //routePermissions:[
    //    {
    //        routeName: 'hammer',
    //        requiredPermissions: ["Forge", "Apprentice"]
    //    }
    //],
    loginImage: "src/img/forge_logo_orange.jpg" 
};

module.exports = config;
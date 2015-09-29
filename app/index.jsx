import {forgeApp} from '../src/root';
import config from './config.jsx';
import Forge from './routes/forge/components/forge';
import Hammer from './routes/hammer/components/hammer';

let routeComponents = {};
routeComponents.forge = Forge;
routeComponents.hammer = Hammer;
    
forgeApp(config, routeComponents, "index");
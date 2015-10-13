import forgeApp from '../src/index';
import reducers from './reducer';
import Forge from './routes/forge/components/forge';
import Hammer from './routes/hammer/components/hammer';

// Object with a number of components to register with Smith
let clientComponents = {};
clientComponents.forge = Forge;
clientComponents.hammer = Hammer;
    
forgeApp(reducers, clientComponents, "index");
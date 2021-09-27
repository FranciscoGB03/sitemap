import Home from "./components/Homepage/Home";
import NotFound from "./components/NotFound";
import About from "./components/About/About";

export const ROUTES = [
    {exact:true, path: '/', component:Home},
    {exact:true, path: '/About', component:About},
    {exact:true, path: '/Project', component:Home},
    {exact:true, path: '/projects/:projectName', component:Home},
    {exact:true, path: '/view', component:Home},
    {exact:true, path: '/contacts', component:Home},
    {exact:true, path: '/auth', component:Home},
    {component:NotFound}
];
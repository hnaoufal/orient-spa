import { routes } from "./libs/routes";

import { DashboardPage } from "./pages/dashboard";
import { HomePage } from "./pages/home";
import { StoresPage } from "./pages/stores";

import { core } from './libs/core';

import "./assets/styles/styles.scss";

(() => {
    core().init();

    routes.register({ pathName: '/', component: HomePage() })
    routes.register({ pathName: '/stores', component: StoresPage() })
    routes.register({ pathName: '/dashboard', component: DashboardPage() })
})();

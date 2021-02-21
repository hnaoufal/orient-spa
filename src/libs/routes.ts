interface RouterComponent {
    component: string; mount: any
}

export const routes = {
    _routes: {} as { [s: string]: RouterComponent},
    init: function () {
        const self = this;

        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target: any, thisArg: any, argArray?: any) => {
                const newPath = new URL(argArray[2]).pathname;
                self.loadPage(newPath);
                return target.apply(thisArg, argArray);
            },
        });

        // @ts-ignore
        window.onload = () => {
            routes.loadPage(location.pathname);
        }
    },
    register: function({ pathName, component } : { pathName: string, component: ReturnType<() => RouterComponent>}) {
        this._routes[pathName] = component;
    },
    push: function (pathName: string) {
        // @ts-ignore
        document.getElementById("app").innerHTML = this._routes[pathName].component;
        this._routes[pathName].mount();
        history.pushState(
            {},
            pathName,
            location.origin + pathName
        );
    },
    loadPage: function (pathName: string) {
        // @ts-ignore
        document.getElementById("app").innerHTML = this._routes[pathName].component;
        this._routes[pathName].mount();
    }
};

import _ from "../@lodash";

class EventEmitter {

    constructor() {
        this.events = {};
    }

    _getEventListByName(eventName) {
        if (typeof this.events[eventName] === 'undefined') {
            this.events[eventName] = new Set();
        }
        return this.events[eventName]
    }

    on(eventName, fn) {
        this._getEventListByName(eventName).add(fn);
    }

    once(eventName, fn) {

        const self = this;

        const onceFn = function (...args) {
            self.removeListener(eventName, onceFn);
            fn.apply(self, args);
        };
        this.on(eventName, onceFn);

    }

    emit(eventName, ...args) {

        this._getEventListByName(eventName).forEach(function (fn) {

            fn.apply(this, args);

        }.bind(this));

    }

    removeListener(eventName, fn) {
        this._getEventListByName(eventName).delete(fn);
    }
}

class KzUtils {

    static EventEmitter = EventEmitter;

    static generateRoutesFromConfigFiles(configs, defaultAuth) {

        let allRoutes = [];
        configs.forEach((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config, defaultAuth)
            ]
        });
        return allRoutes;
    };

    static setRoutes(config, defaultAuth) {

        let routes = [...config.routes];

        if (config.settings || config.auth) {
            routes = routes.map((route) => {
                let auth   = config.auth ? [...config.auth] : defaultAuth || null;
                let navbar = route.navbar ? route.navbar : null;
                return {
                    ...route,
                    settings: {...config.settings, ...route.settings},
                    auth,
                    navbar
                };
            });
        }

        return [...routes];
    };

    /**
     *
     * @param userRole
     * @param auth
     * @returns {boolean}
     */
    static checkNavbarPermission(userRole, auth) {
        return this.hasPermission(auth, userRole)
    }

    static hasPermission(authArray, userAuthority) {

        // ekranin auth configi yoksa true doner cunku ekran yetkisi guesttir.
        if (authArray === null || authArray === undefined) {
            return true;
        } else if (authArray.length === 0) { // eger ekranin authz arrayi 0'a esitse anonymoustur yetki verilir.
            return true;
        } else {
            const token = localStorage.getItem("access_token");
            if (token === undefined || token === null) {
                return false;
            }

            //eger user role bos bir array degilse
            if (userAuthority) {
                let map = userAuthority.map(v => v.code);
                // return authArray.some(r => map.includes(r));
                return map.some(ua => authArray.includes(ua))
            } else {
                return false;
            }
        }

    }

    /**
     * İf object null return "-"
     * @param {Object} value The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*}
     */
    static renderNullText(value, path) {
        return _.get(value, path, "-")
    }

}


export default KzUtils;
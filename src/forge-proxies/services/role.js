/*
    HomeDepot.Platform.Identity.Microservice Role API version 1.0.2-build020
    This code is auto-generated.  Any modificaions will be overwritten.
*/

import ajax from '../support/ajax';
import { Promise } from 'es6-promise';
import Auth from '../support/auth';
import Token from './token';
    
        export default (function() {
            var entityOptions = {
                baseUri: '/',
                environment: 'dev-forge'
            };

            var setOptions = function (options) {
                entityOptions.baseUri = options.baseUri || '';

                if (entityOptions.baseUri.length && entityOptions.baseUri[entityOptions.baseUri.length - 1] != '/')
                    entityOptions.baseUri = entityOptions.baseUri + '/';
            };

            var addAPIPermission = function(__instanceId, microservice, permission) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/addAPIPermission/' + __instanceId;

                if (typeof microservice !== 'undefined' && microservice !== null)
                    url += '/' + encodeURIComponent(microservice);
                if (typeof permission !== 'undefined' && permission !== null)
                    url += '/' + encodeURIComponent(permission);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var add = function(name, description) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/add';

                var postArgs = {};
                postArgs.name = (name === undefined ? null : name);
                postArgs.description = (description === undefined ? null : description);

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var addFeaturePermission = function(__instanceId, application, feature) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/addFeaturePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof feature !== 'undefined' && feature !== null)
                    url += '/' + encodeURIComponent(feature);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var addRoutePermission = function(__instanceId, application, route) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/addRoutePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof route !== 'undefined' && route !== null)
                    url += '/' + encodeURIComponent(route);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/fetch';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var getAll = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/getAll';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var getByName = function(name) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/getByName';

                if (typeof name !== 'undefined' && name !== null)
                    url += '/' + encodeURIComponent(name);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var getPermissions = function(__instanceId) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/getPermissions/' + __instanceId;

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var removeAPIPermission = function(__instanceId, microservice, permission) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/removeAPIPermission/' + __instanceId;

                if (typeof microservice !== 'undefined' && microservice !== null)
                    url += '/' + encodeURIComponent(microservice);
                if (typeof permission !== 'undefined' && permission !== null)
                    url += '/' + encodeURIComponent(permission);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var remove = function(name) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/remove';

                if (typeof name !== 'undefined' && name !== null)
                    url += '/' + encodeURIComponent(name);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var removeFeaturePermission = function(__instanceId, application, feature) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/removeFeaturePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof feature !== 'undefined' && feature !== null)
                    url += '/' + encodeURIComponent(feature);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var removeRoutePermission = function(__instanceId, application, route) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/removeRoutePermission/' + __instanceId;

                if (typeof application !== 'undefined' && application !== null)
                    url += '/' + encodeURIComponent(application);
                if (typeof route !== 'undefined' && route !== null)
                    url += '/' + encodeURIComponent(route);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var search = function(name) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/search';

                if (typeof name !== 'undefined' && name !== null)
                    url += '/' + encodeURIComponent(name);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var updateRoleDescription = function(__instanceId, description) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Identity.Microservice/1.0.2-build020/Role/updateRoleDescription/' + __instanceId;

                if (typeof description !== 'undefined' && description !== null)
                    url += '/' + encodeURIComponent(description);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };


            return {
                setOptions: setOptions,
                addAPIPermission: addAPIPermission,
                add: add,
                addFeaturePermission: addFeaturePermission,
                addRoutePermission: addRoutePermission,
                fetch: fetch,
                getAll: getAll,
                getByName: getByName,
                getPermissions: getPermissions,
                removeAPIPermission: removeAPIPermission,
                remove: remove,
                removeFeaturePermission: removeFeaturePermission,
                removeRoutePermission: removeRoutePermission,
                search: search,
                updateRoleDescription: updateRoleDescription
            }
        })();